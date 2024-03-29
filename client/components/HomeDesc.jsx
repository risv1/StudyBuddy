import Image from "next/image";
import logo from "../public/logo.png";
import image from "../public/image.png";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Description from "./Description";
import { usePrompt } from "@/layouts/PromptProvider";

const HomeDesc = () => {
  const { subjects, topics, removeSubject, removeTopic } = usePrompt();

  return (
    <>
      {subjects.length !== 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Added Subjects</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center overflow-y-auto">
              <ScrollArea className="w-full h-full flex pl-10">
                <div className="w-2/3 max-h-48 flex flex-col">
                  <ul className="flex flex-col gap-3">
                    {subjects.map((subject, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between flex-row"
                      >
                        <span className="text-lg">{subject}</span>
                        <Button
                          className="text-xs bg-red-500 hover:bg-red-700 dark:text-white dark:bg-red-500 dark:hover:bg-red-700"
                          onClick={() => removeSubject(index)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          )}
        {topics.length !== 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Added topics</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center overflow-y-auto">
              <ScrollArea className="w-full h-full flex pl-10">
                <div className="w-2/3 max-h-48 flex flex-col">
                  <ul className="flex flex-col gap-3">
                    {topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between flex-row"
                      >
                        <span className="text-lg">{topic}</span>
                        <Button
                          className="text-xs bg-red-500 hover:bg-red-700 dark:text-white dark:bg-red-500 dark:hover:bg-red-700"
                          onClick={() => removeTopic(index)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
      )}
      {subjects.length === 0 && topics.length === 0 && (
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
        <Description />
      </Card>
        )}
    </>
  );
};

export default HomeDesc;
