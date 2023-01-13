import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from 'next/image';
import me from '../public/me.png'
import nomadnerds from '../public/nomadnerds.png'
import car from "../public/car.png";
import conference from "../public/conference.png";

import {useState} from 'react';
import { ModuleDetectionKind } from 'typescript';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Caleb Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">calebrdgz</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="Caleb_Rodriguez_Resume.pdf"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Caleb Rodriguez
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Full Stack Software Engineer with a passion for growing, learning,
              and creating.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/CalebRdgz">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/calebrdgz/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:calebrdgz@gmail.com">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={me} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1 dark:text-white">About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance programmer, Ive
              done remote work for
              <span className="text-teal-500"> company</span> and collaborate
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance programmer, Ive
              done remote work for
              <span className="text-teal-500"> company</span> and collaborate
              with talented people to create digital products for both business
              and consumer use.
            </p>
          </div>
          <h3 className="text-3xl text-center py-1">Portfolio</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black">
              <Image src={nomadnerds} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Nomad Nerds</h3>
              <p>
                Full Stack Yelp clone application for those looking for the next
                big adventure
              </p>
              <p className="py-4 text-teal-600">Program Languages Used</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">FastAPI</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black">
              <Image src={car} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-black">
                CarCar
              </h3>
              <p>Full Stack application with a microservice architecture</p>
              <p className="py-4 text-teal-600">Program Languages Used</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black">
              <Image src={conference} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Conference GO</h3>
              <p>
                Microservice project based on connecting conferences through
                custom RESTFUL and third party APIs
              </p>
              <p className="py-4 text-teal-600">Program Languages Used</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance programmer, Ive
              done remote work for{" "}
              <span className="text-teal-500">company</span> and collaborate
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance programmer, Ive
              done remote work for{" "}
              <span className="text-teal-500">company</span> and collaborate
              with talented people to create digital products for both business
              and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={me}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
