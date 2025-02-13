import { useNavigate, useParams } from "react-router-dom";
import { InterviewContext } from "./App";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment-timezone";
import img from './images/InterviewImage2.jpg'

const InterviewForm = ({ isEdit }) => {
  const useInterviewContext = () => useContext(InterviewContext);
  const { addInterview, updateInterview, interviews, interviewers } = useInterviewContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const existingInterview = isEdit ? interviews[parseInt(id, 10)] : {};

  const [formData, setFormData] = useState(
    isEdit
      ? existingInterview
      : { candidate: "", interviewer: "", date: "", timeSlot: "", interviewType: "", timeZone: "UTC" }
  );

  const availableTimeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const timeZones = moment.tz.names();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateInterview(parseInt(id, 10), formData);
    } else {
      addInterview(formData);
    }
    navigate("/");
  };

  return (
    <>



      <div className=" h-[50vh] lg:h-[70vh]  w-[100vw] bg-cover bg-center border-b-[1px] border-gray-500"
        style={{ backgroundImage: `url(${img})` }}>
        <div className=" bg-black opacity-50 shadow-2xl h-full">

        </div>
      </div>
      <div className="m-6 p-10 max-w-4xl mx-auto bg-slate-100 shadow-2xl rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-red-700">{isEdit ? "Edit" : "Schedule"} Interview</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="candidate"
            placeholder="Candidate Name"
            value={formData.candidate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {/* <input
            type="text"
            name="interviewer"
            placeholder="Interviewer Name"
            value={formData.interviewer}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          /> */}
          <select
            name="interviewer"
            placeholder="Interviewer Name"
            value={formData.interviewer}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Interviewer</option>
            {interviewers.map((intr, index) => (
              <option key={index} value={intr.name}>{intr.name} - {intr.position}</option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Time Slot</option>
            {availableTimeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          <select
            name="timeZone"
            value={formData.timeZone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
          <select
            name="interviewType"
            value={formData.interviewType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Interview Type</option>
            <option value="Technical">Technical</option>
            <option value="HR">HR</option>
            <option value="Behavioral">Behavioral</option>
          </select>
          <button type="submit" className="bg-red-700 text-gray-200 shadow-lg px-4 py-2 rounded-lg">
            {isEdit ? "Update" : "Schedule"} Interview
          </button>
        </form>
      </div>
    </>

  );
};

export default InterviewForm;