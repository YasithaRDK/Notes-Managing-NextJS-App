# QuickNoteZ

QuickNoteZ is a note management application designed to help users organize their thoughts, ideas, and tasks conveniently. With QuickNoteZ, users can create an account, log in securely, and perform various operations such as creating, reading, updating, and deleting notes. Built with Next.js, MongoDB, and Tailwind CSS, QuickNoteZ offers a seamless and secure note-taking experience.

## Features

- User Authentication: Users can create an account and securely log in to access their notes.
- Note Operations: Users can create, read, update, and delete notes effortlessly.
- Responsive Design: The application is designed to work seamlessly across different devices and screen sizes.

## Technologies

- Next.js: Next.js is a React framework that enables server-side rendering and provides a great developer experience.
- MongoDB: MongoDB is a NoSQL database used for storing user data and notes securely.
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework used for styling the application with ease.
  
### Getting Started

To get started with QuickNoteZ locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/YasithaRDK/Unwire-Test-NextJs-Note-App.git
   ```
   
3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

- Create a .env file in the root directory.
- Define the following variables:
  
  ```.env
  MONGODB_URI=your_mongodb_uri
  NEXTAUTH_SECRET=your secret key
  ```

4. Run the development server:

   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser to view the application.
