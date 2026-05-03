# Design Specification: Task Management MVP

## 1. Project Overview
This document outlines the design and functional requirements for a Task Management MVP. The application is focused on simplicity, usability, and a clean aesthetic.

## 2. Core Features
- **Task Creation:** Users can add new tasks with a title and description.
- **Task Status:** Ability to mark tasks as completed.
- **Task Deletion:** Remove tasks from the list.
- **Filtering:** Filter tasks by "All", "Active", or "Completed".
- **Theme Toggle:** Switch between Light and Dark modes.
- **Layout Toggle:** Switch task display between "List" and "Grid" views.
- **Prioritization:** Assign priority levels to tasks: `Important!`, `Normal`, or `Not Important`.

## 3. Design System
### Typography
- **Primary Font:** Josefin Sans (Used for headings and main UI elements).
- **Secondary Font:** Lexend (Used for task descriptions and sub-text).
- **Font Weights:** 400 (Regular), 700 (Bold).

### Color Palette
#### Light Mode
- Background/Main: `#F9F8F6`
- Secondary: `#EFE9E3`
- Accent 1: `#D9CFC7`
- Accent 2: `#C9B59C`

#### Dark Mode
- Background/Main: `#222831`
- Secondary: `#393E46`
- Accent 1: `#948979`
- Accent 2: `#DFD0B8`

### Spacing & Layout
- **Grid System:** 8pt Grid System for consistent spacing and alignment.

## 4. UI Structure
The application layout is divided into two primary sections:

### Section A: Task Input Component
This section is responsible for gathering task data and includes:
- **Task Name Input:** Text field for the task title.
- **Description Input:** Text field for additional details.
- **Priority Selector:** Options for "Important!", "Normal", and "Not Important".
- **Add Button:** Action button to create and add the task.

### Section B: Task Display Component
This section manages how tasks are presented and filtered:
- **Top Control Bar:**
    - Theme Toggle (Switch between Light and Dark modes).
    - View Switcher (Toggle between List and Grid views).
    - Filter Navigation (Filter by All, Active, or Complete).
- **Task Container:** The main area where task items are rendered according to the selected view and applied filters.