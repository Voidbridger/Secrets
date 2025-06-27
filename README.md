🔐 Secrets Authentication App
A simple Node.js web application for secure user registration and login using Express.js, MongoDB, and encrypted password storage.
📋 Overview
The Secrets App is a basic web application that allows users to register and log in securely, storing their credentials in a MongoDB database. The application utilizes the mongoose-encryption plugin to securely encrypt user passwords before storage, ensuring that sensitive data is protected at rest.

⚙️ Features
✅ User registration with email and password

✅ Secure password encryption using mongoose-encryption

✅ User login with automatic password decryption and verification

✅ Views rendered using EJS templating

✅ Organized folder structure for frontend and backend integration

✅ Basic error handling and logging

🛠️ Tech Stack
Technology	Description
Node.js	Server-side JavaScript runtime
Express.js	Web framework for Node.js
MongoDB	NoSQL database for storing user data
Mongoose	ODM for MongoDB integration
EJS	Embedded JavaScript templates for frontend
mongoose-encryption	Plugin for field-level encryption in Mongoose

🧪 How It Works
Users register with an email and password.

The password is encrypted using AES encryption and stored in MongoDB.

During login, the encrypted password is automatically decrypted and compared to user input.

Upon successful authentication, the user is taken to a protected "Secrets" page.

📁 Folder Structure (Simplified)
bash
Copy
Edit
/project-root
│
├── views/               # EJS templates (home.ejs, login.ejs, register.ejs, secrets.ejs)
├── public/              # Static assets (CSS, images)
├── app.js               # Main application file
├── package.json         # Project metadata and dependencies
🚀 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/secrets-auth-app.git
cd secrets-auth-app
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB locally (ensure MongoDB is running):

bash
Copy
Edit
mongod
Run the application:

bash
Copy
Edit
node app.js
Open your browser and go to:

arduino
Copy
Edit
http://localhost:8000
🔒 Note on Security
This project uses mongoose-encryption for reversible encryption of passwords. For production-grade applications, it is strongly recommended to use bcrypt hashing (irreversible) for enhanced security.

📌 Future Improvements
Switch to bcrypt for password hashing

Add session-based authentication using express-session

Implement user logout and secret submission features

Add client-side input validation

👤 Author
Dev S
GitHub: voidbridger
