# Todo App Backend API

A RESTful API backend for a Todo application built with Node.js, Express, and MongoDB. This API provides user authentication, task management, and collection organization features.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Collection Organization**: Organize tasks by collections
- **Data Validation**: Input validation using Joi schemas
- **Error Handling**: Global error handling middleware
- **Database Integration**: MongoDB with Mongoose ODM

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.4.1
- **Authentication**: JWT (jsonwebtoken 9.0.3)
- **Password Hashing**: bcrypt 6.0.0
- **Validation**: Joi 18.1.2
- **CORS**: cors 2.8.6
- **Environment**: dotenv 17.4.2

## 📋 API Endpoints

### Authentication (`/users`)
- `POST /users/signup` - Create a new user account
- `POST /users/login` - Authenticate user and get JWT token
- `GET /users/` - Get current user profile (requires authentication)
- `DELETE /users/delete_account` - Delete user account (requires authentication)

### Collections (`/categories`)
- CRUD operations for task collections
- Organize tasks by different collections

### Tasks (`/tasks`)
- CRUD operations for tasks
- Link tasks to collections
- Manage task status and details



## 📁 Project Structure

```
src/
├── app.controller.js     # Main application setup and bootstrap
├── main.js              # Application entry point
├── common/
│   └── middleware/      # Global middleware (auth, error handling)
├── database/
│   └── connection.js    # MongoDB connection setup
├── modules/
│   ├── user/           # User authentication and profile
│   ├── category/       # Task collection management
│   └── task/           # Task operations
└── utils/
    └── validation.js   # Validation utilities
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in, include the JWT token in the Authorization header for protected routes:

```
Authorization: <your_jwt_token>
```

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Input validation with Joi schemas
- CORS configuration
- Global error handling



## 📝 Scripts

- `npm start` - Start the server with file watching

## 📚 API Documentation

For detailed API documentation and testing, you can use the Postman collection:
- **Postman Documentation**: [https://documenter.getpostman.com/view/37911269/2sBXqJKfis]



