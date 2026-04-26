# School
# School Management API

## 📌 Overview

This project is a Node.js + MySQL API to manage school data. It allows adding schools and retrieving them sorted by proximity using geographical distance.

## 🚀 Features

* Add new school
* Retrieve schools sorted by distance
* Distance calculated using Haversine formula

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL

## 📡 API Endpoints

### ➤ Add School

POST /addSchool

Request:
{
"name": "ABC School",
"address": "Pune",
"latitude": 18.5204,
"longitude": 73.8567
}

Response:
{
"message": "School added successfully",
"id": 1
}

---

### ➤ List Schools

GET /listSchools?latitude=18.52&longitude=73.85

Response:
[
{
"id": 1,
"name": "ABC School",
"distance": 0.5
}
]

## ⚙️ Setup Instructions

1. Clone repo
2. Install dependencies:
   npm install
3. Configure database in config/db.js
4. Run server:
   npm run dev

## 📬 Postman Collection



## 🌐 Deployment

(Add your live API link here if deployed)

