# Day 1 Project: To-Do List

## Overview

This is a simple To-Do List application created as part of the 100 Days of Code challenge. The application allows users to manage their tasks by adding new tasks, marking tasks as completed, viewing tasks, and removing tasks from the list. This project is built using C++.

## Features

- **Add Task**: Add a new task with a description.
- **Remove Task**: Remove a task by its index.
- **View Tasks**: View all tasks with their current status (Completed or Pending).
- **Mark Task Completed**: Mark a task as completed.

## Requirements

- C++ Compiler (e.g., GCC, Clang, or Visual Studio)
- Basic knowledge of C++ programming concepts.

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/jabhandari/100DaysCoding.git
    ```

2. Navigate to the project folder:

    ```bash
    cd 100DaysCoding/project1
    ```

3. Compile the code using your preferred C++ compiler:

    ```bash
    g++ -o todoList main.cpp
    ```

4. Run the program:

    ```bash
    ./todoList
    ```

## Code Explanation

- **Task Structure**: A `Task` struct is used to define each task with a description and completion status (`isComplete`).
- **toDoList Class**: This class manages the list of tasks with functions to add, remove, view, and mark tasks as completed.
- **Main Program**: A simple user interface allows the user to interact with the to-do list by choosing options.

## Example Usage

1. **Add Task**: Add a new task with a description.

    ```
    Enter Task description: Finish homework
    ```

2. **View Tasks**: View all tasks.

    ```
    Tasks:
    1: Finish homework         Pending
    ```

3. **Mark Task as Completed**: Mark a task as completed.

    ```
    Enter Task id to mark as completed: 1
    ```

4. **Remove Task**: Remove a task by its ID.

    ```
    Enter Task id to remove: 1
    ```

## License

This project is open source and available under the [MIT License](LICENSE).
