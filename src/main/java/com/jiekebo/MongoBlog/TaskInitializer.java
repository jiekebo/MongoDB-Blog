package com.jiekebo.MongoBlog;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import com.jiekebo.MongoBlog.model.Task;
import com.jiekebo.MongoBlog.repository.TaskRepository;

@Named("taskInitializer")
public class TaskInitializer {

    @Inject
    @Named("taskRepository")
    private TaskRepository sampleRepository;

    @PostInitialize
    public void init() {
        sampleRepository.save(new Task("testSample1"));
        sampleRepository.save(new Task("testSample2"));
        sampleRepository.save(new Task("testSample3"));
    }
}
