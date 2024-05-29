# To-Do List App

This project is a simple and elegant To-Do List application built using HTML, CSS, and JavaScript. It leverages Firebase Firestore for persistent data storage, allowing users to manage their tasks efficiently.

## Project Description

The To-Do List App enables users to add, complete, and delete tasks seamlessly. It features a clean and responsive design, making it easy to use across different devices. The app also includes functionality for filtering tasks based on their status (all, active, completed) and clearing completed tasks. The integration with Firebase Firestore ensures that the data is stored in real-time, providing a smooth and reliable user experience.

## Features

- **Add New To-Do Items:** Users can add new tasks to their to-do list.
- **Mark Tasks as Completed:** Users can mark tasks as completed, which visually differentiates completed tasks from active ones.
- **Delete Tasks:** Users can delete tasks they no longer need.
- **Filter Tasks:** Users can filter tasks to show all tasks, only active tasks, or only completed tasks.
- **Clear Completed Tasks:** Users can easily clear all completed tasks from the list.
- **Persistent Storage:** Tasks are stored in Firebase Firestore, ensuring data persistence across sessions.

## Live Demo

You can view the live demo of this project on Netlify:
[To-Do List App](https://your-netlify-link.netlify.app)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Open the project in your preferred code editor.**

3. **Setup Firebase:**
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to your project and copy the Firebase SDK configuration.
    - Replace the Firebase configuration in the `firebase.js` file with your project's configuration.

4. **Open the `index.html` file in your web browser to see the application in action.**

## Firebase Configuration

Replace the placeholder configuration in the `firebase.js` file with your actual Firebase project configuration:

```javascript
// firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, please contact your-email@example.com.