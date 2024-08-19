import mongoose, { Mongoose } from 'mongoose'

// Ensure you have the correct environment variable name
const MONGODB_URL = process.env.MONGODB_URL as string;

// Interface for managing the connection cache
interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Cache object for storing the database connection
let cached: MongooseConnection = (global as any)._mongoose;

if (!cached) {
    cached = (global as any)._mongoose = {
        conn: null,
        promise: null,
    };
}

/**
 * Connect to the MongoDB database
 * @returns The Mongoose connection object
 */
export const connectToDatabase = async (): Promise<Mongoose> => {
    // Return the cached connection if it exists
    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGODB_URL) {
        throw new Error('Missing MongoDB URL. Please check your environment variables.');
    }

    try {
        // Create a new connection if not cached
        cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
            dbName: 'ayosaas',
            bufferCommands: false,
        });

        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB. See server logs for more details.');
    }
};
