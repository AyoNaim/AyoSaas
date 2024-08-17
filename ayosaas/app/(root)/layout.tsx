import Sidebar from '@/components/shared/Sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'


const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <ThemeProvider
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <main className='root'>
        <Sidebar />
        <div className='root-container'>
          <div className='wrapper'>
            {children}
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default Layout