import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoPropsType {
  height: number;
  width: number;
}

const Logo = ({ height, width }: LogoPropsType) => {
  return (
    <>
      <Link href={"/"} className="no-underline outline-none">
        <Image
          src={"/svg/logo.svg"}
          alt="Lendsql logo"
          width={width}
          height={height}
        />
      </Link>
    </>
  );
};

export default Logo;
