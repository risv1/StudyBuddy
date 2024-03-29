from crewai import Task, Agent
from textwrap import dedent


from job_manager import append_event
from models import TopicInfo, TopicInfoList
from utils.logging import logger


class SubjectResearchTasks():

    def __init__(self, job_id):
        self.job_id = job_id

    def append_event_callback(self, task_output):
        logger.info("Callback called: %s", task_output)
        append_event(self.job_id, task_output.exported_output)

    def manage_research(self, agent: Agent, subject: list[str], topics: list[str], tasks: list[Task]):
        return Task(
            description=dedent(f"""Based on the list of subjects {subject} and the topics {topics},
                use the results from the Subject Research Agent to research each topic in each subject.
                to put together a json object containing the detailed quickstart guide of the topic along with URLs for 3 blog articles, the URLs and title 
                for 3 YouTube interviews for each topic in each subject.
                The quickstart guide should be atleast 7 to 10 points it should resemble a fireship youtube video 
                Topic Overview: Begin with a brief introduction to the topic, explaining its significance and basic concepts in simple terms.

Target Audience: Consider the beginners as your target audience. Avoid jargon and explain any necessary technical terms in a clear and understandable way.

Installation or Setup (if applicable): For technical topics requiring installation or setup, provide a step-by-step guide. Mention any prerequisites and recommend the most straightforward method.

Key Concepts and Definitions: List the key concepts and definitions that are crucial for a beginner to understand the topic. Use bullet points or a numbered list for clarity.

Practical Steps: Break down the topic into practical, actionable steps. Whether it’s a process, a series of exercises, or a progression of topics to learn, outline these in a logical order.

Examples: Include at least one simple example to illustrate an important concept or practice. This helps in bridging the gap between theory and practice.

Resources for Further Learning: Recommend resources for further exploration of the topic. These can include books, websites, online courses, or community forums.            
                """),
            agent=agent,
            expected_output=dedent(
                """A json object containing the detailed quickstart guide and URLs for 3 blog articles and the URLs and 
                    titles for 3 YouTube interviews for each topic in each subject."""),
            callback=self.append_event_callback,
            context=tasks,
            output_json=TopicInfoList
        )

    def subject_research(self, agent: Agent, subject: str, topics: list[str]):
        return Task(
            description=dedent(f"""Research the topics {topics} for the {subject} subject. 
                For each topic,generate a detailed quickstart guide along with that find the URLs for 3 recent blog articles and the URLs and titles for
                3 recent YouTube videos for the person in each position.The quickstart guide should be
                atleast 7 to 10 points it should resemble a fireship youtube video.
                Topic Overview: Begin with a brief introduction to the topic, explaining its significance and basic concepts in simple terms.

Target Audience: Consider the beginners as your target audience. Avoid jargon and explain any necessary technical terms in a clear and understandable way.

Installation or Setup (if applicable): For technical topics requiring installation or setup, provide a step-by-step guide. Mention any prerequisites and recommend the most straightforward method.

Key Concepts and Definitions: List the key concepts and definitions that are crucial for a beginner to understand the topic. Use bullet points or a numbered list for clarity.

Practical Steps: Break down the topic into practical, actionable steps. Whether it’s a process, a series of exercises, or a progression of topics to learn, outline these in a logical order.

Examples: Include at least one simple example to illustrate an important concept or practice. This helps in bridging the gap between theory and practice.

Resources for Further Learning: Recommend resources for further exploration of the topic. These can include books, websites, online courses, or community forums.
                Return this collected information in a JSON object.
                               
                Helpful Tips:
                - To find the blog articles names and URLs, perform searches on Google such like the following:
                    - "{subject} [TOPIC HERE] blog articles"
                - To find the youtube interviews, perform searches on YouTube such as the following:
                    - "{subject} [TOPIC HERE] interview"
                               
                Important:
                - Once you've found the information, immediately stop searching for additional information.
                - Only return the requested information. NOTHING ELSE!
                - Do not generate fake information. Only return the information you find. Nothing else!
                - Do not stop researching until you find the requested information for each topic in the subject.
                """),
            agent=agent,
            expected_output="""A JSON object containing the researched information for each topic in the subject.
            Make sure that the quickstart pointers are atleast 10 lines long and the article urls and youtube urls are present for each topic.""",
            callback=self.append_event_callback,
            output_json=TopicInfo,
            async_execution=True
        )