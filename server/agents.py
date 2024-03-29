from typing import List
from crewai import Agent
from langchain_openai import ChatOpenAI
from crewai_tools import SerperDevTool
from tools.youtube_search_tools import YoutubeVideoSearchTool


class SubjectResearchAgents():

    def __init__(self):
        self.searchInternetTool = SerperDevTool()
        self.youtubeSearchTool = YoutubeVideoSearchTool()
        self.llm = ChatOpenAI(model="gpt-3.5-turbo")

    def research_manager(self, subjects: List[str], topics: List[str]) -> Agent:
        return Agent(
            role="Subject Research Manager",
            goal=f"""Generate a list of JSON objects containing a Quickstart explanation for the topics and the urls for 3 recent blog articles and 
                the url and title for 3 recent YouTube Videos, for each topic in each subject. The Quickstart explanation should not be too simple make it into points such that
                the reader can understand the topic in depth.
             
                Companies: {subjects}
                Positions: {topics}

                Important:
                - The final list of JSON objects must include all subjects and topic. Do not leave any out.
                - If you can't find information for a specific topic, fill in the information with the word "MISSING".
                - Do not generate fake information. Only return the information you find. Nothing else!
                - Do not stop researching until you find the requested information for each topic in each subject.
                - All the subjects and topics exist so keep researching until you find the information for each one.
                - Make sure you each researched topic for each subject contains 3 blog articles and 3 YouTube videos.
                """,
            backstory="""As a Subject Research Manager, you are responsible for aggregating all the researched information
                into a list.""",
            llm=self.llm,
            tools=[self.searchInternetTool, self.youtubeSearchTool],
            verbose=True,
            allow_delegation=True
        )

    def subject_research_agent(self) -> Agent:
        return Agent(
            role="Subject Research Agent",
            goal="""Look up the specific topics for a given subject and generate a quickstart explanation on the topics along with that find urls for 3 recent blog articles and 
                the url and title for 3 recent YouTube Videos for each specified topic.The quickstart explanation should not be too simple put it int points so that
                the reader is able to understand it in depth or get a quickstart. It is your job to return this collected 
                information in a JSON object""",
            backstory="""As a Subject Research Agent, you are responsible for looking up specific positions 
                within a company and gathering relevant information.
                
                Important:
                - Once you've found the information, immediately stop searching for additional information.
                - Only return the requested information. NOTHING ELSE!
                - Make sure you find the information for each topic in each subject.
                - Do not generate fake information. Only return the information you find. Nothing else!
                """,
            tools=[self.searchInternetTool, self.youtubeSearchTool],
            llm=self.llm,
            verbose=True
        )