import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Hello world </h1>
      <Link href={"/login"}>Login</Link>
    </>
  );
};

export default Home;
