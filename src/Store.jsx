// import React, { useState, createContext } from "react";

// export const InterviewContext = createContext();

// //

// const InterviewProvider = ({ children }) => {
//   const [interviews, setInterviews] = useState(
//     JSON.parse(localStorage.getItem("interviews")) || []
//   );

//   const addInterview = (newInterview) => {
//     const updatedInterviews = [...interviews, newInterview];
//     setInterviews(updatedInterviews);
//     localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
//   };

//   const updateInterview = (index, updatedInterview) => {
//     const updatedInterviews = interviews.map((interview, i) =>
//       i === index ? updatedInterview : interview
//     );
//     setInterviews(updatedInterviews);
//     localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
//   };

//   return (
//     <InterviewContext.Provider value={{ interviews, addInterview, updateInterview }}>
//       {children}
//     </InterviewContext.Provider>
//   );
// };


/////////////////////////////  InterviewForm /////////////////////////////




// import { useNavigate, useParams } from "react-router-dom";
// import { InterviewContext } from "./App";
// import { useContext, useState } from "react";
// import "react-toastify/dist/ReactToastify.css";


// const InterviewForm = ({ isEdit = false }) => {
//   const useInterviewContext = () => useContext(InterviewContext);
//   const { interviews, addInterview, updateInterview } = useInterviewContext();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const editIndex = isEdit ? parseInt(id, 10) : null;
//   const existingInterview = isEdit ? interviews[editIndex] : {};

//   const [formData, setFormData] = useState({
//     candidate: existingInterview.candidate || "",
//     interviewer: existingInterview.interviewer || "",
//     date: existingInterview.date || "",
//     timeSlot: existingInterview.timeSlot || "",
//     interviewType: existingInterview.interviewType || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       updateInterview(editIndex, formData);
//     } else {
//       addInterview(formData);
//     }
//     navigate("/");
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h2 className="text-xl font-bold mb-4">{isEdit ? "Edit Interview" : "Schedule Interview"}</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="candidate" placeholder="Candidate Name" className="border p-2 w-full" value={formData.candidate} onChange={handleChange} required />
//         <input type="text" name="interviewer" placeholder="Interviewer Name" className="border p-2 w-full" value={formData.interviewer} onChange={handleChange} required />
//         <input type="date" name="date" className="border p-2 w-full" value={formData.date} onChange={handleChange} required />
//         <input type="time" name="timeSlot" className="border p-2 w-full" value={formData.timeSlot} onChange={handleChange} required />
//         <select name="interviewType" className="border p-2 w-full" value={formData.interviewType} onChange={handleChange} required>
//           <option value="">Select Interview Type</option>
//           <option value="Technical">Technical</option>
//           <option value="HR">HR</option>
//           <option value="Behavioral">Behavioral</option>
//         </select>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
//           {isEdit ? "Update Interview" : "Schedule Interview"}
//         </button>
//       </form>
//     </div>
//   );
// };


// export default InterviewForm;



//////////////////////////new with list /////////////////

// const InterviewForm = ({ isEdit }) => {
//   const useInterviewContext = () => useContext(InterviewContext);
//   const { addInterview, updateInterview, interviews } = useInterviewContext();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const existingInterview = isEdit ? interviews[parseInt(id, 10)] : {};

//   const [formData, setFormData] = useState(
//     isEdit
//       ? existingInterview
//       : { candidate: "", interviewer: "", date: "", timeSlot: "", interviewType: "" }
//   );

//   const availableTimeSlots = [
//     "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       updateInterview(parseInt(id, 10), formData);
//     } else {
//       addInterview(formData);
//     }
//     navigate("/");
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">{isEdit ? "Edit" : "Schedule"} Interview</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="candidate"
//           placeholder="Candidate Name"
//           value={formData.candidate}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="interviewer"
//           placeholder="Interviewer Name"
//           value={formData.interviewer}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <select
//           name="timeSlot"
//           value={formData.timeSlot}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Time Slot</option>
//           {availableTimeSlots.map((slot) => (
//             <option key={slot} value={slot}>{slot}</option>
//           ))}
//         </select>
//         <select
//           name="interviewType"
//           value={formData.interviewType}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Interview Type</option>
//           <option value="Technical">Technical</option>
//           <option value="HR">HR</option>
//           <option value="Behavioral">Behavioral</option>
//         </select>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           {isEdit ? "Update" : "Schedule"} Interview
//         </button>
//       </form>
//     </div>
//   );
// };
