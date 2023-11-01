"use client";

import AppLayout from "@/components/appLayout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface TrackData {
  album: {};
  title: string;
  contributors: {}[];
  preview: string;
}

export default function Home(): React.ReactNode {
  const activeTrack: TrackData = useSelector(
    (state: RootState) => state.artisteData.track
  );

  return (
    <>
      <AppLayout>
        <div />
      </AppLayout>
    </>
  );
}
