# 🌸 DERMA AI - AI-Powered Skin Health Platform

<p align="center">
  <b>An Intelligent AI-Based Skin Health Analysis and Personalized Skincare Recommendation Platform</b>
</p>

<p align="center">
  Live Demo: https://dermaai-skinhealth.netlify.app/
</p>

---

## 📌 Overview

**DERMA AI** is an AI-powered skin health platform designed to analyze lifestyle factors, predict skin health conditions, and provide personalized skincare recommendations.

The platform combines Artificial Intelligence, Machine Learning, and modern web technologies to help users understand their skin health through data-driven insights.

Unlike traditional skincare applications focused only on visible symptoms, DERMA AI focuses on **preventive skin wellness** by analyzing lifestyle habits such as:

- Sleep quality
- Stress level
- Water intake
- Diet habits
- Exercise routine
- Screen time
- Skincare routine
- Lifestyle factors

---

# ✨ Features

## 🔐 User Authentication

- User registration and login
- Secure authentication using JWT
- Personalized user profiles
- User data management


## 🧴 AI Skin Health Prediction

Users can provide lifestyle information and receive:

- Skin Health Score (0-100)
- Dry Skin Risk Prediction
- Skin Age Estimation
- Personalized recommendations


## 📸 AI Image Skin Analysis

- Upload skin images
- AI-powered image analysis
- Skin condition insights
- Personalized suggestions


## 🤖 AI Skin Assistant Chatbot

Interactive AI assistant providing:

- Skincare guidance
- Lifestyle recommendations
- Skin health-related queries


## 📊 Prediction History

Users can:

- View previous predictions
- Track skin health changes
- Analyze improvement trends


## 🔮 Future Skin Prediction

AI-based prediction module to estimate possible future skin health conditions based on lifestyle patterns.

---

             User
              |
              |
        Frontend (Netlify)
              |
              |
        REST API Requests
              |
              |
        Backend (Render)
              |
              |
    -----------------------
    |                     |
MongoDB Database     AI Models

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Responsive UI Design

## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- Multer (Image Upload)

## Database

- MongoDB Atlas

## AI/ML Components

- Machine Learning Models
- Predictive Analytics
- Lifestyle-based Skin Health Analysis


## Deployment

Frontend:
- Netlify

Backend:
- Render

Database:
- MongoDB Atlas

---

# 📂 Project Structure
DERMA-AI
│
├── frontend
│ ├── index.html
│ ├── CSS files
│ └── JavaScript files
│
├── server.js
├── db.js
├── package.json
├── models
├── outputs
└── README.md


---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/DERMA-AI.git

Navigate into project:

cd DERMA-AI

Backend Setup
Install dependencies:

npm install
Create .env file:

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
Run backend:

node server.js
Backend will start on:

http://localhost:5000

Frontend Setup
Open frontend folder:

cd frontend
Run using Live Server or deploy using Netlify.

🔗 Live Application
Frontend:

https://dermaai-skinhealth.netlify.app/

Backend:

https://derma-ai-dbfb.onrender.com

Ridhi Garg
AI Engineering
Machine Learning Integration
Frontend Development
Deployment
Backend Development
Database Integration
System Architecture

🔮 Future Enhancements
Real-time dermatologist consultation

Mobile application version

Advanced computer vision models

Larger clinical skin datasets

Explainable AI (XAI) integration

Personalized product recommendation engine

⚠️ Disclaimer
DERMA AI is developed for educational and preventive skin wellness purposes.

It does not replace professional medical diagnosis or consultation with qualified dermatologists.

⭐ Support
If you like this project, consider giving it a ⭐ on GitHub.
