FROM python:3.7-alpine

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /requirements.txt
RUN pip3 install -r /requirements.txt

RUN mkdir /doc
WORKDIR /doc
COPY ./doc /doc

EXPOSE 8000
