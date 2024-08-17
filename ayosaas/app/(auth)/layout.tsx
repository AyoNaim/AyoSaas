import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout