# Interactive Terminal Portfolio

A web-based, interactive terminal-style personal portfolio built with Next.js, React, Tailwind CSS, and TypeScript. 

This project simulates a command-line interface (CLI) to present personal information, skills, experiences, and awards in an engaging, unique way.

## Features

- **Interactive Terminal Interface**: Users can type commands like `about`, `skills`, `experience`, `education`, `awards`, or `help` to navigate the portfolio.
- **Customizable**: Easy to update with your own personal details, projects, and styling.
- **Responsive Design**: Built with Tailwind CSS to ensure a great experience across desktop and mobile devices.
- **Modern Stack**: Developed using Next.js, React, TypeScript, and modern styling tools.
- **Static Export**: Configured to be exported as a static site, making it easy to host on GitHub Pages or similar platforms.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The main terminal logic and content are located in `components/ui/interactive-portfolio-terminal-component.tsx`. Open this file to update the portfolio with your own details, customized prompt styles, and new commands.

## Deployment

This website is optimized for static site generation. You can export the static files using:

```bash
npm run build
```

The resulting output can be easily deployed to GitHub Pages or any static site hosting service.

## Credits

This project was created with the help of **Antigravity** agents and the **GitHub MCP**.

The initial prompt to create the interactive terminal component was sourced from [21st.dev](https://21st.dev).
