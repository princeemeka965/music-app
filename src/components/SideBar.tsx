"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { ArtisteStore } from "@/app/musicStore";
import { getArtisteDetails } from "@/services/apiFactory";

interface ArtisteList {
  id: string;
  name: string;
}

let artisteList: ArtisteList[];

export default function SideBar(): React.ReactNode {
  const [suggestedArtiste, setArtiste] = useState<{}>({});

  useEffect(() => {
    artisteList = ArtisteStore();
    // get a random artise to display
    const randomIndex = Math.floor(Math.random() * artisteList.length);

    const filteredArtiste = artisteList.filter(
      (x, index) => index === randomIndex
    );

    let artisteObj: ArtisteList = {
      id: "",
      name: "",
    };

    artisteObj.id = filteredArtiste[0].id;
    artisteObj.name = filteredArtiste[0].name;

    console.log(artisteObj);

    fetchArtisteDetails(artisteObj.id);
  }, []);

  const fetchArtisteDetails = (data: string): any => {
    getArtisteDetails(data);
  };

  return (
    <>
      <div className="w-1/6 fixed h-full px-2 bg-skinDarkCloud">
        <div className="flex w-full px-4 my-7">
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div className="flex mx-3 flex-col justify-center">
            <span className="text-base">James Rodriguez</span>
            <div className="w-full flex">
              <span className="text-xs text-whiteFade my-1">Premium</span>
              <div className="flex flex-col justify-center">
                <Image
                  src={"/crown.png"}
                  width={16}
                  height={16}
                  style={{ height: "16px", objectFit: "contain" }}
                  className="mx-3"
                  alt="crown_logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col my-4 px-4">
          <div className="flex justify-between my-2">
            <span className="text-sm font-bold">Fans Also Like</span>
          </div>
          <div className="w-full">
            <Image
              src={"https://api.deezer.com/artist/13/image"}
              width={234}
              height={234}
              style={{ height: "234px", objectFit: "contain" }}
              alt="artiste_img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
