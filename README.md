# 🏢 JobHunter - Job Portal Web App

JobHunter is a modern job portal web application built with **React, Tailwind CSS, Node.js, Express, and ShadCN UI**. It helps job seekers find jobs and employers post job openings with an intuitive UI.

## 🚀 Features
✅ Job listing & filtering  
✅ User authentication (Login/Signup)  
✅ Apply for jobs easily  
✅ Employer dashboard for job postings  
✅ Responsive UI with **Tailwind CSS & ShadCN UI**  
✅ Secure backend with **Node.js & Express**  

## 🎥 Demo Video  
https://github.com/user-attachments/assets/f29afe06-1cec-4697-8c73-003eb40ec7e4  

> If the video does not load, click [here](https://github.com/user-attachments/assets/f29afe06-1cec-4697-8c73-003eb40ec7e4) to watch it.  

https://jobhunter-6uxp.onrender.com/

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, ShadCN UI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  

## 📥 Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```sh
git clone https://github.com/vishalvirdi/jobhunter.git

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install


PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development


# Start the backend
cd backend
npm start

# Start the frontend
cd frontend
npm run dev

#floder structure
📁 Project Root
├── 📁 frontend
│   ├── 📁 public
│   │   ├── 📄 index.html
│   │   ├── 📁 assets
│   │   │   ├── 📁 images
│   │   │   └── 📁 icons
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── 📁 common
│   │   │   └── 📁 features
│   │   ├── 📁 pages
│   │   ├── 📁 services
│   │   ├── 📁 hooks
│   │   ├── 📁 utils
│   │   ├── 📁 styles
│   │   ├── 📁 store (for state management)
│   │   ├── 📄 App.js
│   │   └── 📄 index.js
│   ├── 📄 package.json
│   └── 📄 README.md
│
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 config
│   │   ├── 📁 controllers
│   │   ├── 📁 middleware
│   │   ├── 📁 models
│   │   ├── 📁 routes
│   │   ├── 📁 services
│   │   ├── 📁 utils
│   │   └── 📄 app.js
│   ├── 📁 tests
│   ├── 📄 package.json
│   └── 📄 README.md
│
├── 📄 .gitignore
└── 📄 README.md

