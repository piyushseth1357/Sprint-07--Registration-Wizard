# Sprint 07 — The Registration Wizard

Welcome to my submission for **Sprint 07: The Registration Wizard**. This project implements a fully functional, enterprise-grade multi-step form focused on flawless user data acquisition, strictly adhering to all given requirements across Phases 1, 2, and 3.

## 🚀 Phases Completed

- ✅ **Phase 1: Base MVP & State Architecture (P0)**
  - Segmented the UI into 3 distinct steps (Personal Info, Account Details, Review).
  - Engineered complex state lifting to ensure payloads persist seamlessly during step transitions.
  - Final submission outputs a compiled payload object to the console.
- ✅ **Phase 2: Client-Side Validation & UX Polish (P1)**
  - Real-time client-side validation using regex and schema enforcement.
  - Custom UI/UX elements: Dynamic Progress Bar, Show/Hide Password toggle, Glassmorphism aesthetic.
  - Next button dynamically disables until the current step clears all validation hurdles.
- ✅ **Phase 3: Enterprise Form Architecture (P2)**
  - Fully deprecated standard `useState` form handling.
  - Migrated state architecture to the high-performance **React Hook Form (RHF)**.
  - Enforced strict type-safe data validation using **Zod** schema.

## Important Link

Live demo - https://sprint-07-registration-wizard.vercel.app/
github repo link - https://github.com/piyushseth1357/Sprint-07--Registration-Wizard.git


## 🛠️ Tech Stack & Tooling

To ensure optimal performance, maintainability, and enterprise readiness, the following tech stack was utilized:

- **Framework**: React 18 (TypeScript) with Vite
- **Form Architecture**: React Hook Form (Uncontrolled inputs for performance)
- **Schema Validation**: Zod (TypeScript-first schema declaration)
- **Styling**: Vanilla CSS (Rich aesthetics, dark mode, glassmorphism, responsive)
- **Animations**: Framer Motion (Fluid layout transitions between steps)
- **Icons**: Lucide React

## 📂 Project Structure

```text
src/
├── components/
│   ├── StepOne.tsx      # Handles Personal Information
│   ├── StepTwo.tsx      # Handles Account Details (Email & Passwords)
│   ├── StepThree.tsx    # Review & Submit view
│   ├── ProgressBar.tsx  # Dynamic multi-step progress indicator
│   └── SuccessView.tsx  # Post-submission success UI
├── App.tsx              # Master component handling step logic and RHF context
├── schema.ts            # Centralized Zod validation schema
├── main.tsx             # React DOM rendering entry point
└── index.css            # Custom premium styling rules
```

## 🧠 Architectural Decisions

1. **Why React Hook Form + Zod?**
   Rather than pushing heavy payload updates to a central `useState` object on every keystroke (causing massive re-renders), `react-hook-form` registers components as uncontrolled inputs. Using `zodResolver`, we validate these uncontrolled values silently in the background against a single source of truth (`schema.ts`).
2. **Conditional Button Disabling**: 
   Since RHF is uncontrolled, determining if a button should be active requires watching the fields. To balance performance and UX, `trigger` is manually invoked when transitioning between steps, and `watch()` is utilized alongside `errors` objects to dynamically compute if the "Next" button should be interactable.
3. **Animations**: 
   `framer-motion`'s `AnimatePresence` wraps conditional rendering, creating a polished native-app feel during step transitions without complex CSS keyframes.

## 🏃‍♂️ How to Run Locally

1. Ensure Node.js is installed.
2. Clone the repository and navigate into the directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Enjoy exploring the Wizard!

## Developed by
 Piyush Seth
## Git link
https://github.com/piyushseth1357/Sprint-07--Registration-Wizard.git
