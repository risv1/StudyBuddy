import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import image from "@/public/image.png";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <div className="fixed top-10 right-10">
        <ThemeToggle />
      </div>
      <div className="container flex flex-col gap-4 min-h-screen py-6 items-center justify-center text-center md:gap-8 md:py-12">
        <header className="flex flex-col gap-2">
          <Link className="mx-auto" href="#">
            <span className="sr-only">Home</span>
            <div className="aspect-w-4 aspect-h-1 block dark:hidden">
              <Image
                alt="Logo"
                className="rounded-lg object-contain aspect-none"
                height="50"
                src={logo}
                width="200"
              />
            </div>
            <div className="aspect-w-4 aspect-h-1 hidden dark:block">
              <Image
                alt="Logo"
                className="rounded-lg object-contain aspect-none"
                height="50"
                src={image}
                width="200"
              />
            </div>
          </Link>
        </header>
        <main className="flex-1 grid gap-6 px-4 text-center md:gap-10 lg:gap-16 md:px-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Your Gateway to Infinite
              <span className="text-gray-500 dark:text-gray-400">
                {" "}
                Learning
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Revolutionize your learning experience with our AI-powered
              platform designed to transform prompts into comprehensive
              educational resources. Find curated articles, informative videos,
              and tailored learning materials on a wide array of subjects and
              topics, empowering you to expand your knowledge effortlessly.
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <Link
              className="w-2/3 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/work"
            >
              Get Started
            </Link>

          </div>
        </main>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white hover:cursor-pointer dark:bg-gray-800 p-6 duration-100 ease-in-out rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tailored content based on your interests and learning goals,
              ensuring a customized educational experience.
            </p>
          </div>
          <div className="bg-white hover:cursor-pointer dark:bg-gray-800 p-6 duration-100 ease-in-out rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Utilize cutting-edge AI algorithms to gain deep insights and
              recommendations for optimizing your learning journey.
            </p>
          </div>
          <div className="bg-white hover:cursor-pointer dark:bg-gray-800 p-6 duration-100 ease-in-out rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">
              Diverse Learning Materials
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Access a vast library of articles, videos, and interactive
              resources covering a wide range of subjects and topics.
            </p>
          </div>
          <div className="bg-white hover:cursor-pointer dark:bg-gray-800 p-6 duration-100 ease-in-out rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">Engaging Experiences</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Immerse yourself in interactive and engaging learning adventures
              designed to captivate and inspire learners of all levels.
            </p>
          </div>
        </div>

        <footer className="flex flex-row justify-between w-full">
          <Link
            className="inline-flex items-center space-x-2 font-bold"
            href="#"
          >
            <span>Home</span>
          </Link>
          <Link
              className="inline-flex items-center space-x-2 font-bold"
              href="/work"
            >
              Console
            </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
