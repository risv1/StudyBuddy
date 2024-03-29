from typing import List
from pydantic import BaseModel


class NamedUrl(BaseModel):
    name: str
    url: str


class TopicInfo(BaseModel):
    subject: str
    topic: str
    name: str
    blog_articles_urls: List[str]
    youtube_interviews_urls: List[NamedUrl]


class TopicInfoList(BaseModel):
    topics: List[TopicInfo]