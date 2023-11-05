import Image from "next/image";
import * as C from "./styles";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  VolumeOff,
  VolumeOn,
  Shuffle,
  Repeat,
} from "./svgs";
import { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
};

const musics = [
  {
    name: "Both of Us",
    author: "madIRFAN",
    genre: "Beats",
    audio:
      "https://cdns-preview-e.dzcdn.net/stream/c-e6f8c4803dc7cbbd66684cec89919b14-6.mp3",
    album_img: "https://api.deezer.com/album/413093857/image",
    id: "1",
  },
];

export const Player = ({
  id,
  setId,
  setIsFull,
  isFull,
  windowWidth,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number | undefined>(30);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioTag = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLProgressElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (id !== "") {
      if (isPlaying) {
        audioTag.current?.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
        if (audioTag.current !== null && audioTag.current !== undefined) {
          audioTag.current.volume = volume;
        }

        if (isMuted) {
          if (audioTag.current !== null && audioTag.current !== undefined) {
            audioTag.current.muted = true;
          }
        } else {
          if (audioTag.current !== null && audioTag.current !== undefined) {
            audioTag.current.muted = false;
          }
        }

        const interval = setInterval(() => {
          const seconds = Math.floor(audioTag.current?.duration || 0);
          setDuration(seconds);
          if (windowWidth >= 830 || isFull) {
            if (
              progressBar.current !== null &&
              progressBar.current !== undefined
            ) {
              progressBar.current.max = seconds;
            }
          }
        }, 1000);

        setInterval(() => {
          if (duration !== undefined && duration > 0) {
            clearInterval(interval);

            if (audioTag.current?.currentTime === audioTag.current?.duration) {
              isRandom ? skipRandom() : skipForward();
            }
          }
        }, 1100);
      } else {
        audioTag.current?.pause();
        if (audioTag.current !== null && audioTag.current !== undefined) {
          audioTag.current.volume = volume;
        }
        cancelAnimationFrame(animationRef.current || 0);
      }
    }
  }, [[], isRandom]);

  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };

  const skipForward = () => {
    if (id === "") {
      alert("Choose a song!");
    } else if (isRandom) {
      skipRandom();
    } else if (id === "9") {
      setId("1");
    } else {
      const idNum = parseInt(id);
      const newId = idNum + 1;
      setId(newId.toString());
    }
  };

  const skipRandom = () => {
    const idNum = parseInt(id);
    const randomNum = Math.floor(Math.random() * 9);
    if (randomNum === 0 || randomNum === idNum) {
      const newNum = randomNum + 1;
      setId(newNum.toString());
    } else {
      setId(randomNum.toString());
    }
  };

  const skipBack = () => {
    if (id === "") {
      alert("Choose a song!");
    } else {
      const idNum = parseInt(id);
      const newId = idNum - 1;
      setId(newId.toString());
    }
  };

  const whilePlaying = () => {
    if (windowWidth >= 830 || isFull) {
      if (progressBar.current !== null && progressBar.current !== undefined) {
        progressBar.current.value = audioTag?.current?.currentTime || 0;
      }
      animationRef.current = requestAnimationFrame(whilePlaying);
      changeCurrentTime();
    }
  };

  const changeRange = () => {
    if (windowWidth >= 830 || isFull) {
      if (audioTag.current !== null && audioTag.current !== undefined) {
        audioTag.current.currentTime = progressBar.current?.value || 0;
      }
      changeCurrentTime();
    }
  };

  const changeCurrentTime = () => {
    setCurrentTime(Number(progressBar.current?.value));
  };

  return (
    <C.Container isfull={isFull}>
      <div className="player">
        <div className="inputButtons">
          {isFull || windowWidth >= 830 ? (
            <div className="progressBar">
              <progress
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
                className="currentProgress"
              ></progress>
            </div>
          ) : (
            ""
          )}
          <div className="flex w-full py-2 px-6 mb-3 justify-between">
            <div className="musicDiv">
              {musics.map((music) =>
                id === music.id ? (
                  <div
                    onClick={() => setIsFull(windowWidth <= 820 && !isFull)}
                    className="music gap-2"
                    key={music.id}
                  >
                    {!isFull ? (
                      <>
                        <Image
                          src={music.album_img}
                          alt="album"
                          width={65}
                          height={65}
                          style={{ borderRadius: "12px" }}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-lg">{music.name}</p>
                          <p className="text-sm text-whiteFade">
                            {music.author}
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <audio src={music.audio} ref={audioTag} />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="buttons gap-3">
                {windowWidth >= 830 || isFull ? (
                  <button
                    onClick={() => setIsRandom(!isRandom)}
                    className="randomMusicsButton"
                  >
                    {isRandom ? <Shuffle /> : <Shuffle />}
                  </button>
                ) : (
                  ""
                )}
                <button onClick={skipBack}>
                  <SkipBack />
                </button>
                <button
                  className="playPause"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause /> : <Play />}
                </button>
                <button onClick={skipForward}>
                  <SkipForward />
                </button>
                <button onClick={skipForward}>
                  <Repeat />
                </button>
              </div>
            </div>

            <div className="flex">
              {windowWidth > 825 && (
                <div className="test">
                  <p className="PcurrentTime">
                    {calculateDuration(currentTime)}
                  </p>
                  <p className="text-white mx-1">/</p>
                  <p className="Pduration mr-2">
                    {duration &&
                      !isNaN(duration) &&
                      calculateDuration(duration)}
                  </p>
                  <button
                    className="volumeButton"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeOff /> : <VolumeOn />}
                  </button>
                  <input
                    type="range"
                    step="0.01"
                    onChange={(e) => setVolume(Number(e.target.value))}
                    value={volume}
                    max="1"
                    min="0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </C.Container>
  );
};
