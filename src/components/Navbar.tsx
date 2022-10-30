import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 px-2">
        <div className="flex justify-start lg:w-0 text-base font-medium text-gray-500 hover:text-gray-900">
          <NavLink to="/">
            <i className="fa-solid fa-house text-2xl md:text-3xl text-yellow-900"></i>
          </NavLink>
        </div>
        <div>
          <button className="relative">
            <NavLink to="/cart">
              <i className="fa-solid fa-mug-hot items-center text-2xl md:text-3xl text-yellow-900"></i>
            </NavLink>
            <div className="flex items-center justify-center px-2 py-1 text-xs leading-none text-red-100 bg-red-600 rounded-full absolute right-0 bottom-0 translate-y-2/4 translate-x-2/4">
              3
            </div>
          </button>
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden items-center justify-end lg:flex lg:w-0">
          <NavLink
            to="/login"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Log in
          </NavLink>
          <NavLink
            to="/signup"
            className="ml-8 inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-800"
          >
            Sign up
          </NavLink>
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
        <Popover.Panel
          focus
          className="absolute inset-x-0 z-[100] top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-0">
              <div className="flex items-center justify-between">
                <div>
                  <NavLink to="/">Home</NavLink>
                </div>
                <button className="relative">
                  <NavLink to="/cart">
                    <i className="fa-solid fa-mug-hot items-center text-2xl md:text-3xl text-yellow-900"></i>
                  </NavLink>
                  <div className="flex items-center justify-center px-2 py-1 text-xs leading-none text-red-100 bg-red-600 rounded-full absolute right-0 bottom-0 translate-y-2/4 translate-x-2/4">
                    3
                  </div>
                </button>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8"></nav>
              </div>
            </div>
            <div className="space-y-2 py-4 px-5">
              <div>
                <NavLink
                  to="/signup"
                  className="flex items-center justify-center rounded-md border border-transparent bg-yellow-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-800"
                >
                  Sign up
                </NavLink>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <NavLink
                    to="/login"
                    className="text-yellow-900 hover:text-yellow-800"
                  >
                    Sign in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
