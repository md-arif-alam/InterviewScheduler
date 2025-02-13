import { useContext, useState } from "react";
import { InterviewContext } from "./App";
import { ToastContainer } from "react-toastify";
const InterviewManagement = () => {
  const useInterviewContext = () => useContext(InterviewContext);
  const { interviewers, addInterviewer, removeInterviewer } = useInterviewContext();
  const [interviewer, setInterviewer] = useState({ name: "", position: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interviewer.name.trim() && interviewer.position && interviewer.role) {
      addInterviewer(interviewer);
      setInterviewer({ name: "", position: "", role: "" });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-200 shadow-2xl rounded-lg">
      <ToastContainer />
      <h2 className="text-xl font-bold mb-4">Manage Interviewers</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={interviewer.name} onChange={(e) => setInterviewer({ ...interviewer, name: e.target.value })} placeholder="Interviewer Name" className="w-full p-2 border rounded" required />
        <select value={interviewer.position} onChange={(e) => setInterviewer({ ...interviewer, position: e.target.value })} className="w-full p-2 border rounded" required>
          <option value="">Select Position</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="HR Manager">HR Manager</option>
          <option value="Project Manager">Project Manager</option>
        </select>
        <select value={interviewer.role} onChange={(e) => setInterviewer({ ...interviewer, role: e.target.value })} className="w-full p-2 border rounded" required>
          <option value="">Select Role</option>
          <option value="Technical">Technical</option>
          <option value="HR">HR</option>
          <option value="Behavioral">Behavioral</option>
        </select>
        <button type="submit" className="bg-red-700 text-gray-200 px-4 py-2 rounded-lg shadow-2xl mb-4 inline-block">Add Interviewer</button>
      </form>

      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {interviewers.map((inter, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {inter.name}
                </th>
                <th className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {inter.position}
                </th>
                <td className="px-6 py-4">
                  {inter.role}
                </td>
                <td className="flex items-center px-6 py-4">
                  <button onClick={() => removeInterviewer(index)} className="bg-red-700 text-gray-200 px-3 py-1 rounded">remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export { InterviewProvider, InterviewManagement };
export default InterviewManagement;