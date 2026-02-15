# Dockerized Weather Web Service

## Project Description
This project is a simple Dockerized Weather Web Service built using Node.js and Express. It fetches real-time weather data for a selected city using the OpenWeatherMap API and returns the result in JSON format. The application runs inside a Docker container and can be reproduced on any machine.

## Weather API Used
OpenWeatherMap API  
[https://openweathermap.org/api
](https://openweathermap.org/api)

## API Key Used (For Testing)
e61e8de28aa10940c08c7ac6e0718018

## Required Environment Variable
This project requires the following environment variable:
API_KEY
Example value:
e61e8de28aa10940c08c7ac6e0718018

## Docker Build Instructions
From the root directory of the project, run:
docker build -t weather-service .

## Docker Run Instructions
Run the container using:
docker run -p 8080:8080 -e API_KEY=e61e8de28aa10940c08c7ac6e0718018 weather-service

If successful, the terminal will display:
Server running on port 8080

## How to Test the Service
Open your browser and visit:
http://localhost:8080/weather?city=Gaza

Or test using curl:
curl "http://localhost:8080/weather?city=Gaza"

## How to Stop the Container
Press:
Ctrl + C

Or in another terminal:
docker ps
docker stop <container_id>

## Project Structure
weather-service/
├─ src/
│  ├─ server.js
│  ├─ package.json
├─ Dockerfile
├─ .dockerignore
├─ .gitignore
├─ README.md
└─ docs/
   └─ screenshots/

## Features
- Returns weather data by city name
- Displays: City, Temperature, Weather Condition, Timestamp
- Fully Dockerized
- Reproducible on any machine

## Course Information
OS LAB – Recovery Project  
Dockerized Weather Web Service  
Pass Opportunity (Maximum Grade: 60)
