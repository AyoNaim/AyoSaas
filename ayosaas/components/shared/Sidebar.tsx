'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href={'./'}>
          <Image src={'/logo-text.svg'} alt='logo' width={180} height={28} />
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav-elements'>
              {
                navLinks.slice(0, 6).map((item) => {
                  const isActive = item.route === pathname
                  return (
                    <Link key={item.label} href={item.route} className={`sidebar-nav_element group ${
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                      <Link href={'./'} className='sidebar-link'>
                        <Image src={item.icon} alt='logo' width={20} height={20} className={ `${isActive && 'brightness-200'}` }/>
                        {item.label}
                      </Link>
                    </Link>
                  )
                })
              }
            </ul>
          </SignedIn>
          <SignedIn>
            <li className='flex justify-start cursor-pointer gap-2 p-4 bottom-0 left-0'>
              <UserButton afterSignOutUrl='/' showName />
            </li>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href={'/sign-in'}>Log in</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar