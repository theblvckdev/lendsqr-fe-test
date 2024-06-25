"use client";

import { sidebarMenuData } from "@/data/sidebarmenu_data";
import { useSidebar } from "@/hooks/useSidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <aside
        className={`fixed xl:w-[20%] lg:w-[25%] md:w-[33%] w-[70%] lg:duration-0 duration-200 ease-in z-40 bg-white shadow h-screen xl:left-0 lg:left-0 ${
          isSidebarOpen ? "left-0" : "md:-left-[33%] -left-[70%]"
        } top-0 py-16 overflow-y-auto sidebar`}
      >
        <div className="h-full py-8">
          <div>
            <button className="w-full outline-none py-2 px-5 flex items-center gap-3 hover:bg-primary hover:bg-opacity-5 text-secondary border-l-4 border-l-transparent duration-200 ease-in hover:border-l-primary">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/svg/briefcase 1.svg"}
                  alt="svg briefcase icon"
                  width={18}
                  height={18}
                />

                <div className="font-secondary text-sm">
                  Switch Organization
                </div>
              </div>

              <div>
                <IoChevronDownOutline />
              </div>
            </button>
          </div>

          <div className="my-5">
            <div>
              <button className="w-full outline-none py-2 px-5 hover:bg-primary hover:bg-opacity-5 text-secondary border-l-4 opacity-60 hover:opacity-100 border-l-transparent duration-200 ease-in hover:border-l-primary">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/svg/home 1.svg"}
                    alt="svg home icon"
                    width={20}
                    height={20}
                  />

                  <div className="font-secondary text-sm">Dashboard</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            {sidebarMenuData.map((data, index) => {
              const { category, submenu } = data;

              return (
                <div key={index}>
                  <div className="py-2 px-5 text-secondary text-[12px] font-semibold font-secondary uppercase">
                    {category}
                  </div>

                  <div className="flex flex-col space-y-2">
                    {submenu.map((data, index) => {
                      const { icon, path, title } = data;

                      title === "Users"
                        ? (data.isActive = true)
                        : (data.isActive = false);

                      return (
                        <Link
                          href={path}
                          key={index}
                          className={`w-full block outline-none py-2 px-5 hover:bg-primary hover:bg-opacity-10 text-secondary border-l-4 hover:opacity-100 duration-200 ease-in hover:border-l-primary ${
                            data.isActive
                              ? "border-l-primary bg-opacity-10 opacity-100 bg-primary"
                              : "bg-transparent border-l-transparent opacity-60"
                          }`}
                        >
                          <div className="flex gap-3 items-center">
                            {icon}

                            <div className="font-secondary text-sm">
                              {title}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
