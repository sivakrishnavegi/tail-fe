"use client"
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '../../constants'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
export const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col px-6 gap-6'>
        {sidebarLinks.map((link)=>{
        const isActive  = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
        return(
        <Link
        className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
         href={link.route} key={link.label}>
          <Image
          alt={link.label}
           src={link.imgURL}
           width={24}
           height={24}
           />
           <p className='text-light-1 max-lg:hidden'>
            {link.label}</p>      
        </Link>
          )
        })}
      </div>
      <div className='mt-10 px-6'>
      <SignedIn>
            <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
              <div className='flex cursor-pointer gap-4 p-4'>
                <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
                <p className='text-light-2 max-lg:hidden'>logout</p>
              </div>
              </SignOutButton>
            </SignedIn>
      </div>
       </section>
  )
}
