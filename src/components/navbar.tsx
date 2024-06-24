import React, { ReactElement } from "react";
import Logo from "./ui/logo";
import {
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import path from "path";

interface ProfileAvatarDropdownDataType {
  path: string;
  title: string;
  icon: ReactElement;
}

const profileAvatarDropdownData: ProfileAvatarDropdownDataType[] = [
  {
    path: "/",
    title: "Profile",
    icon: <IoPersonOutline className="text-lg" />,
  },

  {
    path: "/",
    title: "Account Settings",
    icon: <IoSettingsOutline className="text-lg" />,
  },

  {
    path: "/",
    title: "Log Out",
    icon: <IoLogOutOutline className="text-lg" />,
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow py-4 z-50 fixed top-0 left-0 right-0 w-full">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="mr-auto">
            <div className="flex items-center">
              <Logo width={130} height={130} />

              <form className="flex ml-36">
                <input
                  type="text"
                  className="py-2 px-5 bg-white ring-1 ring-gray-200 rounded-l-lg outline-none box-border w-[350px] text-sm duration-200 font-primary ease-in focus:ring-primary text-gray-400"
                  placeholder="Search for anything"
                />
                <button className="py-2.5 px-4 bg-primary ring-1 outline-none ring-primary text-white rounded-r-lg">
                  <IoSearchOutline />
                </button>
              </form>
            </div>
          </div>

          <div className="flex gap-7 items-center">
            <Link
              href={"/"}
              className="font-primary text-secondary underline outline-none text-sm"
            >
              Docs
            </Link>

            <Popover className="relative">
              <PopoverButton className="outline-none text-secondary">
                <IoNotificationsOutline className="text-2xl" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-[300px] flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow ring-1 ring-gray-200">
                  <div className="p-3 border-b border-b-gray-200 font-primary text-sm text-secondary">
                    Notifications
                  </div>

                  <div className="h-[300px] flex items-center justify-center">
                    <h3 className="text-sm font-primary text-gray-400">
                      No notifications
                    </h3>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex gap-3 items-center outline-none">
                <div className="overflow-hidden rounded-full h-10 w-10 bg-gray-100">
                  <Image
                    src={"/images/avatar.png"}
                    alt="Profile avater"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                <div className="flex gap-2 items-center text-secondary ">
                  <div className="font-primary text-sm">Nathaniel</div>

                  <GoTriangleDown />
                </div>
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-[200px] flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow ring-1 ring-gray-200">
                  <div>
                    {profileAvatarDropdownData.map((data, index) => {
                      const { icon, path, title } = data;

                      return (
                        <Link
                          href={path}
                          className="outline-none w-full py-2 px-4 text-gray-400 duration-200 ease-in hover:bg-gray-50 font-primary flex items-center gap-3"
                          key={index}
                        >
                          {icon}
                          <div>{title}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
