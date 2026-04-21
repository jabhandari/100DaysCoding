# Day 1 — To-Do List (C++)

A command-line to-do list manager built in C++ as the first project of the 100 Days of Code challenge.

---

## Features

- Add tasks with a description
- Mark tasks as completed
- View all tasks with their status (Pending / Completed)
- Remove tasks by index

---

## Requirements

- C++ compiler (GCC, Clang, or MSVC)

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/jabhandari/100DaysCoding.git
cd 100DaysCoding/todo_app

# Compile
g++ -o todoList toDoList.cpp

# Run
./todoList
```

---

## Example Usage

```
1. Add Task
2. Remove Task
3. View Tasks
4. Mark Task as Completed
5. Exit

Enter Task description: Finish homework

Tasks:
1: Finish homework         Pending

Enter Task id to mark as completed: 1

Tasks:
1: Finish homework         Completed

Enter Task id to remove: 1
```

---

## How It Works

The app is structured around a `toDoList` class that owns a `vector<Task>`. Each `Task` is a struct holding a description string and a boolean `completed` flag. The menu loop reads user input and dispatches to the appropriate method — add, remove, view, or complete.

---

## Project Structure

| File | Description |
|---|---|
| `toDoList.h` | `Task` struct and `toDoList` class declaration |
| `toDoList.cpp` | Class method implementations |
| `project1.cpp` | Main program loop and user menu |

---

## Key Concepts

- OOP — structs, classes, encapsulation
- `std::vector` for dynamic task storage
- User input handling with `cin` / `getline`
- CLI menu-driven control flow
