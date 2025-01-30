##### Overview
The **Admin Panel** in the Client Feedback Management Portal provides a structured interface for administrators to manage and analyze client feedback effectively. Admins have access to a dashboard where they can view all submitted feedback, filter by categories, and respond to client concerns. Admins can also ### Generate reports,monitor real-time updates, and ensure smooth feedback processing for continuous business improvement.
## Screenshots
### Login Page [Admin id=> utkarshanikam9@gmail.com, pass 12345]
![AdminLogin Page](Screenshots/Admn_Login.png)
![Siginin Page](Screenshots/Signup.png)
![Invalid Login Page](Screenshots/invalid.png)

### Admin Panel
![Admin Panel](Screenshots/DASHBOARD.png)
![Admin Panel](Screenshots/AdminDashboard.png)
![Admin Panel](Screenshots/AllReviews.png)

## Features
- **Admin Panel**: Admins can review, analyze, and respond to feedback.
- **Secure Authentication**: Uses JWT (JSON Web Tokens) for secure login.
- **Database Integration**: Stores user and feedback data securely using MongoDB.
- **Real-time Updates**: Provides live updates on submitted feedback.
- **Responsive Design**: Ensures accessibility across all devices.

## Unified Login System
The system implements a **unified login mechanism**, allowing both **clients and administrators** to log in using a single authentication process. Based on their role (client or admin), users are redirected to their respective dashboards:
- **Clients**: Can submit and track feedback.
- **Admins**: Can view all feedback, analyze trends, and take necessary actions.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Express.js with Node.js
- **Database**: MongoDB
- **Authentication**: JWT for token-based authentication
- **Styling**: Tailwind CSS

## Folder Structure
```
Client-Feedback-Management/
│── client/   # Frontend (React.js)
│── admin/    # Admin panel
│── server/   # Backend (Express.js, MongoDB)
│── README.md # Documentation
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd Client-Feedback-Management
   ```

2. Install dependencies for client, admin, and server:
   ```sh
   cd client
   npm install
   cd ../admin
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables in a `.env` file inside the `server/` folder:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Start the server:
   ```sh
   cd server
   npm start
   ```

5. Start the frontend (client and admin):
   ```sh
   cd client
   npm start
   cd ../admin
   npm start
   ```

## API Endpoints
  | Method | Endpoint              | Description                   |
  |--------|-----------------------|-------------------------------|
  | POST   | `/api/auth/`loginUser | Login for admins               |
  | POST   | `/api/auth/createUser`| Register a new client        |
  | GET    | `/api/details`        | Retrieve all feedback (admin) |
  | POST   | `/api/submitForm`     | Submit feedback (client)      |


## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
MIT License

## Contact
For any inquiries, contact [your email] or visit [your website].
