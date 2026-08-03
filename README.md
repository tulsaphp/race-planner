# 🏊 Triathlon Planner

A modern web application for planning triathlon races, tracking workouts, and viewing pacing information.

Built with **React**, **TypeScript**, **Vite**, **Vitest**, and **Docker**.

https://tulsaphp.github.io/race-planner/
---

## 🚀 Features

- 🏁 Add and manage triathlon races
- 🏊 Track swimming, cycling, and running workouts
- 📊 Automatic pacing calculations
- 💾 Local Storage persistence
- 🗑️ Delete races and workouts
- ✅ Unit tests with Vitest and React Testing Library
- 🐳 Docker support for production deployment

---

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Vitest
- React Testing Library
- Local Storage API
- Docker
- Nginx

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── RaceForm.tsx
│   ├── WorkoutForm.tsx
│   ├── PacingStrip.tsx
├── App.tsx
├── storage.ts
├── types.ts
└── main.tsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/tulsaphp/race-planner.git
```

Go to the project folder:

```bash
cd race-planner
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Application

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🧪 Run Tests

```bash
npm test
```

---

## 🏗️ Build Production Version

```bash
npm run build
```

---

## 🐳 Docker

Build the Docker image:

```bash
docker build -t race-planner .
```

Run the container:

```bash
docker run -d -p 8080:80 race-planner
```

Open:

```
http://localhost:8080
```

---

## 📸 Screenshots

Add screenshots here.

Example:

```

```<img width="1080" height="2340" alt="Screenshot_20260803_085101_Chrome" src="https://github.com/user-attachments/assets/3c75ee05-a933-467c-aa89-cac8d6e6c80c" />


---

## 🎯 Future Improvements

- Edit existing races
- Edit workouts
- Search and filter
- Charts and analytics
- User authentication
- Cloud database
- Responsive mobile design

---

## 👩‍💻 Author

**Tulsa gangdev**

GitHub:
https://github.com/tulsaphp 

---

## 📄 License

This project is licensed under the MIT License.
