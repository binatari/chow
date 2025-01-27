
import React from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Link } from 'react-router-dom'
import NavContent from './navContent'

const DashboardNav = () => {
  return (
    <header className="fixed left-0 top-0 flex justify-between h-14 w-full items-center gap-4 bg-white pl-4 pr-4 md:pl-[320px] lg:h-[60px] md:hidden ">
    <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/small-logo.svg"/>
            </Link>
    <div>
    <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <img
                src="/small-logo.svg"
                className="mr-3 h-10"
                alt="Home Logo"
              />
              <span className="sr-only">Chow Africa</span>
            </Link>
           <NavContent/>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
   
    
     
    </header>
  )
}

export default DashboardNav
