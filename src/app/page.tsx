import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex p-6 bg-darkCloud h-full">
        <div className="w-full flex justify-center">
          <Image
            src={"/music_corm.png"}
            width={146}
            height={146}
            style={{ height: "146px", objectFit: "contain" }}
            alt="music_logo"
          />
        </div>
      </div>
    </>
  );
}
