import Image from "next/image";
import logo from "../public/logo.png";
import image from "../public/image.png";
import { Card } from "./ui/card";
import Description from "./Description";
import ListSubTop from "./ListSubTop";
import { usePrompt } from "@/layouts/PromptProvider";

const HomeDesc = () => {
  const { subjects, topics } = usePrompt();

  return (
    <>
      {subjects.length === 0 && topics.length === 0 && (
      <Card className="flex flex-1 flex-col items-center pb-10 justify-center rounded-lg border border-dashed shadow-sm">
        <div className="w-full h-2/5 flex flex-col gap-5 justify-center items-center">
          <Image
            alt="Logo"
            className="mt-5 rounded-lg object-contain aspect-none block dark:hidden"
            height="50"
            src={logo}
            width="200"
          />
          <Image
            alt="Logo"
            className="mt-5 rounded-lg object-contain aspect-none hidden dark:block"
            height="50"
            src={image}
            width="200"
          />
          <h2 className="text-2xl font-semibold mb-4">
            What would you like to learn today?
          </h2>
        </div>
        <Description />
      </Card>
        )}
    </>
  );
};

export default HomeDesc;
