# 🔐 Firebase Auth + Google Sign-In App (Vite + React)

A modern authentication system built with **React**, **Firebase**, and **Google OAuth**. This project demonstrates how to create a secure, scalable auth system with **Email/Password** login, **Google Sign-In**, **Firestore integration**, protected routes, and **dynamic toast notifications** using React Toastify.

> 🚀 Live Demo: [firebase-auth-google-react.vercel.app](https://firebase-auth-google-react.vercel.app/)

---

## 📸 UI Components

| Login Page | Google Sign-In | Dashboard |
|------------|----------------|-----------|
| ![image](https://github.com/user-attachments/assets/c746c0de-7e33-49fd-9152-1eb06d33bbe7)  | ![image](https://github.com/user-attachments/assets/2a364a6f-3b7f-4fcb-bb35-5265cb345595)  | ![image](https://github.com/user-attachments/assets/82cb4cb9-925a-4c81-b82a-599c985e3d13) |


---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| ✅ Email/Password Signup | Create account with secure credentials |
| 🔐 Secure Login | Firebase Authentication handles secure login |
| 🔓 Logout Functionality | One-click logout with session clearing |
| 🔁 Google Sign-In Integration | OAuth-based Google login |
| 🔄 Firestore Integration | Real-time DB for storing user data |
| 🛡️ Protected Routes | `react-router-dom` guards private pages |
| 🧱 Modular Structure | Clean folder organization for scalability |
| 🔔 Toast Notifications | Real-time user feedback using React Toastify |

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 🔥 Firebase (Auth + Firestore)
- 🌍 Google OAuth
- 🧭 React Router DOM
- 📦 React Toastify
- 💅 Tailwind CSS *(optional for styling)*

---

## 🧠 Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| Firebase not initializing | Ensured `firebaseConfig` object was correct and imported `initializeApp()` properly |
| Route Protection | Used `Navigate` and conditional rendering in protected route component |
| Google sign-in popup blocked | Enabled OAuth in Firebase Console, set correct redirect URI |
| Toasts not appearing | Imported `ToastContainer` globally, used `toast.success/error()` correctly |
| Deployment issues | Fixed base path in `vite.config.js`, ensured `homepage` field set for GitHub Pages |

---

## 🧪 How to Run

```bash
git clone https://github.com/your-username/firebase-auth-google-app-react.git
cd firebase-auth-google-app-react
npm install
npm run dev
```

## Thank You 💙

### Thank you for checking out this project! 
