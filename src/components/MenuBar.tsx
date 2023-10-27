import Image from "next/image";
import Link from "next/link";

export default function MenuBar(): React.ReactNode {
  return (
    <>
      <div className="w-18 fixed h-full px-2 bg-skinDarkCloud">
        <div className="flex w-full px-4">
          <Image
            src={"/music_corm.png"}
            width={100}
            height={100}
            style={{ height: "100px", objectFit: "contain" }}
            alt="music_logo"
          />
        </div>
        <div className="w-full flex flex-col my-4 px-4">
          <div className="flex">
            <Link href="/home" className="flex my-3">
              <div className="flex flex-col justify-center">
                <Image
                  src={"/home.png"}
                  width={20}
                  height={20}
                  style={{ height: "20px", objectFit: "contain" }}
                  alt="home"
                />
              </div>
              <div className="flex mx-5">
                <span className="text-base">Home</span>
              </div>
            </Link>
          </div>

          <div className="flex my-2">
            <Link href="/home" className="flex my-3">
              <div className="flex flex-col justify-center">
                <Image
                  src={"/Discovery.png"}
                  width={20}
                  height={20}
                  style={{ height: "20px", objectFit: "contain" }}
                  alt="home"
                />
              </div>
              <div className="flex mx-5">
                <span className="text-base text-whiteFade">Discovery</span>
              </div>
            </Link>
          </div>

          <div className="flex my-2">
            <Link href="/home" className="flex my-3">
              <div className="flex flex-col justify-center">
                <Image
                  src={"/albums.png"}
                  width={20}
                  height={20}
                  style={{ height: "20px", objectFit: "contain" }}
                  alt="home"
                />
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
