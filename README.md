![Logo](/public/logo.svg)

# Wingman UI Coding Challenge

This project implements a **responsive** and **pixel-perfect** UI based on the provided Figma design. It leverages the foundational structure generated with **Next.js**, **Tailwind CSS**, and **shadcn/ui**.

---

## Tools & Libraries Used

- **Tailwind CSS**: Responsive utility classes for styling.
- **shadcn/ui**: For building modular UI components.
- **Chart.js or Recharts** _(optional)_: For rendering dynamic graphs.
- **Next.js**: For server-side rendering and routing.

---

## Project Structure

```bash
src/
├── app/                     # Next.js app directory
├── components/              # Reusable components
└── utils/                   # Helper functions
```

---

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone
   cd
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Requirements

- **Pixel Perfect**: The UI must closely match the provided Figma design.
- **Responsiveness**: Ensure all elements are responsive and optimized for both mobile and desktop views.
- **Interactions**:
  - Dropdown menus
  - Hover states
  - Charts and Insights visualization.

---

## Features

- Dashboard UI with summary metrics
- Insights charts (responsive and dynamic)
- Orders list with commission details
- Forecast indicators for KPIs

---

## Responsive Considerations

The layout should adapt seamlessly to all screen sizes:

- **Mobile**: Single-column layout.
- **Tablet/Desktop**: Multi-column grid layout.

---

## Development Notes

--

---

## Deployment

Deploy using platforms like: **Vercel**

Run:

```bash
npm run build
npm start
```

---

## License

This project is for demonstration purposes.
