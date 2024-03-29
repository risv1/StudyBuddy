import Sidebar from "./Sidebar";
import SheetSidebar from "./SheetSidebar";
import { Card } from "./ui/card";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import logo from "@/public/logo.png";
import image from "@/public/image.png";

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-screen flex flex-row dark:bg-black bg-gray-200">
      <div className="w-1/3 hidden border-r dark:border-slate-700 border-gray-400 bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:w-2/3 xl:w-2/3 sm:w-full md:w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:hidden xl:hidden">
          <SheetSidebar />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center flex-row justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Results:</h1>
            <ThemeToggle />
          </div>
          <Card className="flex flex-1 flex-col items-center pb-10 justify-center rounded-lg border border-dashed shadow-sm">
            <div className="w-full h-2/5 flex flex-col gap-5 justify-center items-center">
              <Image
                alt="Logo"
                className="rounded-lg object-contain aspect-none block dark:hidden"
                height="50"
                src={logo}
                width="200"
              />
              <Image
                alt="Logo"
                className="rounded-lg object-contain aspect-none hidden dark:block"
                height="50"
                src={image}
                width="200"
              />
              <h2 className="text-2xl font-semibold mb-4">
                What would you like to learn today?
              </h2>
            </div>
            <div className="mt-auto w-4/5 h-80 overflow-hidden ">
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white dark:bg-gray-800 p-3 w-full h-full rounded-lg shadow-md border border-black">
                  <h3 className="font-semibold mb-2">
                    Example Subject: Psychology, Topic: Cognitive Behavioral
                    Therapy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Explore the principles and techniques of CBT in treating
                    various mental health disorders.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 w-full h-full rounded-lg shadow-md border border-black">
                  <h3 className="font-semibold mb-2">
                    Example Subject: Physics, Topic: Quantum Mechanics
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Delve into the fascinating world of quantum mechanics, from
                    wave-particle duality to quantum entanglement.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 w-full  h-full rounded-lg shadow-md border border-black">
                  <h3 className="font-semibold mb-2">
                    Example Subject: Art History, Topic: Renaissance Art
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Examine the masterpieces of the Renaissance period and their
                    cultural significance in shaping Western art.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 h-full rounded-lg shadow-md border border-black">
                  <h3 className="font-semibold mb-2">
                    Example Subject: Environmental Science, Topic: Climate
                    Change
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Investigate the causes, impacts, and solutions to the global
                    phenomenon of climate change.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};
