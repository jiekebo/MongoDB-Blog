package com.jiekebo.MongoBlog;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import com.jiekebo.MongoBlog.model.Comment;
import com.jiekebo.MongoBlog.model.Post;
import com.jiekebo.MongoBlog.repository.PostRepository;

@Named("postInitializer")
public class PostInitializer {

    @Inject
    @Named("postRepository")
    private PostRepository sampleRepository;

    @PostInitialize
    public void init() {
    	Comment comment = new Comment();
    	comment.setAuthor("John Doe");
    	comment.setBody("Testing ebedded documents");
    	comment.setEmail("johndoe@mail.com");
    	List<Comment> comments = new ArrayList<Comment>();
    	comments.add(comment);
    	
    	HashSet<String> tags = new HashSet<String>();
    	tags.add("newpost");
    	tags.add("test");
    	
    	Date date = new Date(System.currentTimeMillis());
    	
        sampleRepository.save(new Post("Test posting", "test", "John Doe", "Test Post", date, tags, comments));
        
    }
}
