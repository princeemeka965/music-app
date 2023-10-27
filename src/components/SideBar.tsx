"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { ArtisteStore } from "@/app/musicStore";
import { getArtisteDetails, getArtisteSongs } from "@/services/apiFactory";
import { Skeleton } from "./ui/skeleton";
import { ScrollArea } from "./ui/scroll-area";
import ArtistDisplay from "@/helpers/artistDisplay";
import TracksPlaceholder from "@/helpers/tracksPlaceholder";

interface ArtisteList {
  id: string;
  name: string;
  slug: string;
}

let artisteList: ArtisteList[];

export default function SideBar(): React.ReactNode {
  const [loading, setLoader] = useState<Boolean>(true);
  const [suggestedArtiste, setArtiste] = useState<ArtisteList | undefined>(
    undefined
  );
  const [suggestedArtisteDetails, setDetails] = useState<any>({});
  const [suggestedArtisteTracks, setTracks] = useState<{}[]>([]);

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
      slug: "",
    };

    if (filteredArtiste.length > 0) {
      artisteObj.id = filteredArtiste[0].id;
      artisteObj.name = filteredArtiste[0].name;
      artisteObj.slug = filteredArtiste[0].slug;

      // Now, you can call fetchArtisteDetails only if artisteObj has a valid slug
      if (artisteObj.slug !== "") {
        fetchArtisteDetails(artisteObj);
      }
    }
  }, []);

  const fetchArtisteDetails = async (data: ArtisteList): Promise<any> => {
    const artisteDetails = await getArtisteDetails(data.id);
    const artisteTracks = await getArtisteSongs(data.id);
    setArtiste(data);
    setDetails(artisteDetails.data);
    setTracks(artisteTracks.data.user.data);

    if (artisteDetails.data && artisteTracks.data) {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="w-18 fixed h-full px-4 bg-skinDarkCloud">
        <ScrollArea className="w-full h-full">
          <div className="flex w-full px-3 my-7">
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

          <div className="w-full flex flex-col my-4 px-3">
            <div className="flex justify-between my-2">
              <span className="text-sm font-semibold">Featured Artiste</span>
            </div>
            <div className="w-full flex flex-col my-2">
              {loading ? (
                <Skeleton style={{ width: 216, height: 216 }}></Skeleton>
              ) : (
                <>
                  <Image
                    src={suggestedArtisteDetails?.picture_medium}
                    width={200}
                    height={100}
                    style={{
                      objectFit: "contain",
                    }}
                    className="rounded-sm"
                    alt="artiste_img"
                  />
                  <div
                    className="px-5 py-2 flex flex-col w-[200px] bg-blurDark blur-view rounded-b-sm"
                    style={{ marginTop: -60 }}
                  >
                    <span className="text-sm">{suggestedArtiste?.name}</span>
                    <span className="text-xs my-1 text-whiteFade">Artist</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col my-4 px-3">
            <div className="flex justify-between my-2">
              <span className="text-sm font-semibold">Tracks</span>
            </div>
            {loading ? (
              <TracksPlaceholder />
            ) : (
              suggestedArtisteTracks?.map((tracks: any, index: number) => (
                <div
                  className="flex justify-between items-center w-full my-3"
                  key={index}
                >
                  <div className="flex">
                    <Avatar>
                      <AvatarImage src={tracks?.album.cover_medium} />
                      <AvatarFallback>JR</AvatarFallback>
                    </Avatar>
                    <div className="flex mx-3 flex-col justify-center">
                      <span className="text-sm">{tracks.title}</span>
                      <div className="w-full flex">
                        <span className="text-xs text-whiteFade my-1">
                          {ArtistDisplay(tracks?.contributors)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
