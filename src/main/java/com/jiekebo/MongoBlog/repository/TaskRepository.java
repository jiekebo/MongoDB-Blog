package com.jiekebo.MongoBlog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jiekebo.MongoBlog.model.Task;

public interface TaskRepository extends MongoRepository<Task, String> {
	
	Task findByTitle(String title);

}
