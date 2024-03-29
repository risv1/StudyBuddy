import { usePrompt } from "../layouts/PromptProvider.jsx";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const ListSubTop = () => {
  const { subjects, topics, removeSubject, removeTopic, running } = usePrompt();

  return (
    <>
      {subjects.length !== 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Added Subjects</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center overflow-y-auto">
            <ScrollArea className="w-full h-full flex pl-10">
              <div className="w-full max-h-32 flex flex-col">
                <ul className="flex flex-col gap-3">
                  {subjects.map((subject, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between flex-row"
                    >
                      <span className="text-lg">{subject}</span>
                      <Button
                      disabled={running}
                        className="text-xs mr-5 bg-red-500 hover:bg-red-700 dark:text-white dark:bg-red-500 dark:hover:bg-red-700"
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
              <div className="w-full max-h-32 flex flex-col">
                <ul className="flex flex-col gap-3">
                  {topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between flex-row"
                    >
                      <span className="text-lg">{topic}</span>
                      <Button
                      disabled={running}
                        className="text-xs mr-5 bg-red-500 hover:bg-red-700 dark:text-white dark:bg-red-500 dark:hover:bg-red-700"
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
    </>
  );
};
  
export default ListSubTop;
