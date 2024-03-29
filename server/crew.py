from datetime import datetime
from typing import Callable
from langchain_openai import ChatOpenAI
from agents import SubjectResearchAgents
from job_manager import append_event
from tasks import SubjectResearchTasks
from crewai import Crew


class SubjectResearchCrew:
    def __init__(self, job_id: str):
        self.job_id = job_id
        self.crew = None
        self.llm = ChatOpenAI(model="gpt-3.5-turbo")     

    def setup_crew(self, subjects: list[str], topics: list[str]):
        agents = SubjectResearchAgents()
        tasks = SubjectResearchTasks(
            job_id=self.job_id)

        research_manager = agents.research_manager(
            subjects, topics)
        subject_research_agent = agents.subject_research_agent()

        subject_research_tasks = [
            tasks.subject_research(subject_research_agent, subjects, topics)
            for subject in subjects
        ]

        manage_research_task = tasks.manage_research(
            research_manager, subjects, topics, subject_research_tasks)

        self.crew = Crew(
            agents=[research_manager, subject_research_agent],
            tasks=[*subject_research_tasks, manage_research_task],
            verbose=2,
        )

    def kickoff(self):
        if not self.crew:
            append_event(self.job_id, "Crew not set up")
            return "Crew not set up"

        append_event(self.job_id, "Task Started")
        try:
            results = self.crew.kickoff()
            append_event(self.job_id, "Task Complete")
            return results
        except Exception as e:
            append_event(self.job_id, f"An error occurred: {e}")
            return str(e)