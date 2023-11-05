"use client";

import { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import { Player } from "./audioPlayer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<string>("1");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="w-full bg-darkCloud flex h-full">
      <div className="w-17 flex flex-col h-screen relative">
        <MenuBar />
      </div>
      <div className="w-66 flex">{children}</div>
      <div className="w-18 flex flex-col h-screen relative">
        <SideBar />
      </div>
      <div className="fixed w-full bottom-0">
        <Player
          id={id}
          setId={setId}
          setIsFull={setIsFull}
          isFull={isFull}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}
