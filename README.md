# 🕒 Flow Zone

<p align="center">
  <img src="./public/img/logo-optimized.svg" alt="Flow Zone Logo" width="120" />
</p>

<div align="center">
  <h3>
    A modern, elegant Pomodoro timer application designed to boost your productivity by implementing the time-tested Pomodoro Technique. Flow Zone helps you maintain focus, manage tasks, and balance work with proper rest intervals.
  </h3>
</div>

## ✨ Overview

Flow Zone is a React-based Pomodoro timer application inspired by [pomofocus.io](https://pomofocus.io). It offers a beautiful, minimalist interface with a sophisticated design, smooth animations, and practical features to enhance your productivity workflow.

The application guides users through focused work sessions (typically 25 minutes) followed by short breaks (5 minutes) and longer breaks (10 minutes) after completing a set of work intervals, helping to maintain high concentration and prevent burnout.

## 🚀 Features

- **Three Timer Modes**:

  - Focus Mode allows you to concentrate on work for 25 minutes.
  - Short Break provides a 5-minute rest between focus sessions.
  - Long Break offers a 10-minute extended rest after completing multiple focus sessions.

- **Visual Elements**:

  - The app features a circular progress indicator with elegant animations to track your time.
  - The responsive, modern UI with dark theme reduces eye strain during extended use.
  - Visual and audio notifications alert you when a timer session ends.

- **Task Management**:

  - You can easily add, edit, and delete tasks to organize your work.
  - The app helps you track task completion status throughout your sessions.
  - Task management features allow you to organize your workflow efficiently.

- **Customization**:

  - You can adjust timer durations to match your personal productivity preferences.
  - Sound notifications can be toggled on or off based on your environment.
  - Various settings allow you to personalize your productivity experience.

- **Technical Features**:
  - The fully responsive design ensures the app works well on all devices.
  - Smooth animations powered by Framer Motion create a pleasant user experience.
  - Modern state management with React Context provides efficient data handling.
  - The app is styled with Styled Components for maintainable and dynamic CSS.

## 🛠️ Built With

<div align="center">
  <img src="./public/html.png" alt="HTML" width="50" title="HTML">
  <img src="./public/css.png" alt="CSS" width="50" title="CSS">
  <img src="./public/js.png" alt="JavaScript" width="50" title="JavaScript">
  <img src="./public/styled.png" alt="Styled Components" width="50" title="Styled Components">
  <img src="./public/react.png" alt="React" width="50" title="React">
  <img src="./public/framer.png" alt="Framer Motion" width="50" title="Framer Motion">
  <img src="./public/git.png" alt="Git" width="50" title="Git">
  <img src="./public/github.png" alt="Github" width="50" title="Github">
  <img src="./public/npm.png" alt="NPM" width="50" title="NPM">
  <img src="./public/vite.png" alt="Vite" width="50" title="Vite">
  <img src="./public/vscode.png" alt="Visual Studio Code" width="50" title="Visual Studio Code">
  <img src="./public/vercel.png" alt="Vercel" width="50" title="Vercel">

| Technology        | Purpose                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| React             | Core library for building the user interface with reusable components and efficient DOM updates |
| Styled Components | CSS-in-JS library that allows for dynamic styling based on props and theme variables            |
| Framer Motion     | Animation library providing smooth transitions and interactive UI elements                      |
| JavaScript (ES6+) | Modern JavaScript syntax for cleaner, more maintainable code                                    |
| Vite              | Fast build tool and development server enabling quick iteration and hot module replacement      |
| React Context API | State management solution for sharing data across components without prop drilling              |
| Formik            | Form handling library that simplifies validation, error messages, and form submission           |
| React Icons       | Comprehensive icon library providing UI elements like the settings cog button                   |
| Express           | Lightweight server for serving the production build of the application                          |
| NPM               | Package manager for managing project dependencies                                               |
| Vercel            | Deployment platform for hosting the application with CI/CD integration                          |
| Git/GitHub        | Version control system and hosting service for collaborative development                        |

</div>

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 16.x or higher recommended for optimal performance and compatibility
- **npm**: Version 8.x or higher (comes with Node.js installation)
- **Git**: Required for version control and cloning the repository
- **Modern web browser**: Chrome, Firefox, or Edge for best experience and development tools
- **Code editor**: Visual Studio Code recommended with these extensions:
  - ESLint
  - Prettier
  - Styled Components syntax highlighting
  - React Developer Tools

Additionally, basic knowledge of the following is helpful:

- React fundamentals and hooks
- JavaScript ES6+ features
- CSS and styling concepts
- Terminal/command line basics

## 🔧 Installation

1. Clone the repository

   ```sh
   git clone https://github.com/akosikhada/flow-zone.git
   ```

2. Navigate to the project directory

   ```sh
   cd flow-zone
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the development server

   ```sh
   npm run dev
   ```

5. Build for production

   ```sh
   npm run build
   ```

6. Run the production server
   ```sh
   npm start
   ```

## 💻 Usage

### Getting Started

1. **Choose a Timer Mode**: Start by selecting one of the three timer modes - Focus, Short Break, or Long Break.

2. **Start the Timer**: Click the start button to begin your timer. The circular progress indicator will show your remaining time.

3. **Add Tasks**: Use the task management section to add tasks for your work sessions.

4. **Customize Settings**: Click the gear icon to open settings and customize timer durations and sound preferences.

### The Pomodoro Technique

The Pomodoro Technique, created by Francesco Cirillo, is a time management method that uses a timer to break work into intervals (traditionally 25 minutes) separated by short breaks. Each interval is known as a "pomodoro," from the Italian word for tomato, after the tomato-shaped kitchen timer used by Cirillo as a university student.

#### The Process

1. **Plan**: Decide on the task to be done
2. **Focus**: Work for 25 minutes
3. **Break**: Take a short 5-minute break
4. **Repeat**: After 4 pomodoros, take a longer 15-30 minute break

This technique helps maintain focus, avoid burnout, and manage distractions while ensuring regular breaks for mental refreshment.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UI/UX inspired by [pomofocus.io](https://pomofocus.io)
- Special thanks to David Goggins for providing motivational voice for the alarm
- Built with React, Styled Components, and Framer Motion
