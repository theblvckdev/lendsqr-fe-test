import Image from "next/image";
import { ReactElement } from "react";

interface AchivementDataTypes {
  icon: ReactElement;
  title: string;
  amount: number;
}

export const achivementData: AchivementDataTypes[] = [
  {
    title: "users",
    icon: (
      <Image
        src={"/svg/np_users.svg"}
        alt="svg user icon"
        width={39}
        height={39}
      />
    ),
    amount: 2453,
  },

  {
    title: "Active users",
    icon: (
      <Image
        src={"/svg/np_users 2.svg"}
        alt="svg user icon"
        width={39}
        height={39}
      />
    ),
    amount: 2453,
  },

  {
    title: "Users with loans",
    icon: (
      <Image
        src={"/svg/np_loans.svg"}
        alt="svg user icon"
        width={39}
        height={39}
      />
    ),
    amount: 12453,
  },

  {
    title: "Users with savings",
    icon: (
      <Image
        src={"/svg/np_loans 2.svg"}
        alt="svg user icon"
        width={39}
        height={39}
      />
    ),
    amount: 102453,
  },
];
