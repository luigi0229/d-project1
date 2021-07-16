# Docker Voting App (WIP)

A set of Docker containers that accomplish a similar result as the docker voting app example.
The deployment creates a voting application that allows users to pick between two options, and dynamically update the results page.

The Front-end container is a react native App that makes GET requests to the backend.

The Back-end container is an Express app running on node JS.

The DB container is a stock MongoDB docker image.

The purpose of this app is to familiarize myself with docker-compose deployment, and how containerized applications interact with each other. 
