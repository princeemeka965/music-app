"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import ArtistDisplay from "@/helpers/artistDisplay";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { SET_PLAY_TRACK } from "@/reducers/artisteDataSlice";

interface ArtisteDetails {
  picture_medium?: string;
  name?: string;
}

interface TracksDetails {
  album: {};
  title: string;
  contributors: {}[];
  preview: {};
}

export default function SideBar(): React.ReactNode {
  const suggestedArtisteDetails: ArtisteDetails = useSelector(
    (state: RootState) => state.artisteData.artiste
  );

  const suggestedArtisteTracks: TracksDetails[] = useSelector(
    (state: RootState) => state.artisteData.tracks
  );

  const dispatch = useDispatch();

  const playTrack = (
    e: React.MouseEvent,
    preview: string,
    index: number
  ): void => {
    dispatch(SET_PLAY_TRACK(preview));
    e.currentTarget.querySelector("[data-avatar]")?.classList.add("album-logo");
    e.currentTarget.classList.add("bg-opaqueBlack");

    for (
      let i = 0;
      i < document.querySelectorAll("[data-avatar]").length;
      i++
    ) {
      if (i !== index) {
        document
          .querySelectorAll("[data-avatar]")
          [i].classList.remove("album-logo");

        document
          .querySelectorAll("[data-avatar]")
          [i].parentElement?.parentElement?.parentElement?.classList.remove(
            "bg-opaqueBlack"
          );
      }
    }
  };

  return (
    <>
      <div className="w-18 fixed h-full pl-4 pr-2 bg-skinDarkCloud">
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
              <Image
                src={
                  suggestedArtisteDetails?.picture_medium ||
                  "/3da9f71450c101da3ea36ad9157e06e6.png"
                }
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
                <span className="text-sm">{suggestedArtisteDetails?.name}</span>
                <span className="text-xs my-1 text-whiteFade">Artist</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col my-5 px-3">
            <div className="flex justify-between gap-3 my-2">
              <span className="text-sm font-semibold">Tracks</span>
              <Image
                src={"/play-circle.png"}
                width={16}
                height={16}
                style={{ height: "16px", objectFit: "contain" }}
                className="mx-3"
                alt="crown_logo"
              />
            </div>
            {suggestedArtisteTracks?.map((tracks: any, index: number) => (
              <div
                className="flex justify-between items-center w-full hover:bg-opaqueBlack cursor-pointer my-1 -ml-2 p-2"
                style={{ borderRadius: "8px" }}
                onClick={(e) => playTrack(e, tracks, index)}
                key={index}
              >
                <div className="flex space-between">
                  <div className="flex flex-col justify-center">
                    <Avatar data-avatar>
                      <AvatarImage src={tracks?.album.cover_medium} />
                      <AvatarFallback>JR</AvatarFallback>
                    </Avatar>
                  </div>
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
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
