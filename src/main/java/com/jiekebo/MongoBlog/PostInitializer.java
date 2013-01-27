package com.jiekebo.MongoBlog;

import java.util.ArrayList;
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
    	comment.setAuthor("me");
    	comment.setBody("blabla");
    	comment.setEmail("me@me.com");
    	List<Comment> comments = new ArrayList<Comment>();
    	comments.add(comment);
    	
    	HashSet<String> tags = new HashSet<String>();
    	tags.add("newpost");
    	
        sampleRepository.save(new Post("Blabla", "test", "me", tags, comments));
        
    }
}
