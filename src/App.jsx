// import { Link, Outlet } from "react-router-dom"
import React, { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import moment from "moment-timezone";
import NavbarDesk from "./NavbarDesk";
import Footer from "./Footer";

export const InterviewContext = createContext();

//

const sendMockEmail = (subject, message) => {
  toast.info(`Email Sent:\nSubject: ${subject}\nMessage: ${message}`);
};


const InterviewProvider = ({ children }) => {

  const [interviews, setInterviews] = useState(
    JSON.parse(localStorage.getItem("interviews")) || []
  );

  const addInterview = (newInterview) => {
    newInterview.dateTimeIST = convertToIST(newInterview.date, newInterview.timeSlot, newInterview.timeZone);
    if (isConflict(newInterview)) {
      toast.error("Conflict detected: The interviewer or candidate already has an interview at this time.");
      return;
    }
    const updatedInterviews = [...interviews, newInterview];
    setInterviews(updatedInterviews);
    localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
    toast.success("Interview scheduled successfully!");
    sendMockEmail("Interview Scheduled", `An interview has been scheduled for ${newInterview.candidate} with ${newInterview.interviewer} on ${newInterview.dateTimeIST}.`);
  };



  const updateInterview = (index, updatedInterview) => {
    updatedInterview.dateTimeIST = convertToIST(updatedInterview.date, updatedInterview.timeSlot, updatedInterview.timeZone);
    const filteredInterviews = interviews.filter((_, i) => i !== index);
    if (isConflict(updatedInterview, filteredInterviews)) {
      toast.error("Conflict detected: The interviewer or candidate already has an interview at this time.");
      return;
    }
    const updatedInterviews = interviews.map((interview, i) =>
      i === index ? updatedInterview : interview
    );
    setInterviews(updatedInterviews);
    localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
    toast.success("Interview updated successfully!");
    sendMockEmail("Interview Updated", `The interview for ${updatedInterview.candidate} has been updated to ${updatedInterview.dateTimeIST}.`);
  };


  const deleteInterview = (index) => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      const deletedInterview = interviews[index];
      const updatedInterviews = interviews.filter((_, i) => i !== index);
      setInterviews(updatedInterviews);
      localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
      toast.success("Interview deleted successfully!");
      sendMockEmail("Interview Cancelled", `The interview for ${deletedInterview.candidate} has been cancelled.`);
    }
  };



  const isConflict = (newInterview, existingInterviews = interviews) => {
    return existingInterviews.some(
      (interview) =>
        interview.date === newInterview.date &&
        interview.timeSlot === newInterview.timeSlot &&
        (interview.candidate === newInterview.candidate || interview.interviewer === newInterview.interviewer)
    );
  };

  const convertToIST = (date, time, timeZone) => {
    return moment.tz(`${date} ${time}`, "YYYY-MM-DD HH:mm", timeZone).tz("Asia/Kolkata").format();
  };


  return (
    <InterviewContext.Provider value={{ interviews, addInterview, updateInterview, deleteInterview, setInterviews, sendMockEmail }}>
      {children}
    </InterviewContext.Provider>
  );
};


function App() {
  return (
    <InterviewProvider>
      {/* <nav className="border-2">
        <Link to='/'>Dashboard</Link>
        <Link to='schedule'>Schedule</Link>
      </nav> */}
      <NavbarDesk />

      <Outlet />
      <Footer />
    </InterviewProvider>


  )
}

export default App