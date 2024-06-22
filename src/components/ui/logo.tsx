import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="no-underline outline-none">
        <Image
          src={"/svg/logo.svg"}
          alt="Lendsql logo"
          width={150}
          height={150}
        />
      </Link>
    </>
  );
};

export default Logo;
