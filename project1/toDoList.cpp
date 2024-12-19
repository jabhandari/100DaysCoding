#include "toDoList.h"

void toDoList::add(const std::string& desc)
{
	task.push_back(Task(desc));
	std::cout << "New task added sucessfully.\n";
}

void toDoList::remove(size_t index)
{
	if (index >= 1 && index <= task.size()) {
		task.erase(task.begin() + index - 1);
		std::cout << "Task removed sucessfully.\n";
	}
}

void toDoList::view()
{
	if (task.empty()) {
		std::cout << "No tasks present in the To Do List.\n";
		return;
	}
	std::cout << "Tasks: \n";
	for (size_t i = 0; i < task.size();i++) {
		std::cout << i + 1 << ": ";
		std::cout << (task[i].description);
		if (task[i].isComplete) {
			std::cout << "\t\tcompleted.\n";
		}
		else {
			std::cout << "\t\tPending.\n";
		}
	}

}

void toDoList::markCompleted(size_t index)
{
	if (index >= 1 && index <= task.size()) {
		task[index - 1].isComplete = true;
		std::cout << "Task is marked complete sucessfully.\n";

	}
	else {
		std::cout << "The task does not exists(invalid index).\n";
	}
}


