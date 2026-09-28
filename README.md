# AediaX Internship Portal

InternPath is a React internship portal for students. It includes public marketing pages, authentication entry points, a protected dashboard, internship discovery, applications, profile management, selection progress, and account resources.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000` after configuring Firebase environment variables.

## Firebase setup

1. Create a Firebase project.
2. Enable Email/Password and Google providers under Authentication.
3. Create a Firestore database.
4. Copy `.env.example` to `.env.local`.
5. Fill in the Firebase web app values.
6. Restart the development server.

Firebase code is kept in `src/services/`, with authentication state exposed through `src/context/AuthContext.js`.

## Commands

```bash
npm test -- --watchAll=false
npm run build
```

## Main routes

- `/` - public landing page
- `/signin` - sign in
- `/signup` - account creation
- `/forgot-password` - password reset
- `/dashboard` - protected dashboard home
- `/internships` - searchable internship listing
- `/applications` - submitted applications
- `/profile` - student profile
- `/progress` - application selection timeline
- `/stipend` - stipend information
- `/certificate` - certificates
- `/notifications` - account notifications

## Firestore collections

- `users/{uid}` stores profile data.
- `applications/{applicationId}` stores applications with `userId`, `internshipId`, `status`, and `appliedAt`.

Before production deployment, configure Firestore security rules so users can only read and write their own profile and applications.
