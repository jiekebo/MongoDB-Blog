package com.jiekebo.MongoBlog.controller;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.web.controller.RepositoryBasedRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jiekebo.MongoBlog.model.Post;
import com.jiekebo.MongoBlog.repository.PostRepository;

@Controller
@RequestMapping(value = "/api/post")
public class PostController extends RepositoryBasedRestController<Post, String, PostRepository> {
	
	@Inject
	@Named("postRepository")
	@Override
	public void setRepository(PostRepository repository) {
		this.repository = repository;
	}

}
