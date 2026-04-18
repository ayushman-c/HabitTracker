# Habit Tracker

## Overview
A full stack habit tracking web application that allows users to create, track, and maintain habits with authentication and streak tracking.

---

## Tech Stack

### Frontend
- React (Vite)
- Clerk (Authentication)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Clerk (JWT verification)

---

## Features
- Google authentication (Clerk)
- Create and manage habits
- Daily habit tracking
- Streak calculation
- Protected API routes

---

## Project Structure

frontend/  
backend/

---

## Setup

### Backend

cd backend  
npm install  

Create a `.env` file:

MONGO_URI=your_mongodb_uri  
CLERK_SECRET_KEY=your_secret_key  
PORT=5000  

Run server:

npm run dev  

---

### Frontend

cd frontend  
npm install  

Create a `.env` file:

VITE_CLERK_PUBLISHABLE_KEY=your_key  
VITE_API_URL=http://localhost:5000  

Run frontend:

npm run dev  

---

## API

GET    /api/habits  
POST   /api/habits  
POST   /api/habits/:id/toggle  

Headers:

Authorization: Bearer <token>  

---

## Deployment

Backend: Render / Railway  
Frontend: Vercel  

---

## License
MIT
