# TECH-QUIZ

A full-stack Quiz Management Platform built using the MERN stack. The application enables secure user authentication, quiz participation, result tracking, and quiz administration through dedicated user and admin interfaces.

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Clerk

### Version Control
- Git
- GitHub

---

## Architecture

```
React (Frontend)
        │
        ▼
Express.js REST API
        │
        ▼
MongoDB Database
        ▲
        │
 Clerk Authentication
```

---

## Features

### User
- Secure Authentication
- Attempt Quizzes
- View Quiz Results
- Result History

### Admin
- Dashboard
- Create Quiz
- Manage Quizzes
- Monitor Results

---

## Project Structure

```
TECH-QUIZ
│
├── frontend/
├── backend/
├── admin/
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Thejaswini1234/TECH-QUIZ.git
```

Install dependencies

```bash
npm install
```

Run Backend

```bash
cd backend
npm install
npm start
```

Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Run Admin

```bash
cd admin
npm install
npm run dev
```

---

## Environment Variables

Create the required `.env` files and configure:

```env
MONGODB_URI=
CLERK_SECRET_KEY=
VITE_CLERK_PUBLISHABLE_KEY=
```

> `.env` files are excluded from this repository.

---

## Future Enhancements

- Quiz Categories
- Difficulty Levels
- Leaderboard
- Quiz Timer
- Analytics Dashboard

---

## Author

**Thejaswini C**

GitHub: **https://github.com/Thejaswini1234**