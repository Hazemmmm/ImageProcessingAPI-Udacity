# Udacity Image Processing API

## OVERVIEW

This project designs APIs for image processing that allows the user to visit a url and using url parameters, resize the image based on the parameters provided. Upon viewing an image that’s already been resized, a cached image will be served.

## REQUIREMENTS

1- Download & Install node.js (https://nodejs.org/en/download/)
2- Install Typescript, Express, Jasmine for testing.

## FUNCTIONALITIES

### RESIZE IMAGES

- navigate to (localhost:3000/api/images?filename=ironman&height=60&width=60)

### VIEW ALL THUMBNAILS

- navigate to (localhost:3000/api/thubnails)

## HOW TO START SERVER

- npm install
- npm run start

## RUN UNIT tests

- npm run test

## BUILD PROJECT

- npm run build

## WELL-FORMATTED CODE

### LINTING

- npm run lint

### PRETTIER

- npm run prettier

## HOW TO USE TEST

The API offers one endpoint to access and resize images available in the `public/images/full` folder.

The endpoint is `api/images` and requires three query params:

| Query Param |                                     Value                                     |
| ----------- | :---------------------------------------------------------------------------: |
| filename    | the filename (without extension) of one of the images available in the folder |
| height      |                        it should be a positive integer                        |
| width       |                        it should be a positive integer                        |
