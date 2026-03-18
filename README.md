# MyPustak Full Stack Developer – Coding Challenge

## Overview
This is a minimal **Post Management Application** built as part of the MyPustak Full Stack Developer Hiring Challenge.

The application allows users to:
- View posts
- Create new posts
- Delete posts

---

## 🛠 Tech Stack

### Backend
- FastAPI
- Python
- In-memory storage (no database)

### Frontend
- Next.js (TypeScript)
- Tailwind CSS
- Axios

---

## Features

Fetch all posts  
Create new post  
Delete post  
Loading state handling  
Error handling  
Clean and responsive UI  

---

## Project Structure

mypustak-challenge/
├── backend/
│ └── main.py
├── frontend/
│ ├── app/
│ ├── lib/
│ └── ...
└── README.md


---

##  Setup Instructions

###  Backend Setup

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
Backend runs on: http://127.0.0.1:8000

###  Frontend Setup
cd frontend
npm install
npm run dev
Frontend runs on: http://localhost:3000

# API Endpoints
| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /posts     | Get all posts     |
| POST   | /posts     | Create a new post |
| DELETE | /posts/:id | Delete a post     |


# Implementation Details

Used in-memory array to store posts as per requirement

Implemented RESTful API using FastAPI

Connected frontend with backend using Axios

Managed state using React hooks

Handled hydration issue in Next.js for stable rendering

# Future Improvements

Add database (MongoDB / PostgreSQL)

Implement authentication (JWT)

Add edit/update feature

Pagination for large data

Improve UI/UX with animations

# Submission 

GitHub Repository: https://github.com/barunkrsingh/mypustak-fullstack-challenge

