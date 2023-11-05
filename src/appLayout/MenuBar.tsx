"use client";

import { Album, Discover, Home } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MenuBar(): React.ReactNode {
  const pathname = usePathname();

  // detect route change with useEffect dependency
  useEffect(() => {
    console.log("route change with dependency", pathname);
  }, [pathname]);

  return (
    <>
      <div className="w-17 fixed h-full bg-skinDarkCloud">
        <div className="flex w-full px-8">
          <Image
            src={"/music_corm.png"}
            width={100}
            height={100}
            style={{ height: "100px", objectFit: "contain" }}
            alt="music_logo"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <div
            className={`flex ${
              pathname === "/home"
                ? "active-nav border-r-4 border-navGreen"
                : ""
            }`}
          >
            <Link href="/home" className="flex my-3 px-4">
              <div className="flex flex-col justify-center">
                <Home />
              </div>
              <div className="flex mx-5">
                <span className="text-base">Home</span>
              </div>
            </Link>
          </div>

          <div
            className={`flex my-2 ${
              pathname === "/discover"
                ? "active-nav border-r-4 border-navGreen"
                : ""
            }`}
          >
            <Link href="/discover" className="flex my-3 px-4">
              <div className="flex flex-col justify-center">
                <Discover />
              </div>
              <div className="flex mx-5">
                <span className="text-base text-whiteFade">Discovery</span>
              </div>
            </Link>
          </div>

          <div
            className={`flex ${
              pathname === "/albums"
                ? "active-nav border-r-4 border-navGreen"
                : ""
            }`}
          >
            <Link href="/albums" className="flex my-3 px-4">
              <div className="flex flex-col justify-center">
                <Album />
              </div>
              <div className="flex mx-5">
                <span className="text-base text-whiteFade">Albums</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
