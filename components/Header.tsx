import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { links } from "@/constants";

const Header = () => {
  const isUserLoggedIn = true;

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
                <Link key={index} href={link.path}>
                  {link.name}
                </Link>
              );
            })}
            {isUserLoggedIn ? (
              <Image src="" height={30} width={30} alt="" className="rounded" />
            ) : (
              <Link href="/Sign-In">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
