
## User Authentication(Login-Registration) App

A User Authentication (Login & Registration) application built using the MERN stack (React, Express, Node.js, MongoDB Atlas).

This project demonstrates how client-side and server-side APIs work together, including:

- Sending data from React frontend to Express backend
- Validating requests using Joi
- Secure password hashing with bcrypt
- Authentication using JWT (jsonwebtoken)
- Storing and retrieving user data from MongoDB Atlas
- Managing environment variables with dotenv
- Handling CORS and request parsing

The goal of this project is to understand the complete data flow from client → server → database → client, and to practice building secure REST APIs.

### Install Dependencies for Frontend & Backend

**Frontend:**
```bash
  npm install
  npm install react-router-dom react-toastify
```

**Backend:**
```bash
  npm install
  npm i express cors dotenv bcrypt body-parser joi jsonwebtoken mongoose
```

## Environment Variables

- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values

```bash

PORT = "-------- Any Port --------"

MONGO_CONN = "-------- Paste Your Mongo URI Here --------"

JWT_SECRET = "-------- Anything --------"
