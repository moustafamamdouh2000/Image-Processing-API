# Udacity-Image-Processing-API

# Getting Started

this project uses nodejs with dependencies to process the image and return it with specific width and height

nodejs is required and can be downloaded from the following link https://nodejs.org/en/download/

### Dependencies used in this project are
- Prettier for formatting
- Lint to flag programming errors
- Express to build and start the server
- Sharp to process the image to the required width and height
- Jasmine to write test cases for the code

run `npm install` in the root folder to download all the required dependencies to start the application

make sure yarn is installed as well by typing the following commad `npm install --global yarn`
## API References
- the base URL for this app is the `localhost:5000` or `http://127.0.0.1:5000` you can change the port number in the code to your desire in the src/index.ts file
## Status Codes
- 200 OK , succesful
- 400 bad request , errors
# End Points
these are the end points you can access by writing the end point after the localhost address ,for example `http://127.0.0.1:5000/images`
### GET Request /
- `http://127.0.0.1:3000/` main page and have the instructions to follow to use the API
### GET Request /images
- `http://127.0.0.1:3000/images` to view the images folder and content inside it
### GET Request /images/api
- `http://127.0.0.1:3000/images/api?filename={your name file name.jpg}` to view the image
- `http://127.0.0.1:3000/images/api?filename={your name file name.jpg}&width={width}&height={height}` to generate the image in the desired width and height , stored in the resized folder inside /images folder
- you can't enter invalid file name , will generate code 400 bad request, or entering invalid parameters either only width or only height without each other also will generate the 400 status code.
## Scripts can be used
- `npm start` to build and run the project
- `npm run test` to run the written test with jasmine and check the cases
- `npm run format ` to format the project .ts files in the src folder according to the .prettierrc settings inputed there
- `npm run lint` to run lint and check for errors
- `npm run Build` to build the .ts files and generate the .js files in the build folder
