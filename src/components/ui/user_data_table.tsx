"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import axios from "axios";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { IoChevronBack, IoChevronForward, IoEyeOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import UserLoaingSkeleton from "./user_data_loading_sekeleton";
import { FaAngleLeft } from "react-icons/fa";

const tableHeadData: string[] = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

interface UserMenuTypes {
  path?: string;
  title: string;
  icon: ReactElement;
}

interface UserDataTypes {
  createdAt: string;
  email: string;
  id: string;
  organization: string;
  phone_number: string;
  status: boolean;
  blacklisted: boolean;
  username: string;
}

const userDataTableMenu: UserMenuTypes[] = [
  {
    title: "View Details",
    icon: <IoEyeOutline className="text-lg" />,
  },

  {
    path: "/",
    title: "Blacklist User",
    icon: <FiUserX className="text-lg" />,
  },

  {
    path: "/",
    title: "Log Out",
    icon: <FiUserCheck className="text-lg" />,
  },
];

const UserDataTable = () => {
  const [users, setUsers] = useState<UserDataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsersData: () => Promise<void> = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://667b427dbd627f0dcc9220cf.mockapi.io/api/users/users_data"
        );

        setLoading(false);
        setUsers(response.data);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    getUsersData();
  }, []);

  return (
    <>
      <div className="bg-white shadow-spread p-4 rounded xl:overflow-visible overflow-x-auto overflow-y-hidden w-full">
        <table className="xl:w-full lg:w-screen md:w-[120vw] w-[230vw]">
          <thead>
            <tr>
              {tableHeadData.map((data, index) => {
                return (
                  <th
                    key={index}
                    className={`py-2 font-secondary text-[12px] w-fit text-left font-semibold text-accent uppercase ${
                      data === "date joined" ? "md:table-cell hidden" : null
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="truncate">{data}</div>
                      <button
                        className={`outline-none ${
                          data === "date joined" ? "md:table-cell hidden" : null
                        }`}
                      >
                        <MdFilterList className="text-lg" />
                      </button>
                    </div>
                  </th>
                );
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
                <UserLoaingSkeleton />
              </>
            ) : (
              users.slice(0, 10).map((data, index) => {
                const {
                  createdAt,
                  email,
                  id,
                  organization,
                  phone_number,
                  username,
                  status,
                  blacklisted,
                } = data;

                // The ISO 8601 date string
                const isoDateString = createdAt;

                // Create a Date object from the ISO string
                const date = new Date(isoDateString);

                // Array of abbreviated month names
                const monthNames = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ];

                // Extract the date components
                const year = date.getUTCFullYear();
                const month = monthNames[date.getUTCMonth()]; // Months are zero-indexed, so this works directly
                const day = date.getUTCDate().toString().padStart(2, "0");
                let hours = date.getUTCHours();
                const minutes = date
                  .getUTCMinutes()
                  .toString()
                  .padStart(2, "0");
                // const seconds = date.getUTCSeconds().toString().padStart(2, "0");

                // Determine AM or PM suffix
                const ampm = hours >= 12 ? "PM" : "AM";

                // Convert hours from 24-hour to 12-hour format
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                const hoursStr = hours.toString().padStart(2, "0");

                // Format the date components into a readable format
                const readableDate = `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;

                return (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 border-b-gray-100 w-full
          "
                  >
                    <td className="text-[12px] font-secondary text-gray-400 py-2">
                      {organization}
                    </td>
                    <td className="text-[12px] font-secondary text-gray-400 py-2">
                      {username}
                    </td>
                    <td className="text-[12px] font-secondary text-gray-400 py-2">
                      {email}
                    </td>
                    <td className="text-[12px] font-secondary text-gray-400 py-2 md:text-left text-center">
                      {phone_number}
                    </td>
                    <td className="text-[12px] font-secondary text-gray-400 py-2 md:table-cell hidden">
                      {readableDate}
                    </td>
                    <td
                      className="text-[12px] font-secondary text-gray-400 py-2
                  "
                    >
                      {blacklisted ? (
                        <div className="py-1 px-2 rounded-full text-center bg-red-50 text-red-400">
                          Blacklisted
                        </div>
                      ) : status ? (
                        <div className="py-1 px-2 rounded-full text-center bg-lime-100 text-lime-500">
                          Active
                        </div>
                      ) : (
                        <div className="py-1 px-2 rounded-full text-center bg-gray-50 text-gray-400">
                          Inactive
                        </div>
                      )}
                    </td>
                    <td className="font-secondary text-accent py-2 pl-7">
                      <Popover className="relative">
                        <PopoverButton className="outline-none">
                          <BsThreeDotsVertical className="text-lg" />
                        </PopoverButton>

                        <PopoverPanel
                          transition
                          className="absolute xl:-left-[45px] md:left-1/3 -left-[58px] z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="w-screen max-w-[150px] flex-auto overflow-hidden rounded-md bg-white text-[12px] leading-6 shadow ring-1 ring-gray-200">
                            <div>
                              {userDataTableMenu.map((data, index) => {
                                const { icon, title } = data;

                                return (
                                  <Link
                                    href={`/users/${id}`}
                                    className="outline-none w-full py-2 px-4 text-accent duration-200 ease-in hover:bg-gray-50 font-secondary flex items-center gap-3"
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
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <div className="flex flex-row md:gap-y-0 gap-y-3 items-center">
          <div className="md:mr-auto mr-auto">
            <div className="flex gap-2 items-center">
              <div className="text-[13px] text-accent font-primary md:block hidden">
                Showing
              </div>

              <div>
                <select className="p-1.5 rounded w-[60px] outline-none bg-secondary text-secondary font-primary bg-opacity-10 text-[12px]">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>

              <div className="text-[13px] text-accent font-primary">
                out of 100
              </div>
            </div>
          </div>

          <div>
            <div className="flex md:gap-4 gap-2 items-center">
              <button className="bg-secondary p-1.5 rounded-md text-secondary font-primary bg-opacity-10 outline-none">
                <IoChevronBack />
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                1
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                2
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                3
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                ...
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                15
              </button>

              <button className="bg-transparent text-[13px] rounded-md text-accent font-primary bg-opacity-10 outline-none">
                16
              </button>

              <button className="bg-secondary p-1.5 rounded-md text-secondary font-primary bg-opacity-10 outline-none">
                <IoChevronForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataTable;
