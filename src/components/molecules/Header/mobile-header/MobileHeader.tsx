import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/20/solid";

type MobileHeaderProps = {
  // Define component props here
};

export const MobileHeader = (props: MobileHeaderProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div className="md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <Bars3Icon className="h-6 w-6 text-gray-50" />
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <NavLink
              to="/features"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Pricing
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/blog"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Blog
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/about"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact us
            </NavLink>
          </li>
          {/* <li className="py-2 my-2 border-t border-b border-gray-700">
            <span className="flex text-gray-300 py-2">Support</span>
            <ul className="pl-4">
              <li>
                <NavLink
                  to="/help/frequently-asked-questions"
                  className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Help center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/404"
                  className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                  onClick={() => setMobileNavOpen(false)}
                >
                  404
                </NavLink>
              </li>
            </ul>
          </li> */}
          <li>
            <NavLink
              to="/signin"
              className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
