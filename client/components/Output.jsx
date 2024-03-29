import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { usePrompt } from "../layouts/PromptProvider";

const Output = () => {
  const { positionInfo } = usePrompt();
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Card className="w-full h-[85vh]">
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <CardDescription>Results will be displayed here.</CardDescription>
          <div className="w-full h-4/5 flex border border-black">
            <ScrollArea>
              {positionInfo.length == 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <p>No results to display</p>
                </div>
              ) : (
                positionInfo.map((position, index) => (
                  <div key={index} className="mb-4">
                    <p>
                      <strong>Subject: </strong>
                      {capitalize(position.subject)}
                    </p>
                    <p>
                      <strong>Topic: </strong>
                      {capitalize(position.topic)}
                    </p>
                    <div>
                      <strong>Blog Articles URLS: </strong>
                      <ul>
                        {position.blog_articles_urls.length === 0 ? (
                            <li>No blog articles</li>
                        ) : (
                          position.blog_articles_urls.map((url, index) => (
                            <li key={index} target="blank">
                              <a className="text-green-500 underline" rel="noreferrer" href={url}>{url}</a>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                    <div>
                      <strong>Youtube Videos: </strong>
                      <ul>
                        {position.youtube_interviews_urls
.length === 0 ? (
                            <li>No youtube videos</li>
                        ) : (
                          position.youtube_interviews_urls
                          .map((video, index) => (
                            <li key={index} target="blank">
                              <a className="text-green-500 underline" rel="noreferrer" href={video.url}>{video.name}</a>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
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
