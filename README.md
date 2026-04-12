# 100 Days of Code

A collection of projects built during the #100DaysOfCode challenge — one project per day, covering different languages, frameworks, and concepts.

---

## Index

| Day | Project | Stack |
|---|---|---|
| [Day 1](#day-1--to-do-list) | To-Do List | C++ |
| [Day 2](#day-2--simple-calculator) | Simple Calculator | HTML / CSS / JavaScript |
| [Day 3](#day-3--random-quote-generator) | Random Quote Generator | React + TypeScript + Tailwind + Framer Motion |

---

## Projects

### Day 1 — To-Do List

> **Folder:** [`todo_app/`](todo_app/) &nbsp;|&nbsp; **Language:** C++

A command-line task manager. Add, view, complete, and remove tasks from the terminal.

**Key concepts:** OOP (structs & classes), user input handling, CLI menus

---

### Day 2 — Simple Calculator

> **Folder:** [`simple_calculator/`](simple_calculator/) &nbsp;|&nbsp; **Language:** HTML / CSS / JavaScript

A browser-based calculator supporting basic arithmetic with edge-case handling (consecutive operators, multiple decimals).

**Key concepts:** DOM manipulation, event handling, expression evaluation

---

### Day 3 — Random Quote Generator

> **Folder:** [`random_quote_generator/random-quote-generator/`](random_quote_generator/random-quote-generator/) &nbsp;|&nbsp; **Stack:** React + TypeScript + Tailwind + Framer Motion

A web app that fetches a random quote from an API and displays it with smooth animations. Includes copy-to-clipboard functionality.

**Key concepts:** React hooks, async fetch, Tailwind CSS v4, Framer Motion animations

![Random Quote Generator — screenshot 1](docs/screenshots/random_quote_ss1.png)

---

## Quick Start

| Project | How to run |
|---|---|
| To-Do List | `cd todo_app && g++ -o todoList toDoList.cpp && ./todoList` |
| Simple Calculator | Open `simple_calculator/index.html` in a browser |
| Random Quote Generator | `cd random_quote_generator/random-quote-generator && npm install && npm run dev` |

---

## Repository Structure

```
100DaysCoding/
├── todo_app/                          # Day 1 — C++ CLI to-do list
├── simple_calculator/                 # Day 2 — Vanilla JS calculator
├── random_quote_generator/            # Day 3 — React quote app
│   └── random-quote-generator/
└── docs/
    └── screenshots/                   # Project screenshots
```
