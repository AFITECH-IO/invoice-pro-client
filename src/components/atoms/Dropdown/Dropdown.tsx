import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "~src/utils";

type DropdownProps = {
  items?: DropdownItem[];
  hasLogout?: boolean;
  logoutHander?: () => void;
  position?: "left" | "right";
  children?: React.ReactNode;
};

type DropdownItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

export const Dropdown = (props: DropdownProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);

  useEffect(() => {
    if (props.items) setDropdownItems(props.items);
  }, [props.items]);

  function renderDropdownItems() {
    return dropdownItems.map((item, index) => (
      <Menu.Item key={index}>
        {({ active }) => (
          <a
            href="#"
            onClick={item.onClick}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {item.icon && item.icon}
            {item.label}
          </a>
        )}
      </Menu.Item>
    ));
  }

  function onLogoutHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (props.logoutHander) {
      props.logoutHander();
    }
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span>Select Options...</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.items && renderDropdownItems()}
            {props.children && props.children}
            {props.hasLogout && (
              <form onSubmit={onLogoutHandler}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
