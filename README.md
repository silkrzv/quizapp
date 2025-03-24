HEAD
# QuizApp

QuizApp is a quiz application developed with a Spring Boot backend and a React frontend. The project allows users to answer questions from various categories and track their scores.

🚀 Technologies Used

- Backend: Java, Spring Boot, Spring Security, PostgreSQL
- Frontend: React, Vite, TypeScript
- Authentication: JWT
- Build Tools: Maven, npm

📂 Project Structure

quizapp/
│── backend/     # Spring Boot Backend
│── frontend/    # React Frontend
│── .gitignore
│── README.md
│── pom.xml      # Maven Configuration

🛠️ Installation and Running

1️⃣ Clone the Repository

```bash
git clone https://github.com/silkrzv/quizapp.git
cd quizapp
```

2️⃣ Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

The backend will run at http://localhost:8080

3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

🎯 Features

📌 Question Management

- Fetch all questions
- Fetch questions by category
- Add new questions
- Update existing questions
- Delete questions

📌 Quiz Management 

- Create quizzes based on category and number of questions
- Retrieve quiz questions
- Submit answers and calculate scores



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


