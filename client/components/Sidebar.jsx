"use client";

import React, { useRef, useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Home, Package, ListStart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
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
  const {
    subjects,
    setSubjects,
    topics,
    setTopics,
    startJob,
    running,
  } = usePrompt();

  const {his} = usePrompt();

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
                <Button disabled={running} onClick={addTopic}>
                  Add Topic
                </Button>
              </CardContent>
            </Card>
            <Button
              disabled={running || subjects.length === 0 || topics.length === 0}
              onClick={() => startJob()}
            >
              Submit
            </Button>
            {/* <Button
              disabled={() => positionInfo.length === 0}
              onClick={() => setPositionInfo([])}
            >
              Reset
            </Button> */}
            <Dialog>
              <DialogTrigger>Show History</DialogTrigger>

              <DialogContent className="w-2/3 h-4/5 flex flex-col">
                <div className="w-full h-full flex flex-col">
                  <ScrollArea className="flex flex-col">
                    {his.map((position, index) => (
                      <div key={index}>
                        <h1 className="mt-5">Result: {index + 1}</h1>
                        <h2>Subject: {position.subject}</h2>
                        <p>Topic: {position.topic}</p>
                        <ul>
                          {position.article_urls.map((url, idx) => (
                            <li key={idx}>
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {url}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <ul>
                          {position.youtube_urls.map((video, idx) => (
                            <li key={idx}>
                              <a
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {video.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <ul>
                          {position.quicstart_pointers.map((pointer, idx) => (
                            <li key={idx}>{pointer}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
