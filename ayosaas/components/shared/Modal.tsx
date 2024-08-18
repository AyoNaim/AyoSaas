'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"

export function Modal() {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img src={'/menu.svg'} alt="menu" />
      </SheetTrigger>
      <SheetContent className="sheet-content sm:w-64">
        <div>
            <img src="logo-text.svg" alt="logo" />
            <SignedIn>
            <ul className='sidebar-nav-elements'>
              {
                navLinks.map((item) => {
                  const isActive = item.route === pathname
                  return (
                    <Link href={item.route} className={`sidebar-nav_element group ${
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
            <li className='flex justify-start items-end cursor-pointer gap-2 p-4 bottom-0 left-0 right-full top-full'>
              <UserButton afterSignOutUrl='/' showName />
            </li>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href={'/sign-in'}>Log in</Link>
            </Button>
          </SignedOut>
          </div>
      </SheetContent>
    </Sheet>
  )
}
