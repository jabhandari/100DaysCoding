#pragma once
#ifndef TODOLIST_H
#define TODOLIST_H
#include<iostream>
#include<string>
#include<vector>

struct Task {

	std::string description;
	bool isComplete;

	Task(const std::string& desc) :
		description(desc), isComplete(false) {};
};

class toDoList {
private:
	std::vector<Task> task;
public:

	void add(const std::string& desc);
	void remove(size_t index);
	void view();
	void markCompleted(size_t index);

};




#endif // !TODOLIST.H
