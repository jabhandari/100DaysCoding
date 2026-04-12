# Day 1 — To-Do List (C++)

A command-line to-do list manager built in C++ as the first project of the 100 Days of Code challenge.

## Features

- Add tasks with a description
- Mark tasks as completed
- View all tasks with their status (Pending / Completed)
- Remove tasks by index

## Requirements

- C++ compiler (GCC, Clang, or MSVC / Visual Studio)

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

## Code Structure

| File | Description |
|---|---|
| `toDoList.h` | `Task` struct and `toDoList` class declaration |
| `toDoList.cpp` | Class method implementations |
| `project1.cpp` | Main program loop and user menu |
