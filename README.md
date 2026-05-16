# Expense Tracker Dashboard

A full-stack MERN Expense Tracker Dashboard with analytics, transaction management, and an interactive modern UI.

---

## Live Demo

### Frontend (Vercel)
https://expense-tracker-dashboard.vercel.app

### Backend API (Render)
https://expense-tracker-backend-3uka.onrender.com

---

## Features

- Add Income & Expense Transactions
- Delete Transactions
- Real-Time Balance Calculation
- Expense Analytics Pie Chart
- Responsive Dashboard UI
- MongoDB Atlas Integration
- REST API Integration
- Interactive Financial Overview
- Professional UI with Tailwind CSS

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Chart.js
- React Hooks

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```text
expense-tracker-dashboard/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Parik3008/expense-tracker-dashboard.git
cd expense-tracker-dashboard
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Screenshots

### Dashboard UI
(Add Screenshot Here)

### Expense Analytics Pie Chart
(Add Screenshot Here)

### Add Transaction Form
(Add Screenshot Here)

---

## API Endpoints

### Get All Transactions

```http
GET /transactions
```

### Add Transaction

```http
POST /transactions
```

### Delete Transaction

```http
DELETE /transactions/:id
```

---

## Future Improvements

- Authentication & Authorization
- Dark Mode
- Edit Transactions
- Monthly Expense Reports
- Category Filtering
- Export Reports as PDF
- AI-Based Expense Insights

---

## Author

### Parik Batra

GitHub:
https://github.com/Parik3008

---

## License

This project is open-source and available under the MIT License.
