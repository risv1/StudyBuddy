"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Home, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);

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

  const removeSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  const removeTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
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
                <Button onClick={addSubject}>
                  Add Subject
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row justify-center items-center gap-2">
                <Home className="h-5 w-5" />
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
                <Button onClick={addTopic}>Add Topic</Button>
              </CardContent>
            </Card>
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
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
