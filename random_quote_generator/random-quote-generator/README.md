# Day 3 — Random Quote Generator (React + TypeScript)

A web app that fetches and displays a random inspirational quote with smooth animations, built with a modern React stack.

## Screenshots

![Quote loaded](../../docs/screenshots/random_quote_ss1.png)
![New quote animation](../../docs/screenshots/random_quote_ss2.png)

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Card transition animations |
| Lucide React | Icons |
| DummyJSON API | Quote data source |

## Features

- Fetches a random quote on load and on button click
- Animated card transition between quotes (Framer Motion)
- Copy quote to clipboard with one click
- Loading and error states handled gracefully
- Responsive glassmorphism UI

## Getting Started

```bash
cd 100DaysCoding/random_quote_generator/random-quote-generator
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## API

Quotes are sourced from the free [DummyJSON Quotes API](https://dummyjson.com/quotes/random):

```
GET https://dummyjson.com/quotes/random
→ { "id": 1, "quote": "...", "author": "..." }
```

## Project Structure

```
src/
├── components/
│   └── QuoteGenerator.tsx   # Main quote component (fetch, display, copy)
├── App.tsx                  # Root component
├── main.tsx                 # React entry point
└── index.css                # Tailwind CSS import
```
