# 🏫 School Management API

## 🚀 Overview

This project is a Node.js + Express API that allows users to:

* Add schools
* Fetch schools sorted by proximity to a user location

It also includes a frontend map interface using Leaflet.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL (Railway)
* Leaflet (Map UI)
* Render (Deployment)

---

## 📡 API Endpoints

### ➕ Add School

POST /api/addSchool

Payload:
{
"name": "ABC School",
"address": "Pune",
"latitude": 18.5204,
"longitude": 73.8567
}

---

### 📍 List Schools

GET /api/listSchools?latitude=18.52&longitude=73.85

Returns schools sorted by distance.

---

## 🌐 Live Demo

Backend:
https://school-i03o.onrender.com

Frontend:
https://school-i03o.onrender.com

---

## 🗄️ Database Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);
```

---

## ⚙️ Setup Instructions

```bash
git clone <repo-link>
cd school-api
npm install
npm start
```

---

## ✨ Features

* CRUD operations for schools
* Distance-based sorting
* Map visualization
* Radius filtering
* Search functionality
