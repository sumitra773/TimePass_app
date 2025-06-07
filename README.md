# Multistep Form

A responsive, modern multi-step form built with **React**, **Vite**, and **Tailwind CSS**. The form guides users through several steps to collect personal information, select a plan, choose add-ons, review a summary, and confirm their choices.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Style Guide](#style-guide)
- [License](#license)

---

## Demo

https://drive.google.com/file/d/1aqQd_0696mQnt2uCPJWHnYEqM3PFxT4O/view?usp=drive_link

---

## Features

- **Multi-step navigation:** Users are guided through a series of steps with clear indicators.
- **Form validation:** Each step validates user input before proceeding.
- **Plan selection:** Choose between monthly or yearly billing, with dynamic pricing.
- **Add-ons:** Select additional services to enhance the main plan.
- **Summary and confirmation:** Review all selections before final confirmation.
- **Responsive design:** Optimized for both mobile and desktop screens.
- **Modern UI:** Built with Tailwind CSS and a custom color palette.

---

## Screenshots

public\assets\screenshot\Screenshot 2025-06-07 135438.png
public\assets\screenshot\Screenshot 2025-06-07 135502.png
public\assets\screenshot\Screenshot 2025-06-07 135518.png
public\assets\screenshot\Screenshot 2025-06-07 135531.png
public\assets\screenshot\Screenshot 2025-06-07 135548.png
---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/multistep-form.git
   cd multistep-form
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:5173/multistep-form](http://localhost:5173/multistep-form) (or the URL shown in your terminal).

---

## Project Structure

multistep-form/
├── public/
│   └── main-logo-transparent.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   ├── Step4.jsx
│   │   ├── StepIndicators.jsx
│   │   └── ThankYouPage.jsx
│   ├── data/
│   │   ├── planData.json
│   │   └── addonData.json
│   ├── pages/
│   │   └── LoginPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

---

## Available Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build.
- `npm run lint` — Lint the codebase with ESLint.
- `npm run deploy` — Deploy to GitHub Pages (requires setup).

---

## Customization

- **Plans and Add-ons:** Edit `src/data/planData.json` and `src/data/addonData.json` to change available plans and add-ons.
- **Styling:** Modify `tailwind.config.js` for custom colors, fonts, and breakpoints.
- **Branding:** Replace `public/main-logo-transparent.svg` with your own logo.

---

## Style Guide

- **Colors:** Custom palette defined in `tailwind.config.js` and `style-guide.md`.
- **Typography:** Uses Ubuntu font family.
- **Design widths:** Mobile (375px), Desktop (1440px).

See `style-guide.md` for more details.

---

## License

MIT (or specify your license here)