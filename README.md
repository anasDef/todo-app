# 📝 Todo App

A modern, responsive task management application built with React and Vite. Organize your tasks with ease using intuitive filtering, multiple view options, and theme customization.

**[🚀 Live Demo](https://anas-todo-app-v2.netlify.app/)**

---

## ✨ Features

- ✅ **Task Management** - Create, complete, and delete tasks effortlessly
- 🎯 **Priority Levels** - Mark tasks as `Important!`, `Normal`, or `Not Important`
- 🔍 **Smart Filtering** - View all tasks, active tasks, or completed tasks
- 🌓 **Dark/Light Mode** - Switch between themes for comfortable viewing
- 📱 **Dual View Options** - Toggle between List and Grid layouts
- ⚡ **Fast & Responsive** - Built with React and Vite for optimal performance
- 📅 **Date Support** - Powered by date-fns for reliable date handling

---

## 🎨 Design

This application follows a clean, minimalist design system with:

- **Typography**: Josefin Sans for headings, Lexend for body text
- **Color Palette**: Carefully crafted light and dark modes for optimal UX
- **Layout**: 8pt grid system for consistent spacing and alignment

For detailed design specifications, see [DESIGN.md](./DESIGN.md)

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Icons**: React Icons
- **Date Library**: date-fns
- **Linting**: ESLint
- **Styling**: CSS (custom theme support)

---


## 📋 How to Use

### Creating a Task
1. Navigate to the **Task Input** section at the top of the application
2. Enter your task name in the **"Task Name"** field
3. (Optional) Add a description in the **"Description"** field
4. Select a **priority level**: 
   - 🔴 **Important!** - For urgent/critical tasks
   - 🟡 **Normal** - For regular tasks
   - 🟢 **Not Important** - For low-priority tasks
5. Click the **"Add Task"** button to create your task

### Managing Tasks
- **Mark as Complete**: Click the checkbox next to a task to mark it as done
- **Delete Task**: Click the delete/trash icon to remove a task
- **View Task Details**: Click on a task to see its full description and priority level

### Filtering Tasks
Use the **filter buttons** in the top control bar:
- **All** - Display all tasks regardless of status
- **Active** - Show only incomplete tasks
- **Completed** - Show only finished tasks

### Changing the Theme
- Click the **Theme Toggle** button in the top control bar to switch between:
  - ☀️ **Light Mode** - Bright, clean interface
  - 🌙 **Dark Mode** - Easy on the eyes for extended use

### Changing the View Layout
- Click the **View Switcher** button to toggle between:
  - 📋 **List View** - Traditional task list format
  - 🎲 **Grid View** - Card-based grid layout

---

### 📂 Directory Breakdown

#### **Root Level**
- **`DESIGN.md`** - Complete design specification including colors, typography, spacing grid, and UI structure

#### **`my-app/` - React Application**

##### **Configuration Files**
- **`package.json`** - Project metadata, dependencies, and npm scripts
- **`eslint.config.js`** - Code quality and linting rules
- **`vite.config.js`** - Build configuration for fast development and optimized production builds
- **`index.html`** - HTML template and app mount point

##### **`src/` - Source Code**

###### **Root Source Files**
- **`main.jsx`** - React DOM render and app initialization
- **`App.jsx`** - Root component with React Router setup
- **`App.css`** - Global application styles
- **`index.css`** - CSS variables, typography, color system, and reset styles

###### **`components/` - Reusable Components**
All components follow BEM (Block Element Modifier) CSS naming convention.

| Component | Purpose |
|-----------|---------|
| `Header` | Navigation header with theme toggle and view switcher |
| `AddTask` | Modal form for creating new tasks with priority levels |
| `Stats` | Dashboard cards showing task statistics |
| `UserName` | Initial modal to collect user's name |
| `TaskList` | Container for displaying tasks in list or grid view |
| `TaskCard` | Individual task item with complete/delete/edit actions |

###### **`utils/` - Utility Functions**
- **`utils.js`** - Helper functions like `getFormattedDate()` for date formatting

#### **Dependencies & Build**
- **`public/`** - Static assets served directly
- **`node_modules/`** - NPM dependencies (React, Vite, date-fns, react-icons, react-router)
- **`.vite/`** - Vite build cache and optimized dependencies

### 🎯 Key Architectural Notes

1. **Component-Based Architecture** - Modular React components for reusability
2. **CSS Variables System** - Centralized design tokens in `index.css` for theme switching
3. **BEM Methodology** - Consistent CSS naming for maintainability
5. **Dark Mode Support** - Full theme switching capability with CSS custom properties
6. **ESLint Integration** - Automated code quality checks during development

---

## Author
**Frontend Mentor Profile:** [@anasDef](https://www.frontendmentor.io/profile/anasDef)
