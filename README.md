# React + Vite
# AI Article Summarizer

This web application is designed to provide concise summaries of given articles through a user-friendly interface. It is built using React, Vite, Redux Toolkit, and leverages the RapidAPI for fetching article summaries.

## Features

- URL input for fetching article summaries.
- Interactive user interface with loading, error, and summary views.
- Local storage integration to remember and display a history of past article URLs.
- Convenient copy functionality for past article URLs.

## Project Structure

.
├── assets
├── dist
│ ├── index.html
│ └── vite.svg
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│ └── index.html
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── assets
│ ├── components
│ │ ├── Demo.jsx
│ │ └── Hero.jsx
│ ├── main.jsx
│ ├── services
│ │ └── article.js
│ ├── store.js
│ ├── tailwind.config.js
│ └── vite.config.js
└── README.md

python
Copy code

## Demo Component

This is the main component where users can input article URLs to fetch the summary:

'''
import React, {useState, useEffect} from 'react';
import {copy, linkIcon, loader, tick} from "../assets";
import {useLazyGetSummaryQuery} from "../services/article";
'''

// [Complete Demo component code here...]
Article API Service
The application makes use of the @reduxjs/toolkit/query to interact with the RapidAPI endpoint for fetching article summaries:

jsx
Copy code
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// [Complete Article API service code here...]
Getting Started
Clone the repository:
bash
Copy code
git clone [repository_url]
Navigate to the project directory and install dependencies:
bash
Copy code
cd [project_directory]
npm install
Start the development server:
bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.
License
This project is open-source and available under the MIT License.

css
Copy code

Remember to replace placeholders such as `[repository_url]` and `[project_directory]` with the actual values pertinent to your project.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
