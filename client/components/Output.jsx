import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { usePrompt } from "../layouts/PromptProvider";
import logo from "../public/logo.png";
import image from "../public/image.png";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useTheme } from "next-themes";

const Output = () => {
  //   const { positionInfo } = usePrompt();
    const { theme } = useTheme()

  const positionInfo = [
    {
      blog_articles_urls: [
        "https://www.example.com",
        "https://www.example.com",
      ],
      youtube_interviews_urls: [
        {
          name: "Interview with John Doe",
          url: "https://www.youtube.com/watch?v=123456",
        },
        {
          name: "Interview with Jane Doe",
          url: "https://www.youtube.com/watch?v=789101",
        },
      ],
      subject: "math",
      topic: "algebra",
    },
  ];

  function copyText(elementId) {
    const element = document.getElementById(elementId);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Card className="w-full h-[50vh]">
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent className="h-full w-full">
          <CardDescription>Results will be displayed here.</CardDescription>
          <div className="w-full h-4/5 flex flex-row">
            <Card className="lg:pl-20 border-none flex flex-1 flex-col items-center pb-10 justify-center rounded-lg shadow-sm">
              <div className="w-full h-2/5 flex flex-col gap-5 justify-center items-center">
                <Image
                  alt="Logo"
                  className="border-none rounded-lg object-contain aspect-none block dark:hidden"
                  height="50"
                  src={logo}
                  width="300"
                />
                <Image
                  alt="Logo"
                  className="border-none  rounded-lg object-contain aspect-none hidden dark:block"
                  height="50"
                  src={image}
                  width="300"
                />
              </div>
            </Card>
            <ScrollArea className="w-3/4 flex lg:pl-56 justify-center items-center">
              {positionInfo.length == 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <p>No results to display</p>
                </div>
              ) : (
                positionInfo.map((position, index) => (
                  <>
                    <div
                      className="absolute top-0 right-0 pr-10 z-10 hover:cursor-pointer"
                      onClick={() => copyText(`result_${index}`)}
                    >
                      <Copy color={`${theme === "light" ? "#000000"  : "#ffffff" }`}  />
                    </div>
                    <div
                      key={index}
                      className="mb-4 w-full"
                      id={`result_${index}`}
                    >
                      <p className="text-lg">
                        <strong className="mr-5 text-xl">Subject: </strong>
                        {capitalize(position.subject)}
                      </p>
                      <p className="text-lg">
                        <strong className="mr-5 text-xl">Topic: </strong>
                        {capitalize(position.topic)}
                      </p>
                      <div className="text-lg">
                        <strong className="text-xl">
                          Blog Articles URLS:{" "}
                        </strong>
                        <ul>
                          {position.blog_articles_urls.length === 0 ? (
                            <li>No blog articles</li>
                          ) : (
                            position.blog_articles_urls.map((url, index) => (
                              <li key={index} target="_blank">
                                <a
                                  className="text-green-500 underline"
                                  rel="noreferrer"
                                  href={url}
                                >
                                  {url}
                                </a>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                      <div className="text-lg">
                        <strong className="text-xl">Youtube Videos: </strong>
                        <ul>
                          {position.youtube_interviews_urls.length === 0 ? (
                            <li>No youtube videos</li>
                          ) : (
                            position.youtube_interviews_urls.map(
                              (video, index) => (
                                <li key={index} target="blank">
                                  <a
                                    className="text-green-500 underline"
                                    rel="noreferrer"
                                    href={video.url}
                                  >
                                    {video.name}
                                  </a>
                                </li>
                              )
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </>
                ))
              )}
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Output;
