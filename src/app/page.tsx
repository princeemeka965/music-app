import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="absolute w-full h-full bg-overlay"
        style={{ zIndex: 4 }}
      />
      <Image
        alt="MusicBG"
        src={"/listening-man.jpg"}
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-full flex flex-col p-10 relative" style={{ zIndex: 9 }}>
        <div className="w-full flex justify-center animate__animated animate__backInDown">
          <Image
            src={"/music_corm.png"}
            width={146}
            height={146}
            style={{ height: "146px", objectFit: "contain" }}
            alt="music_logo"
          />
        </div>
        <div className="w-full flex flex-col flex-grow my-10 lg:p-6 md:p-6 justify-center animate__animated animate__fadeInDown">
          <div className="lg:flex md:flex hidden">
            <p
              className="lg:text-6xl md:text-6xl text-3xl text-white"
              style={{ lineHeight: "5rem" }}
            >
              Listen to your favorite <b style={{ color: "green" }}>9</b>ja
              music
            </p>
          </div>
          <p
            className="lg:flex md:flex hidden text-6xl text-white font-semibold"
            style={{ lineHeight: "5rem" }}
          >
            {" "}
            anytime, anywhere
          </p>
          <div className="lg:hidden md:hidden flex">
            <p className="text-3xl text-white" style={{ lineHeight: "2.7rem" }}>
              Listen to your favorite <b style={{ color: "green" }}>9</b>ja
              music anytime, anywhere
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center animate__animated animate__fadeInDown">
          <Link href={"/home"} className="lg:w-1/3 md:w-1/3 w-full">
            <Button variant={"outline"} className="shadow-lg w-full">
              <span className="p-3" style={{ fontFamily: "__Roboto_a789c4" }}>
                Get Started
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
