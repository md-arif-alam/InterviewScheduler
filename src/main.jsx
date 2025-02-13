
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import InterviewForm from "./InterviewForm";
import App from './App.jsx'
import './index.css'
import About from './AboutMe';
import InterviewManagement from './InterviewerMangement';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from './Dashboard.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="" element={<Dashboard />} />
        <Route path="schedule" element={<InterviewForm />} />
        <Route path='interviewerManagement' element={<InterviewManagement />} />
        <Route path='aboutMe' element={<About />} />
        <Route path="edit/:id" element={<InterviewForm isEdit />} />
      </Route>
    </Routes>
  </Router>
)






