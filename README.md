# MaxOut Fitness Application

MaxOut is a comprehensive fitness application built with React, Material-UI, and the Rapid API. It provides a user-friendly interface to explore and discover various exercises for different body parts, offering a convenient way to enhance your workout routine.

## Features

 **Body Part Exploration**: On the home page, you can scroll through a collection of body part cards. Clicking on a card will display a list of exercises specific to that body part.

 **Exercise Details**: Each exercise result includes a GIF demonstrating the proper form, as well as information about the body parts targeted by the exercise.

 **Search Functionality**: The application features a search bar that allows you to find exercises by name, equipment type, or body part. The search results dynamically update based on your input.

 **Exercise Page**: By clicking on an exercise card from the search results, you'll be navigated to the exercise page. Here, you'll find YouTube video thumbnails related to the selected exercise. Clicking on a thumbnail will open the corresponding YouTube video in a new tab.

 **Similar Exercises**: On the exercise page, you'll also find sections for similar exercises targeting the same body part, as well as exercises utilizing the same equipment as the selected exercise.

 **Responsive Website**: The application is made to be responsive for all the screens using the features from Material UI.

## Technologies Used

 **React**: A popular JavaScript library for building user interfaces.
 **Material-UI**: A comprehensive React UI component library that follows Google's Material Design guidelines.
 **Rapid API**: A platform that provides access to various APIs, including the exercise and fitness API used in this application.

 API's used:
 
 # RAPID API:
 1. **ExerciseDB:** `https://exercisedb.p.rapidapi.com` (Used to display and search between 1300+ exercises and categories)
 2. **Youtube Search and Download:** `https://youtube-search-and-download.p.rapidapi.com` (Used to provide youtube redirection for each exercises)

## Getting Started

To run the MaxOut Fitness application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Keerthana1824/MaxOut_Fitness_application.git`
2. Navigate to the project directory: `cd maxout`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## View the project outcome : 

`https://maxout-1824.web.app`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

