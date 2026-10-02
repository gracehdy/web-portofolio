# Personal Portfolio Website 

A modern, fast, and fully responsive personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Deployed seamlessly on **Vercel**.

**Live Demo:** [https://www.grace-web-portofolio.vercel.app](https://www.grace-web-portofolio.vercel.app)

---

## Features

- **Dynamic Dark / Light Mode**: Smooth theme toggling with persistent preferences using `localStorage`.
- **Fully Responsive Design**: Optimized for all screen sizes, from mobile devices to desktop displays.
- **Framer Motion Animations**: Interactive 3D tilt hero blob, spotlight card effects, and fanned photo stack galleries.
- **Scroll-Synced Navigation**: Active section detection on navbar with smooth scrolling.
- **Interactive Experience Timeline**: Custom dynamic timeline fill with image stack support.
- **Modular Architecture**: Clean, reusable component design for easy maintenance.

---

## Tech Stack

- **Frontend Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Project Structure

```text
src/
├── component/
│   ├── Navbar.jsx       # Fixed header with theme toggle & scroll spy
│   ├── Hero.jsx         # Intro section with interactive 3D blob
│   ├── About.jsx        # Personal overview & key academic details
│   ├── Skills.jsx       # Categorized interactive tech skills chips
│   ├── Projects.jsx     # Spotlight project cards & paper highlights
│   ├── Experience.jsx   # Interactive fanned-photo experience timeline
│   ├── Contact.jsx      # Direct mailto contact section
│   └── Icons.jsx        # Custom SVG icon components
├── Portfolio.jsx        # Main portfolio layout container
├── main.jsx             # Entry point
└── index.css            # Global Tailwind CSS styles

```

---

## Getting Started Locally

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/gracehdy/web-portofolio.git](https://github.com/gracehdy/web-portofolio.git)
cd web-portofolio

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open in browser:**
Navigate to `http://localhost:5173` to view the website.

---

## Build & Deployment

To build the project for production:

```bash
npm run build

```

The output will be generated in the `dist/` directory, ready to be deployed to **Vercel** or any static hosting service.

---
