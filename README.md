# Interview-Schedulizer

## Project Overview
The Interview-Schedulizer is a React-based web application designed to help HR professionals and recruiters efficiently schedule, manage, and track interviews. The application supports time zone conversions, drag-and-drop rescheduling, and provides notifications for scheduled, updated, or deleted interviews.

## Technologies Used
- **React** (Functional Components & Hooks) - Frontend UI framework.
- **React Router** - For navigation between pages.
- **React Big Calendar** - To display and manage interviews on a calendar.
- **Drag and Drop Support** - For easy rescheduling of interviews.
- **Tailwind CSS** - For responsive and modern styling.
- **Context API** - For global state management.
- **Local Storage** - To persist data locally.
- **Moment.js & Time Zones** - For handling and converting time zones.
- **React Toastify** - To display success and error messages.
- **Mock Email API** - To simulate email notifications for interview scheduling events.

## Features
1. **Interview Scheduling**
   - Select candidate, interviewer, date, and time slot.
   - Choose interview type (Technical, HR, Behavioral).
   - Validate conflicts to prevent overlapping interviews.
   
2. **Dashboard**
   - Displays scheduled interviews in a calendar view.
   - Allows filtering by date, interviewer, or candidate.
   
3. **Drag and Drop Rescheduling**
   - Move interviews easily to new time slots.
   - Receive notifications when an interview is rescheduled.
   
4. **Interview Management**
   - Add and manage interviewers with position and role.
   - View a table of interviewers and delete them when necessary.
   - Selected interviewers appear in the scheduling form.

5. **Time Zone Handling**
   - Interviews are scheduled in IST (Indian Standard Time).
   - Users from other time zones can schedule interviews, but times are displayed in IST.
   
6. **Mock Email/Notification API**
   - Simulates notifications when interviews are scheduled, updated, or deleted.
   - Logs the notifications in the console.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/interview-scheduler.git
   cd interview-scheduler
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```
   The app will be available at `http://localhost:3000/`

## Design Decisions
- **React with Context API:** Chosen for efficient state management and better scalability.
- **React Big Calendar:** Used for intuitive scheduling and easy integration of a drag-and-drop feature.
- **Tailwind CSS:** Enables fast and responsive styling without additional dependencies.
- **Local Storage:** Selected for simplicity in persisting interview data without requiring a backend.
- **Moment.js & Time Zones:** Used for seamless time zone handling and display.
- **Mock API for Notifications:** Provides realistic notifications without actual email integration.

## Assumptions & Challenges Faced
- **Assumption:** Users primarily schedule interviews within IST, but they might be from other time zones.
- **Challenge:** Handling time zone conversions while ensuring correctness across different user locations.
- **Challenge:** Managing conflicts when the same candidate or interviewer has overlapping interview slots.
- **Challenge:** Implementing drag-and-drop functionality while maintaining validation and notifications.

## Future Enhancements
- Integration with a real email API for notifications.
- User authentication for secure access.
- Integration with a backend database for persistent storage.



