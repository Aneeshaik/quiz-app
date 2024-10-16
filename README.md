# Quiz App

This is a full-stack Quiz App project that allows users to answer questions, track scores, and navigate through a series of quiz questions. The project is split into two folders:

- `frontend/`: Contains the React app (UI and client-side logic).
- `backend/`: Contains the Node.js/Express server with MongoDB database for storing questions, answers, and user data.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Frontend](#frontend)
- [Backend](#backend)

## Demo

**Live Demo**: [https://quiz-app-rbxi.onrender.com/]

## Features

- User authentication (sign in, sign up)
- Randomized quiz questions
- Score tracking
- Dynamic user interface with React
- RESTful API backend
- Dark and light mode toggle
- MongoDB integration

## Technologies

### Frontend:
- React.js
- Tailwind CSS
- Axios for API requests
- React Router for navigation
- Toastify for notifications

### Backend:
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Mongoose for MongoDB interactions
- dotenv for environment variables

## Setup

To get the app running locally, follow these instructions:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```
### 2. Install Dependencies
You need to install dependencies for both the frontend/ and backend/ folders.

**Backend (Node.js + Express)**
```
cd backend
npm install
```
**Create a .env file in the backend directory and add the following:**
```
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
**Frontend (React)**
```
cd ../frontend
npm install
```
### 3. Running the App
**Start the Backend**
In the backend/ folder, start the server:
```
cd backend
npm start
```
The backend will run on ``` http://localhost:5000 ```.

**Start the Frontend**
In the frontend/ folder, start the React app:
```
cd ../frontend
npm start
```
The frontend will run on ``` http://localhost:3000 ```.

### 4. Open the App
Now, go to ``` http://localhost:3000 ``` to access the frontend. The backend will be running on http://localhost:5000 for API requests.
