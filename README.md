# User Registration

This project was developed as part of a tutorial from the DevClub | Programação YouTube channel. It is a React application built with Vite, focused on managing a user list and demonstrates best practices for building scalable React applications.

This is the front-end application of a full-stack project. It interacts with a custom-built back-end API (available here) to provide dynamic data and functionality.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview

This repository contains the source code for a user registration system that leverages modern web development tools and best practices. Its primary aim is to improve the development of applications using React, by providing hands-on experience with Vite, implementing ESLint for code quality, and managing dependencies like Axios for API interactions.

The application includes:

- A **Home** page (see `src/pages/Home/index.jsx`) which serves as an entry point for users.
- An intuitive user interface designed to simplify user registration.
- Lightweight configuration to speed up both development and production builds.

## Features

- **User Registration:** A simple and clean interface for user sign-up.
- **Modern Tooling:** Built with Vite for fast development and efficient production builds.
- **React Powered:** Utilizes the latest React features ensuring a modular and maintainable codebase.
- **API Integration:** Uses Axios to handle asynchronous HTTP requests.
- **Code Quality:** Integrated ESLint configurations to enforce coding standards and prevent common pitfalls.

## Technologies Used

- **[React](https://reactjs.org/)** (v19.0.0): Frontend library for building user interfaces.
- **[Vite](https://vitejs.dev/)** (v6.1.0): Fast build tool and development server.
- **[Axios](https://axios-http.com/):** Promise-based HTTP client for interacting with backend APIs.
- **[ESLint](https://eslint.org/):** Pluggable linting utility to help keep code clean and consistent.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) (v14 or later) installed on your machine. Then, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/robertoalyssom/user-registration.git
   cd user-registration

   ```

2. **Install Dependencies:**

   ```bash
   npm install

   ```

## Usage

After installing the dependencies, you can start the development server with the following command:

```bash
npm run dev
```

## Project Structure

```
user-registration/
├── node_modules/              # Project dependencies
├── public/                    # Public assets and index.html
├── src/                       # Source code of the application
│   ├── assets/                # Images, icons, and static assets
│   ├── components/            # Reusable UI components
│   ├── context/               # React context providers for global state
│   ├── pages/                 # Application pages
│   │   └── Home/
│   │       └── index.jsx      # Home page component
│   ├── services/              # API service modules (e.g., Axios calls)
│   └── main.jsx               # Application entry point
├── .eslintrc.js               # ESLint configuration
├── package.json               # Project metadata and dependencies
└── vite.config.js             # Vite configuration
```

Note: The structure above is a common setup; your repository may include additional files and folders as required by your project.

---

Developed by [Roberto Alysson](https://github.com/robertoalyssom)
