"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { links } from "@/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const isUserLoggedIn = false;
  const pathname = usePathname();

  return (
    <header className="py-2">
      <div className="container mx-auto py-5 flex flex-row justify-between items-center">
        <div>
          <Image
            src="./assets/icons/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
        </div>
        <div className="">
          <div className="flex flex-row gap-8 justify-center items-center text-[white]">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "border-b-[2px] border-tertiary text-tertiary"
                  } capitalize font-medium hover:text-tertiary hover:border-b-[2px] hover:border-tertiary`}
                >
                  {link.name}
                </Link>
              );
            })}
            {isUserLoggedIn ? (
              <div className="flex flex-row gap-4">
                <Link href="/">
                  <Button>Buy Flash</Button>
                </Link>
                <Image
                  src=""
                  height={30}
                  width={30}
                  alt=""
                  className="rounded"
                />
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="secondary">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
