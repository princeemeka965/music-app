"use client";

import { Button } from "@/components/ui/button";
import {
  getArtisteDetails,
  getArtisteSongs,
  loginAccount,
  signUp,
} from "@/services/apiFactory";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ArtisteStore } from "../helpers/artistStore";
import {
  SET_ARTISTE_DATA,
  SET_ARTISTE_TRACKS,
  SET_PLAY_TRACK,
} from "@/reducers/artisteDataSlice";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  loginSchemaValidation,
  signUpSchemaValidation,
} from "@/helpers/validations/formValidation";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { SET_USER_DATA } from "@/reducers/userDataSlice";
import { useRouter } from "next/navigation";

interface ArtisteList {
  id: string;
  name: string;
  slug: string;
}

let artisteList: ArtisteList[];

export default function Home() {
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();

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
    dispatch(SET_ARTISTE_DATA(artisteDetails.data));
    dispatch(SET_ARTISTE_TRACKS(artisteTracks.data.user.data));
    dispatch(SET_PLAY_TRACK({}));
  };

  /**
   * AUTHENTICATION BLOCK
   * Sign Up
   */
  const signUpSchema = signUpSchemaValidation();

  const formSignUp = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  function onSignUp(values: z.infer<typeof signUpSchema>) {
    // send to the backend
    signUp(values).then((response: any) => {
      toast.toast({
        description: response.data.message,
      });
      // Set user's data state
      const user_info = {
        id: response.data.user.id,
        name: response.data.user.name,
      };
      dispatch(SET_USER_DATA(user_info));
      router.push("/home");
    });
  }

  /**
   * AUTHENTICATION BLOCK
   * Login
   */
  const loginSchema = loginSchemaValidation();

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onLogin(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    loginAccount(values)
      .then((response: any) => {
        toast.toast({
          description: response.data.message,
        });
        // Set user's data state
        const user_info = {
          id: response.data.user.id,
          name: response.data.user.name,
        };
        dispatch(SET_USER_DATA(user_info));
        router.push("/home");
      })
      .catch((error: any) => {
        toast.toast({
          variant: "destructive",
          description: error.response.data.message,
        });
      });
  }

  return (
    <>
      <div
        className="absolute w-full h-full bg-overlay"
        style={{ zIndex: 4 }}
      />
      <Image
        alt="MusicBG"
        src={"/listening-man.jpg"}
        priority
        quality={100}
        fill
        sizes="100%"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-full flex flex-col p-10 relative" style={{ zIndex: 9 }}>
        <div className="w-full flex justify-center animate__animated animate__backInDown">
          <Image
            src={"/music_corm.png"}
            width={146}
            height={146}
            style={{ height: "146px", objectFit: "contain" }}
            alt="music_logo"
          />
        </div>
        <div className="w-full flex flex-col flex-grow my-10 lg:p-6 md:p-6 justify-center animate__animated animate__fadeInDown">
          <div className="lg:flex md:flex hidden">
            <p
              className="lg:text-6xl md:text-6xl text-3xl text-white"
              style={{ lineHeight: "5rem" }}
            >
              Listen to your favorite <b style={{ color: "green" }}>9</b>ja
              music
            </p>
          </div>
          <p
            className="lg:flex md:flex hidden text-6xl text-white font-semibold"
            style={{ lineHeight: "5rem" }}
          >
            {" "}
            anytime, anywhere
          </p>
          <div className="lg:hidden md:hidden flex">
            <p className="text-3xl text-white" style={{ lineHeight: "2.7rem" }}>
              Listen to your favorite <b style={{ color: "green" }}>9</b>ja
              music anytime, anywhere
            </p>
          </div>
        </div>

        <div className="w-full my-5 flex justify-center">
          <div className="w-1/3 flex flex-col my-5 gap-4 animate__animated animate__fadeInDown">
            <div className="w-full flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"} className="shadow-lg w-full">
                    <span className="p-3 text-black font-semibold">Login</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-black font-black text-center">
                      Login
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Form {...formLogin}>
                      <form
                        onSubmit={formLogin.handleSubmit(onLogin)}
                        className="space-y-8"
                      >
                        <FormField
                          control={formLogin.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Username
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Username"
                                  className="text-black"
                                  autoComplete="off"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={formLogin.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Password
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Password"
                                  className="text-black"
                                  autoComplete="off"
                                  type="password"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          variant={"outline"}
                          className="text-white w-full font-bold shadow-lg bg-navGreen hover:bg-navGreenOpaque hover:text-white"
                        >
                          Submit
                        </Button>
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-full flex justify-center gap-3">
              <div
                className="border flex flex-grow my-3"
                style={{ height: 1 }}
              />
              <div className="flex flex-col">
                <p className="text-base font-semibold text-gray-400">OR</p>
              </div>
              <div
                className="border flex flex-grow my-3"
                style={{ height: 1 }}
              />
            </div>

            <div className="w-full flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="shadow-lg w-full bg-transparent hover:bg-transparent"
                  >
                    <span className="p-3 text-white font-semibold">
                      Sign Up
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-black font-black text-center">
                      Sign up
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-2 py-4">
                    <Form {...formSignUp}>
                      <form
                        onSubmit={formSignUp.handleSubmit(onSignUp)}
                        className="space-y-8"
                      >
                        <FormField
                          control={formSignUp.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Firstname and Surname"
                                  className="text-black"
                                  autoComplete="off"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={formSignUp.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter email address"
                                  className="text-black"
                                  autoComplete="off"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={formSignUp.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Username
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Username"
                                  className="text-black"
                                  autoComplete="off"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={formSignUp.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="flex flex-col gap-1">
                              <FormLabel className="text-black px-2 font-semibold">
                                Password
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Password"
                                  className="text-black"
                                  autoComplete="off"
                                  type="password"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-semibold px-2" />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          variant={"outline"}
                          className="text-white w-full font-bold shadow-lg bg-navGreen hover:bg-navGreenOpaque hover:text-white"
                        >
                          Submit
                        </Button>
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
