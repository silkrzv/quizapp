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



