import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Modal } from './Modal'

const MobileNav = () => {
  return (
    <header className='header'>
        <Link href={'/'} className='flex items-center gap-2 md:py-2'>
            <Image src={'/logo-text.svg'} alt='logo' width={128} height={28} />
        </Link>
        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <Modal />
            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav