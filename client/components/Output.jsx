import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { usePrompt } from "../layouts/PromptProvider";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Output = () => {
  const { positionInfo, running, saveResultsToLocalStorage } = usePrompt();
  const { theme } = useTheme();

  // const positionInfo = [
  //   {
  //     article_urls: ["https://www.example.com", "https://www.example.com"],
  //     youtube_urls: [
  //       {
  //         name: "Interview with John Doe",
  //         url: "https://www.youtube.com/watch?v=123456",
  //       },
  //       {
  //         name: "Interview with Jane Doe",
  //         url: "https://www.youtube.com/watch?v=789101",
  //       },
  //     ],
  //     subject: "math",
  //     topic: "algebra",
  //     quicstart_pointers: [
  //       "https://www.example.com",
  //       "https://www.example.com",
  //     ],
  //   },
  // ];

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
        <CardContent className="h-full w-full flex flex-row">
          <CardDescription>Results will be displayed here.</CardDescription>
          <div className="w-full h-4/5 flex flex-row">
            <ScrollArea className="w-3/4 flex ml-auto pr-10 mr-20 justify-center items-center">
              {positionInfo.length === 0 && !running && (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-lg font-medium">No results to display</p>
                </div>
              )}
              {positionInfo.length == 0 && running ? (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-lg font-medium">Loading, please wait...</p>
                </div>
              ) : (
                positionInfo.map((position, index) => (
                  <>
                    <div
                      className="absolute top-0 right-0 pr-10 z-10 hover:cursor-pointer"
                      onClick={() => copyText(`result_${index}`)}
                    >
                      <Copy
                        color={`${theme === "light" ? "#000000" : "#ffffff"}`}
                      />
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
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Quickstart</AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {position.quicstart_pointers.length === 0 ? (
                                <li>No youtube videos</li>
                              ) : (
                                position.quicstart_pointers.map(
                                  (point, index) => (
                                    <li key={index} target="blank">
                                      <p className="text-lg">{point}</p>
                                    </li>
                                  )
                                )
                              )}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            Blog Articles URLS
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {position.article_urls.length === 0 ? (
                                <li>No blog articles</li>
                              ) : (
                                position.article_urls.map((url, index) => (
                                  <li key={index}>
                                    <a
                                      className="text-green-500 underline"
                                      rel="noreferrer"
                                      href={url}
                                      target="_blank"
                                    >
                                      {url}
                                    </a>
                                  </li>
                                ))
                              )}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Youtube Videos</AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {position.youtube_urls.length === 0 ? (
                                <li>No youtube videos</li>
                              ) : (
                                position.youtube_urls.map((video, index) => (
                                  <li key={index}>
                                    <a
                                      className="text-green-500 underline"
                                      rel="noreferrer"
                                      target="_blank"
                                      href={video.url}
                                    >
                                      {video.name}
                                    </a>
                                  </li>
                                ))
                              )}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </>
                ))
              )}
            {
              
            }
              <div className="mb-10">
                <Button onClick={saveResultsToLocalStorage}>
                  Save Results
                </Button>
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Output;
