from typing import List
from pydantic import BaseModel


class NamedUrl(BaseModel):
    name: str
    url: str


class TopicInfo(BaseModel):
    subject: str
    topic: str
    name: str
    quicstart_pointers: List[str]
    article_urls: List[str]
    youtube_urls: List[NamedUrl]


class TopicInfoList(BaseModel):
    topics: List[TopicInfo]