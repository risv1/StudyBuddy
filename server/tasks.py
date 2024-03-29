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
                to put together a json object containing the ELI5 explanation of the topic along with URLs for 3 blog articles, the URLs and title 
                for 3 YouTube interviews for each position in each company.
                               
                """),
            agent=agent,
            expected_output=dedent(
                """A json object containing the ELI5 explanation and URLs for 3 blog articles and the URLs and 
                    titles for 3 YouTube interviews for each topic in each subject."""),
            callback=self.append_event_callback,
            context=tasks,
            output_json=TopicInfoList
        )

    def subject_research(self, agent: Agent, subject: str, topics: list[str]):
        return Task(
            description=dedent(f"""Research the topics {topics} for the {subject} subject. 
                For each topic,generate an ELI5 along with that find the URLs for 3 recent blog articles and the URLs and titles for
                3 recent YouTube videos for the person in each position.
                Return this collected information in a JSON object.
                               
                Helpful Tips:
                - To find the blog articles names and URLs, perform searches on Google such like the following:
                    - "{topics} [POSITION HERE] blog articles"
                - To find the youtube interviews, perform searches on YouTube such as the following:
                    - "{topics} [POSITION HERE] interview"
                               
                Important:
                - Once you've found the information, immediately stop searching for additional information.
                - Only return the requested information. NOTHING ELSE!
                - Do not generate fake information. Only return the information you find. Nothing else!
                - Do not stop researching until you find the requested information for each topic in the subject.
                """),
            agent=agent,
            expected_output="""A JSON object containing the researched information for each topic in the subject.""",
            callback=self.append_event_callback,
            output_json=TopicInfo,
            async_execution=True
        )