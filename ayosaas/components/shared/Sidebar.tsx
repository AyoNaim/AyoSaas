'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='sidebar bg-red-500 text-black'>
      <div className='flex size-full flex-col gap-4'>
        <Link href={'./'}>
          <Image src={'/logo-text.svg'} alt='logo' width={180} height={28} />
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav-elements'>
              {
                navLinks.map((item) => {
                  const isActive = item.route === pathname
                  return (
                    <Link href={item.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient' : ""}`}></Link>
                  )
                })
              }
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar