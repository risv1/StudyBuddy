import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { usePrompt } from "@/layouts/PromptProvider";

const Results = () => {
  const { events } = usePrompt();

  return (
    <>
      <Card className="w-full h-[85vh]">
        <CardHeader>
          <CardTitle>Result Logs</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <CardDescription>Results Logs will be displayed here.</CardDescription>
          <div className="w-full h-4/5 flex border border-black">
            <ScrollArea>
              {events.length === 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <p>No results to display</p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col gap-3">
                  {events.map((event, index) => (
                    <Card key={index}>
                      <CardHeader>
                        {/* <CardTitle>{event.title}</CardTitle> */}
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {event.timestamp} : {event.data}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Results;
