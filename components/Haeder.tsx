import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Haeder = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/About Us",
    },
    {
      name: "Activate License",
      path: "/",
    },
    {
      name: "Contsct",
      path: "/contact",
    },
  ];

  return (
    <header className="w-full h-[8vh]">
      <div className="container py-2 flex flex-row">
        <div>
          <Image
            src="./assets/icons/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
        </div>
        <div className="flex flex-row xl:visible ">
          <div className="">
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  {link.name}
                </Link>
              );
            })}
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Haeder;
