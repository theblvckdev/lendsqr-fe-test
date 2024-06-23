"use client";

import Button from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <main className="h-screen w-full lg:overflow-hidden bg-white">
        <div className="flex lg:flex-row flex-col h-full relative">
          <div className="absolute w-fit lg:top-20 top-8 md:left-24 left-3">
            <Logo height={150} width={150} />
          </div>
          <div className="basis-1/2 lg:block hidden h-screen">
            <div className="px-16 py-20 h-full grid place-items-center">
              <Image
                src={"/svg/pablo-sign-in-illustration.svg"}
                alt="Lendsqr sign in illustration"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="basis-1/2 h-full lg:shadow-spread">
            <div className="lg:pl-20 xl:pr-36 lg:pr-20 md:pr-24 md:pl-24 pr-3 pl-3 py-20 lg:h-full h-screen flex items-center lg:justify-normal justify-center">
              <div className="w-full">
                <h1 className="font-primary text-4xl font-bold text-secondary">
                  Welcome!
                </h1>
                <div className="text-accent mt-2 text-lg font-light">
                  Enter details to login.
                </div>

                <form
                  onSubmit={handleLogin}
                  className="mt-10 flex flex-col space-y-6"
                >
                  <FormInput
                    type="email"
                    value={email}
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <FormInput
                    type="password"
                    value={password}
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div>
                    <Link
                      href={"/forget-password"}
                      className="no-underline outline-none text-primary font-primary text-sm uppercase"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    buttonText="Log in"
                    buttonVariant="bg-primary"
                    textColor="text-white"
                    loading={loading}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
