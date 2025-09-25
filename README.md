# User Registration

This project is a full-stack Contact Management application built with React and Vite. It allows users to securely sign up, log in, and manage a personal list of contacts. The application demonstrates a complete user authentication flow using JWT and full CRUD (Create, Read, Update, Delete) functionality for contacts.

This is the front-end application of a full-stack project. It interacts with a custom-built back-end API ([available here](https://github.com/robertoalyssom/users.api)) to persist user data and handle authentication.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview

This project is a full-stack Contact Management application built with React and Vite. It allows users to securely sign up, log in, and manage a personal list of contacts. The application demonstrates a complete user authentication flow using JWT and full CRUD (Create, Read, Update, Delete) functionality for contacts.

The application includes:

- A **Registration** page (`Sigup`) for new users to sign up.
- A **Login** page for existing users to authenticate.
- **Home** page displays a list of all registered users and allows the logged-in user to delete their own account.
- Global state management for user authentication using React Context.
- Authenticated API requests using Axios interceptors to automatically include the JWT.

## Features

- **User Registration:** A simple and clean interface for user sign-up.
- **Authentication:** Secure user login and logout functionality using JSON Web Tokens (JWT).
- **User Management:** After logging in, users can view a list of all users and have the option to delete their own account.
- **Authenticated API Integration:** Uses Axios with interceptors to automatically attach the authentication token to protected API requests.
- **Modern Tooling:** Built with Vite for a fast development server and efficient production builds.
- **Declarative Routing:** Utilizes React Router DOM to manage application routes.
- **Code Quality:** Integrated ESLint to enforce coding standards and prevent common errors.

## Technologies Used

- **[React](https://reactjs.org/)** (v19.0.0): Frontend library for building user interfaces.
- **[Vite](https://vitejs.dev/)** (v6.1.0): Fast build tool and development server.
- **[Axios](https://axios-http.com/):** Promise-based HTTP client for interacting with backend APIs.
- **[React Router DOM](https://reactrouter.com/):** For handling routing within the application.
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
├── public/                    # Static assets
└── src/
    ├── assets/                # Images, icons, etc.
    ├── components/            # Reusable UI components
    │   ├── Forms/             # Form-specific components (LoginForm, SignupForm)
    │   ├── Modal/             # Reusable Modal component
    │   └── ui/                # General-purpose UI elements (buttons, inputs)
    ├── context/               # React Context providers for global state
    │   ├── AuthContext/       # Manages user authentication state and logic
    │   |── FormContext/       # Distributes and manages form state and actions
    |   |── ServerErrorMsgC... # Manages server error messages
    ├── hooks/                 # Custom React hooks for shared logic
    ├── pages/                 # Application pages/views
    │   ├── Home/              # Main dashboard page for authenticated users
    │   ├── Login/             # Login page
    │   └── Signup/            # User registration page
    ├── routes/
    │   └── PrivateRoute.jsx   # Component to protect routes that require authentication
    ├── services/              # Modules for interacting with the back-end API
    │   ├── api.js             # Axios instance configuration and interceptors
    │   ├── login.js           # API call for user login
    │   ├── createUser.js      # API call for user registration
    │   └── ...                # Other specific API call modules
    ├── utils/                 # Utility functions (e.g., form validation)
    ├── app.jsx                # Main application component with router setup
    ├── main.jsx               # Application entry point
    └── index.css              # Global styles
├── .gitignore                 # Git ignore file
├── package.json               # Project metadata and dependencies
└── vite.config.js             # Vite configuration
```

Note: The structure above is a common setup; your repository may include additional files and folders as required by your project.

---

Developed by [Roberto Alysson](https://github.com/robertoalyssom)
