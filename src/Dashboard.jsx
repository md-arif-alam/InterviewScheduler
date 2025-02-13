import { useContext, useState } from "react";

import { InterviewContext } from "./App";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer, Views as CalendarViews } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);


const Dashboard = () => {
  const useInterviewContext = () => useContext(InterviewContext);
  const { interviews, deleteInterview, setInterviews, sendMockEmail } = useInterviewContext();
  const [filter, setFilter] = useState({ date: "", interviewer: "", candidate: "" });

  const filteredInterviews = interviews.filter((interview) => {
    return (
      (!filter.date || interview.date === filter.date) &&
      (!filter.interviewer || interview.interviewer.toLowerCase().includes(filter.interviewer.toLowerCase())) &&
      (!filter.candidate || interview.candidate.toLowerCase().includes(filter.candidate.toLowerCase()))
    );
  });

  // const events = filteredInterviews.map((interview, index) => ({
  //   id: index,
  //   title: `${interview.candidate} - ${interview.interviewer}`,
  //   start: new Date(`${interview.date}T${interview.timeSlot}`),
  //   end: new Date(`${interview.date}T${interview.timeSlot}`),
  // }));

  const events = filteredInterviews.map((interview, index) => ({
    id: index,
    title: `${interview.candidate} - ${interview.interviewer}`,
    description: `Type: ${interview.interviewType}, Time: ${interview.timeSlot}`,
    start: moment(`${interview.date} ${interview.timeSlot}`, "YYYY-MM-DD HH:mm").toDate(),
    end: moment(`${interview.date} ${interview.timeSlot}`, "YYYY-MM-DD HH:mm").add(1, "hours").toDate(), // Assuming 1-hour duration
  }));

  // const events = [
  //   {
  //     start: moment().toDate(),
  //     end: moment()
  //       .add(1, "days")
  //       .toDate(),
  //     title: "Some title"
  //   }];

  const onEventDrop = ({ event, start }) => {
    const updatedInterviews = interviews.map((interview, index) => {
      if (index === event.id) {
        return { ...interview, date: moment(start).format("YYYY-MM-DD"), timeSlot: moment(start).format("HH:mm") };
      }

      return interview;
    });
    setInterviews(updatedInterviews);
    localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
    sendMockEmail("Interview Updated", `The interview for ${updatedInterviews[0].candidate} has been updated to ${updatedInterviews[0].dateTimeIST}.`);
  };




  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-gray-500">Interview Dashboard</h1>
      <div className="mb-4 flex gap-4">
        <input type="date" className="w-full p-2 border rounded shadow-2xl" value={filter.date} onChange={(e) => setFilter({ ...filter, date: e.target.value })} />
        <input type="text" className="w-full p-2 border rounded shadow-2xl" placeholder="Filter by interviewer" value={filter.interviewer} onChange={(e) => setFilter({ ...filter, interviewer: e.target.value })} />
        <input type="text" className="w-full p-2 border rounded shadow-2xl" placeholder="Filter by candidate" value={filter.candidate} onChange={(e) => setFilter({ ...filter, candidate: e.target.value })} />
      </div>
      <Link to="/schedule" className="bg-red-700 text-gray-200 px-4 py-2 rounded-lg shadow-2xl mb-4 inline-block">Schedule Interview</Link>
      <div className="h-96 mb-6 shadow-2xl">
        <DragAndDropCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          draggableAccessor={() => true}
          onEventDrop={onEventDrop}
          views={[CalendarViews.MONTH, CalendarViews.WEEK, CalendarViews.DAY]}
          style={{ height: "100%" }} />
      </div>

      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                Candidate
              </th>
              <th scope="col" className="px-6 py-3">
                Interviewer
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time Slot
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>

            </tr>
          </thead>
          <tbody>
            {filteredInterviews.map((interview, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {interview.candidate}
                </th>
                <th className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {interview.interviewer}
                </th>
                <td className="px-6 py-4">
                  {interview.date}
                </td>
                <td className="px-6 py-4">
                  {interview.timeSlot}
                </td>
                <td className="px-6 py-4">
                  {interview.interviewType}
                </td>
                <td className="flex items-center px-6 py-4">
                  <Link to={`/edit/${index}`} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</Link>
                  <button onClick={() => deleteInterview(index)} className="bg-red-700 text-gray-200 px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default Dashboard;
