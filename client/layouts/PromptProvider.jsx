"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const PromptContext = createContext();

const PromptProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [events, setEvents] = useState([]);
  const [positionInfo, setPositionInfo] = useState([]);
  const [running, setRunning] = useState(false);
  const [currentJob, setCurrentJob] = useState("");
    
  useEffect(() => {
    let intervalId;

    const fetchJobStatus = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/crew/${currentJob}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);

        setEvents(data.events);

        if (data.result) {
          console.log(data.result);
          setPositionInfo(data.result.topics);
        }
        console.log("PositionInfo:", positionInfo);
        console.log("Events: ", events)

        if (data.status === "COMPLETE" || data.status === "ERROR") {
          clearInterval(intervalId);
            setCurrentJob("");
          setRunning(false);
        }
      } catch (error) {
        console.log(error);
        setCurrentJob("");
        if(intervalId) {
          clearInterval(intervalId)
        }
      }
    };

    if (currentJob !== "") {
      intervalId = setInterval(fetchJobStatus, 1000);
    }
  }, [currentJob]);

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

  const startJob = async () => {
    setEvents([]);
    setPositionInfo([]);
    setRunning(true);

    try {
      const res = await fetch("http://localhost:3001/api/crew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subjects, topics }),
      });
      console.log(res);
      const data = await res.json();
      setCurrentJob(data.job_id);
    } catch (error) {
      console.log(error);
      setCurrentJob("");
    }
  };

  return (
    <PromptContext.Provider
      value={{
        subjects,
        topics,
        events,
        positionInfo,
        running,
        setSubjects,
        setTopics,
        removeSubject,
        removeTopic,
        startJob,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export default PromptProvider;

export const usePrompt = () => {
  const context = useContext(PromptContext);
  if (context === undefined) {
    throw new Error("usePrompt must be used within a PromptProvider");
  }
  return context;
};
