// project1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include"toDoList.h"
int main()
{
    toDoList t;

    int selection;
    std::string description;
    size_t index;
    while (true) {
        std::cout << "============\n";
        std::cout << "Task Manager\n";
        std::cout << "1. Add Task\n";
        std::cout << "2. View Task\n";
        std::cout << "3. Remove Task\n";
        std::cout << "4. Mark Task Completed\n";
        std::cout << "5. Exit\n";
    std::cout << "Choose an option: \n";
        std::cin >> selection;
        switch (selection) {

            case 1:
                std::cout << "Enter Task description: ";
                std::cin.ignore();
                getline(std::cin, description);
                t.add(description);
                break;

            case 2:
                t.view();
                break;
            case 3:
                std::cout << "Enter Task id to remove: ";
                std::cin >> index;
                t.remove(index);
                break;

            case 4:
                std::cout << "Enter Task id to mark as completed: : ";
                std::cin >> index;
                t.markCompleted(index);
                break;
            case 5:
                std::cout << "Exiting program.\n";
                return 0;

            default:
                std::cout << "Invalid selection";
        }

    }
    return 0;
}

