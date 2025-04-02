# Real-Time Chat App

## 📌 Project Overview
This is a **real-time chat application** where users can send and receive messages instantly. The app supports user authentication, real-time messaging, and group chats.

## 🚀 Features
- 🔐 User authentication (Login & Signup)
- 💬 One-on-one and group chat support
- 🚀 Real-time messaging using WebSockets (Socket.io)
- 🟢 Online/offline user status
- 📷 Image and file sharing (if implemented)
- 🎨 Responsive and clean UI

## 🛠 Tech Stack
- **Frontend:** React.js, Redux (if used), Tailwind CSS/Bootstrap
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **WebSockets:** Socket.io
- **Authentication:** JWT & bcrypt.js
- **File Upload (if applicable):** Multer, Cloudinary

## ⚡ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the **backend** folder and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     CLOUDINARY_API_KEY=your_api_key # (if using Cloudinary)
     ```

4. **Run the application:**
   ```bash
   # Start the backend
   cd backend
   npm start
   
   # Start the frontend
   cd ../frontend
   npm start
   ```

## 🎯 API Endpoints (Backend)
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | Login user & get token |
| GET    | `/api/users`          | Fetch all users |
| GET    | `/api/chats`          | Fetch all chats |
| POST   | `/api/chats`          | Create a new chat |
| POST   | `/api/messages`       | Send a message |
| GET    | `/api/messages/:chatId` | Get all messages of a chat |


## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

## 📬 Contact
For any queries, reach out to me at **sameermalik63901@gmail.com
