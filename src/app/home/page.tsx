"use client";

import AppLayout from "@/appLayout/appLayout";
import { HeadPhone } from "@/icons";
import { getBillBoardSongs } from "@/services/apiFactory";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home(): React.ReactNode {
  const [billBoardData, setBillBoardData] = useState<{}[]>([]);

  useEffect(() => {
    fetchBillBoardData();
  }, []);

  const fetchBillBoardData = async () => {
    const response = await getBillBoardSongs();
    setBillBoardData(response.data.chart_items);
  };

  return (
    <>
      <AppLayout>
        <div className="flex flex-col w-full my-8">
          <p className="text-base font-bold text-white">
            Top Global BillBoard Charts
          </p>
          <div className="flex w-full flex-col my-10">
            {billBoardData.map((data: any, index) => (
              <div className="w-full flex justify-between gap-10" key={index}>
                <div className="flex gap-6 w-full">
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold text-white">{index + 1}</p>
                  </div>
                  <div className="flex w-full flex-col active-nav px-5">
                    <div
                      className="flex w-full justify-between border-b py-5"
                      style={{ borderColor: "#4D4D4D" }}
                    >
                      <div className="flex w-3/4 flex-grow">
                        <a
                          href={data.item.url}
                          target="_blank"
                          className="flex"
                        >
                          <Image
                            src={
                              data?.item.header_image_url ||
                              "/fc153780fbd6853471e97e4f4ac6466c.png"
                            }
                            width={54}
                            height={54}
                            style={{
                              height: "54px",
                              objectFit: "contain",
                              borderRadius: "12px",
                            }}
                            alt="album_logo"
                          />
                          <div className="flex flex-col mx-4 justify-center">
                            <p className="text-white text-base font-semibold my-1">
                              {data?.item.title}
                            </p>
                            <p className="text-whiteFade text-xs">
                              {data?.item.primary_artist.name}
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="flex w-1/4 justify-end gap-6">
                        <div className="flex w-full justify-end">
                          <div className="flex flex-col w-1/10 justify-center">
                            <HeadPhone />
                          </div>
                          <div className="flex flex-col w-1/2 justify-center">
                            <p
                              className="text-white text-sm mx-3 font-semibold"
                              style={{ marginTop: 3 }}
                            >
                              {(data?.item.stats.pageviews).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
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
