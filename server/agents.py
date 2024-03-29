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
            goal=f"""Generate a list of JSON objects containing a detailed quickstart guide for the topics and the urls for 3 recent blog articles and 
                the url and title for 3 recent YouTube Videos, for each topic in each subject. The quickstart guide should be
                atleast 7 to 10 points it should resemble a fireship youtube video.
                Topic Overview: Begin with a brief introduction to the topic, explaining its significance and basic concepts in simple terms.

Target Audience: Consider the beginners as your target audience. Avoid jargon and explain any necessary technical terms in a clear and understandable way.

Installation or Setup (if applicable): For technical topics requiring installation or setup, provide a step-by-step guide. Mention any prerequisites and recommend the most straightforward method.

Key Concepts and Definitions: List the key concepts and definitions that are crucial for a beginner to understand the topic. Use bullet points or a numbered list for clarity.

Practical Steps: Break down the topic into practical, actionable steps. Whether it’s a process, a series of exercises, or a progression of topics to learn, outline these in a logical order.

Examples: Include at least one simple example to illustrate an important concept or practice. This helps in bridging the gap between theory and practice.

Resources for Further Learning: Recommend resources for further exploration of the topic. These can include books, websites, online courses, or community forums.
             
                Subjects: {subjects}
                Topics: {topics}

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
            goal="""Look up the specific topics for a given subject and generate a detailed quickstart guide on the topics along with that find urls for 3 recent blog articles and 
                the url and title for 3 recent YouTube Videos for each specified topic.
                The quickstart guide should be atleast 7 to 10 points it should resemble a fireship youtube video. 
                Topic Overview: Begin with a brief introduction to the topic, explaining its significance and basic concepts in simple terms.

Target Audience: Consider the beginners as your target audience. Avoid jargon and explain any necessary technical terms in a clear and understandable way.

Installation or Setup (if applicable): For technical topics requiring installation or setup, provide a step-by-step guide. Mention any prerequisites and recommend the most straightforward method.

Key Concepts and Definitions: List the key concepts and definitions that are crucial for a beginner to understand the topic. Use bullet points or a numbered list for clarity.

Practical Steps: Break down the topic into practical, actionable steps. Whether it’s a process, a series of exercises, or a progression of topics to learn, outline these in a logical order.

Examples: Include at least one simple example to illustrate an important concept or practice. This helps in bridging the gap between theory and practice.

Resources for Further Learning: Recommend resources for further exploration of the topic. These can include books, websites, online courses, or community forums.
                It is your job to return this collected 
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