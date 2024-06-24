import React, { ReactElement } from "react";
import Image from "next/image";

interface SubmenuArrayTypes {
  title: string;
  isActive?: boolean;
  path: string;
  icon: ReactElement;
}

interface SidbarMenuDataTypes {
  category: string;
  submenu: SubmenuArrayTypes[];
}

export const sidebarMenuData: SidbarMenuDataTypes[] = [
  {
    category: "Customers",
    submenu: [
      {
        title: "Users",
        isActive: false,
        path: "/",
        icon: (
          <Image
            src={"/svg/user-friends 1.svg"}
            alt="svg user friends icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Guarantors",

        path: "/",
        icon: (
          <Image
            src={"/svg/users 1.svg"}
            alt="svg user friends icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Loans",

        path: "/",
        icon: (
          <Image
            src={"/svg/sack 1.svg"}
            alt="svg money sack icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Descision Models",
        path: "/",
        icon: (
          <Image
            src={"/svg/handshake-regular 1.svg"}
            alt="svg handshake icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Savings",
        path: "/",
        icon: (
          <Image
            src={"/svg/piggy-bank 1.svg"}
            alt="svg piggy-bank icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Loan Requests",
        path: "/",
        icon: (
          <Image
            src={"/svg/Group 104.svg"}
            alt="svg hand holding money icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Whitelist",
        path: "/",
        icon: (
          <Image
            src={"/svg/user-check 1.svg"}
            alt="svg user check icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Karma",
        path: "/",
        icon: (
          <Image
            src={"/svg/user-times 1.svg"}
            alt="svg user times icon"
            width={20}
            height={20}
          />
        ),
      },
    ],
  },

  {
    category: "Business",
    submenu: [
      {
        title: "Organization",
        path: "/",
        icon: (
          <Image
            src={"/svg/briefcase 1.svg"}
            alt="svg briefcase icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Loan Products",
        path: "/",
        icon: (
          <Image
            src={"/svg/Group 104.svg"}
            alt="svg hand holding money icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Savings Product",
        path: "/",
        icon: (
          <Image
            src={"/svg/np_bank.svg"}
            alt="svg bank icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Fees and Charges",
        path: "/",
        icon: (
          <Image
            src={"/svg/coins-solid 1.svg"}
            alt="svg coins icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Transactions",
        path: "/",
        icon: (
          <Image
            src={"/svg/icon.svg"}
            alt="svg transaction icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Services",
        path: "/",
        icon: (
          <Image
            src={"/svg/galaxy 1.svg"}
            alt="svg galaxy icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Service Account",
        path: "/",
        icon: (
          <Image
            src={"/svg/user-cog 1.svg"}
            alt="svg user cog icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Settlements",
        path: "/",
        icon: (
          <Image
            src={"/svg/scroll 1.svg"}
            alt="svg scroll icon"
            width={20}
            height={20}
          />
        ),
      },

      {
        title: "Reports",
        path: "/",
        icon: (
          <Image
            src={"/svg/chart-bar 2.svg"}
            alt="svg chart bar icon"
            width={20}
            height={20}
          />
        ),
      },
    ],
  },

  {
    category: "Settings",
    submenu: [
      {
        title: "Preferences",
        path: "/",
        icon: (
          <Image
            src={"/svg/sliders-h 1.svg"}
            alt="svg control-panel icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Fees and Pricing",
        path: "/",
        icon: (
          <Image
            src={"/svg/badge-percent 1.svg"}
            alt="svg badge icon"
            width={18}
            height={18}
          />
        ),
      },

      {
        title: "Audit Logs",
        path: "/",
        icon: (
          <Image
            src={"/svg/clipboard-list 1.svg"}
            alt="svg clipboard icon"
            width={17}
            height={17}
          />
        ),
      },
    ],
  },
];
