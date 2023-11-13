"use client";

import AppLayout from "@/appLayout/appLayout";
import { ArtisteStore } from "@/helpers/artistStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Discover(): React.ReactNode {
  const [allArtiste, setAllArtiste] = useState<{}[]>([]);

  useEffect(() => {
    fetchNaijaArtist();
  }, []);

  const fetchNaijaArtist = () => {
    const artisteList = ArtisteStore();

    setAllArtiste(artisteList);
  };

  return (
    <>
      <AppLayout>
        <div className="flex flex-col w-full my-8">
          <p className="text-base font-bold text-white">All Nigerian Artists</p>
          <div className="flex gap-12 flex-wrap my-8">
            {allArtiste.map((artistesData: any, index) => (
              <div className="flex justify-between gap-1" key={index}>
                <div className="flex flex-col gap-5">
                  <Image
                    src={
                      artistesData?.photo ||
                      "/fc153780fbd6853471e97e4f4ac6466c.png"
                    }
                    width={150}
                    height={150}
                    style={{
                      height: "140px",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                    alt="album_logo"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex  justify-center">
                      <p className="text-white text-sm font-semibold">
                        {artistesData?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
}
