# React + Vite
# AI Article Summarizer

This web application is designed to provide concise summaries of given articles through a user-friendly interface. It is built using React, Vite, Redux Toolkit, and leverages the RapidAPI for fetching article summaries.

# Preview
Link to the project demo: https://aisummarizerapplication.netlify.app/

<img width="1098" alt="Screenshot 2023-08-22 at 10 11 10 AM" src="https://github.com/hritvikgupta/React-Application-Ai-Summarizer/assets/60143996/cd56aff1-e520-401b-a9e4-28980acee19e">

## Features

- URL input for fetching article summaries.
- Interactive user interface with loading, error, and summary views.
- Local storage integration to remember and display a history of past article URLs.
- Convenient copy functionality for past article URLs.

## Project Structure

### Frontend

The structure and a brief explanation of each frontend folder/file in the project:

- `src`: Root folder containing all source code.
- `assets`: Contains images and other assets like `linkIcon`, `loader`, `tick`, and `copy`.
- `components`: All reusable components utilized across the application.
    * `Demo.jsx`: Main component where users input article URLs and view summaries.
    * `Hero.jsx`: Possibly a header or banner component (Based on name; adjust as needed).
- `services`: Includes services like API calls.
    * `article.js`: Handles interactions with the RapidAPI endpoint.
- `store.js`: Redux store configuration file.
- `App.css`: Contains global styles for the application.
- `App.jsx`: Root React component.
- `main.jsx`: Entry point for the frontend application.


## Running the Project

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the command `git clone https://github.com/hritvikgupta/React-Application-Ai-Summarizer.git`.
2. Navigate into the project directory using `cd React-Application-Ai-Summarizer`.
3. Install all the necessary dependencies using the command `npm install`.
4. Start the application using the command `npm start`. The application will now be running on http://localhost:5173.

5. ## Contributing

Contributions to the project are welcome. If you find a bug, please open an issue and describe the bug in detail. If you wish to add a new feature, feel free to fork the repository and create a pull request with your changes.
1. Bug In the signUp portal where active tab is not changing.
2. Adding items to cart but some items id is not rendering and therefore not adding inside cart.
3. Add the about section

## License

This project is licensed under the MIT License.
