import Head from "next/head";
import {
  BanIcon,
  BeakerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import Card from "../components/card";

export default function Home() {
  const [counter, setCounter] = useState(1);

  const addResevration = () => {
    setCounter(counter + 1);
  };
  const removeResevration = () => {
    setCounter(counter - 1);
  };
  return (
    <div className={counter >= 5 ? "page bg-red-400" : "page bg-green-100"}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className={
          counter >= 5 ? "covid  opacity-100" : "covid translate-y-2 opacity-0 "
        }>
        <BanIcon width={80} className='text-red-500' />
        <p className='text-xl'>
          {" "}
          Due to <span className='font-semibold'>COVID-19</span> only groups of{" "}
          <span className='font-semibold'>4</span> are allowed.{" "}
        </p>
      </div>

      <section
        className={
          counter < 5 ? "card bg-green-200" : " card bg-red-100 translate-y-4"
        }>
        <section className='flex items-center justify-center flex-1  transition duration-500'>
          <section
            className={
              counter === 1
                ? "table"
                : counter === 2
                ? "table -rotate-90"
                : counter === 3
                ? "table -rotate-180"
                : counter === 4
                ? "table -rotate-180"
                : counter === 5
                ? "table -rotate-180"
                : "null"
            }>
            <div className='person -top-6 right-4'>
              <Image src={person1} width={50} height={50} objectFit='contain' />
            </div>

            <div
              className={counter >= 2 ? "person  top-4 -right-6" : " hidden"}>
              <Image src={person2} width={50} height={50} objectFit='contain' />
            </div>
            <div
              className={counter >= 3 ? "person  right-4 -bottom-6" : "hidden"}>
              <Image src={person3} width={50} height={50} objectFit='contain' />
            </div>
            <div
              className={
                counter >= 4
                  ? "person  top-4 -left-6"
                  : " opacity-0 -translate-x-full"
              }>
              <Image src={person4} width={50} height={50} objectFit='contain' />
            </div>
          </section>
        </section>
        <section className='flex items-center justify-between bg-white  rounded-b-xl py-6 px-4'>
          <div className='text-lg font-semibold'>For how many people !</div>
          <div className='flex items-center space-x-4 overflow-hidden'>
            <ChevronLeftIcon
              className={
                counter > 1
                  ? "w-6 cursor-pointer  bg-gray-200 rounded-full translate-y-0 transition duration-500"
                  : " w-6 cursor-pointer  bg-gray-200 rounded-full translate-y-[30px] duration-500"
              }
              onClick={removeResevration}
            />
            <p className='text-2xl font-semibold'>{counter}</p>
            <ChevronRightIcon
              className={
                counter < 5
                  ? "w-6 cursor-pointer  bg-gray-200 rounded-full translate-y-0 transition duration-500"
                  : " w-6 cursor-pointer  bg-gray-200 rounded-full translate-y-[30px] duration-500"
              }
              onClick={addResevration}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
