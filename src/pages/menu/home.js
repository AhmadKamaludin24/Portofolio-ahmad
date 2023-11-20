/* eslint-disable jsx-a11y/alt-text */
import TheHead from "@/components/Layouts/components/TheHead";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// icons
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { IoMdPin } from "react-icons/io";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { Button } from "@nextui-org/react";


export default function Home() {

  const router = useRouter();
  const { locale } = router

  const onDirect = () => {
    router.push('/menu/about')
  }
  return (
    <>
      <TheHead title="Home | Ahmad kamaludin" />

      <div className="home py-20 w-full dark:bg-gray-900">

        {/* introduce */}
        <div className="py-5 dark:border-b-gray-500">

          <ul className="block sm:flex justify-between items-end">
            <h1 className="text-center text-dark text-4xl sm:text-start sm:text-5xl dark:text-gray-300">I&apos;m <span className="text-teal">Ahmad</span> kamaludin</h1>
            <li className="flex text-dark text-xs justify-center sm:text-sm sm:justify-start dark:text-gray-400">
              <IoMdPin />
              Stay in Karawang 🇮🇩</li>
          </ul>

          <ul className="list flex justify-center sm:justify-start text-dark py-1 dark:text-gray-400">
            <li className="flex">
              <HiMiniCodeBracket className="text-xl mr-1" />
              Front End Developer</li>
          </ul>

          <ul className="py-5 text-center sm:text-start text-dark dark:text-gray-400">
            <p className="text-sm sm:text-lg">student with a strong focus on front-end development. Currently learning Javascript and gaining experience across different areas of web technology. I value effective communication and am dedicated to creating web applications that are not only functional but also visually appealing.</p>
          </ul>

          <div className="flex justify-center sm:justify-start">
            <Button
              onClick={onDirect}
              className="btn box-shadow py-2 px-5 rounded-2xl border-2 dark:hover:text-teal-500 dark:text-gray-900 dark:hover:bg-gray-900"
            >About me
            </Button>
          </div>

        </div>

        <div className="b-line my-3"></div>

        {/* Career */}
        <div className="py-5 dark:border-b-gray-500">
          <div className="flex justify-center sm:justify-start items-center text-xl sm:text-2xl text-dark dark:text-gray-300">
            <HiOfficeBuilding />
            <label>Career</label>
          </div>
          <p className="text-center sm:text-start text-gray-500 text-xs sm:text-sm">last career experience</p>

          <div className="container 
          dark:bg-gradient-to-r dark:from-gray-900 dark:to-blue-500">
            <div className="container-box">
              <div className="box flex box-shadow bg-white dark:bg-gray-100 rounded-lg space-x-3 py-2 px-2 hover:scale-105">
                <div className="flex items-center border-r-2 px-1 ">
                  <Image src="/images/ihh.webp" className="w-auto h-auto" width={40} height={10} alt="ihh" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-dark text-md font-semibold">Rebahan</h3>
                  

                  <p className="text-gray-500 py-1 text-sm text-center">~ every day</p>
                </div>
              </div>




            </div>
          </div>


        </div>

      </div>
    </>
  )
}
