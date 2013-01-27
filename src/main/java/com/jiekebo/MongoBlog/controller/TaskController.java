package com.jiekebo.MongoBlog.controller;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.web.controller.RepositoryBasedRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jiekebo.MongoBlog.model.Task;
import com.jiekebo.MongoBlog.repository.TaskRepository;

@Controller
@RequestMapping(value = "/api/task")
public class TaskController extends RepositoryBasedRestController<Task, String, TaskRepository> {

    @Inject
    @Named("taskRepository")
    @Override
    public void setRepository(TaskRepository repository) {
        this.repository = repository;
    }
    
    @RequestMapping(value = "title/{title}", method=RequestMethod.GET)
    @ResponseBody
    public Task findByName(@PathVariable String title) {
    	return this.repository.findByTitle(title);
    }
}
