import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="text-[white] container mx-auto my-5">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-lg text-tertiary">- Flash USDT Sender</p>
          </div>
          <div>
            <h1 className="text-[50px] pb-5">
              Send Flash Usdt <br /> quickly and simply
            </h1>
            <Link href="/pricing">
              <Button className="rounded-md">Get License now</Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/image.jpg"
            width={500}
            height={500}
            alt="/header image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
