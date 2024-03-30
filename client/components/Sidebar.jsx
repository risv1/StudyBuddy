"use client";

import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Home, Package, ListStart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { usePrompt } from "../layouts/PromptProvider";

const Sidebar = () => {
  const { subjects, setSubjects, topics, setTopics, startJob, running, positionInfo, setPositionInfo } = usePrompt();

  const subjectRef = useRef();
  const topicRef = useRef();
  const addTopic = () => {
    const newTopic = topicRef.current.value;
    if (newTopic) {
      setTopics([...topics, newTopic]);
      topicRef.current.value = "";
    }
  };

  const addSubject = () => {
    const newSubject = subjectRef.current.value;
    if (newSubject) {
      setSubjects([...subjects, newSubject]);
      subjectRef.current.value = "";
    }
  };

  return (
    <ScrollArea className="pb-3 ">
      <div className="w-full flex h-full max-h-screen flex-col items-center gap-2">
        <div className="w-4/5 h-full mt-5">
          <div className="w-full h-[40%] flex flex-col gap-3">
            <Card>
              <CardHeader>
                <Package className="h-6 w-6" />
                <CardTitle>StudyBuddy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enter subject and topics to search
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row justify-center items-center gap-2">
                <Home className="h-5 w-5" />
                <CardTitle>Subjects</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row gap-3">
                <Input
                maxLength="20"
                  ref={subjectRef}
                  type="text"
                  placeholder="Enter subject"
                  className="border border-black focus:outline-none"
                />
                <Button disabled={running} onClick={addSubject}>
                  Add Subject
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row justify-center items-center gap-2">
              <ListStart className="h-5 w-5" />
                <CardTitle>Topics</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-center items-center gap-3">
                <Input
                maxLength="20"
                  ref={topicRef}
                  type="text"
                  placeholder="Enter topic"
                  className="border border-black focus:outline-none"
                />
                <Button disabled={running} onClick={addTopic}>Add Topic</Button>
              </CardContent>
            </Card>
           <Button disabled={running || subjects.length === 0 || topics.length === 0} onClick={()=>startJob()}>Submit</Button>
            <Button disabled={()=>positionInfo.length === 0} onClick={()=>setPositionInfo([])}>Reset</Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
