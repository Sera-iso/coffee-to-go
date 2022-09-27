import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isRegistrationScreenOrLegalTermsPage =  location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/terms"
  
  return (
    <Popover className="relative bg-white">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Coffee Shop</span>
              <img
                className="h-8 w-auto sm:h-20"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08aea422-eab9-428b-82c9-9c04e411bb8c/dbf6otc-01c5d677-8fcc-4513-aeb0-66ac580446c7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4YWVhNDIyLWVhYjktNDI4Yi04MmM5LTljMDRlNDExYmI4Y1wvZGJmNm90Yy0wMWM1ZDY3Ny04ZmNjLTQ1MTMtYWViMC02NmFjNTgwNDQ2YzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q3leHExsltuaN_cYUBXZ193NpSGkPoNhljUuLnTbjhU"
                alt="coffee shop logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link to="/" style={{ display : !isRegistrationScreenOrLegalTermsPage ? "none" : null}} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <a href="#productList" style={{ display : isRegistrationScreenOrLegalTermsPage ? "none" : null}} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Products
            </a>           
            <a href="#contacts" style={{ display : isRegistrationScreenOrLegalTermsPage ? "none" : null}} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contacts
            </a>

          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to="/login" href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-800"
            >
              Sign up
            </Link>
          </div>
        </div>

      {/* below code for mobile nav */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 z-[100] top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08aea422-eab9-428b-82c9-9c04e411bb8c/dbf6otc-01c5d677-8fcc-4513-aeb0-66ac580446c7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4YWVhNDIyLWVhYjktNDI4Yi04MmM5LTljMDRlNDExYmI4Y1wvZGJmNm90Yy0wMWM1ZDY3Ny04ZmNjLTQ1MTMtYWViMC02NmFjNTgwNDQ2YzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q3leHExsltuaN_cYUBXZ193NpSGkPoNhljUuLnTbjhU"
                    alt="Coffee shop"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#productList" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Products
                </a>
                <a href="#contacts" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contacts
                </a>
              </div>
              <div>
                <Link to="/signup"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-800"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link to="/login" className="text-yellow-900 hover:text-yellow-800">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}