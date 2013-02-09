package com.jiekebo.MongoBlog.controller;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.web.controller.RepositoryBasedRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jiekebo.MongoBlog.model.Comment;
import com.jiekebo.MongoBlog.repository.CommentRepository;

@Controller
@RequestMapping(value = "/api/comment")
public class CommentController extends RepositoryBasedRestController<Comment, String, CommentRepository> {

	@Inject
	@Named("commentRepository")
	@Override
	public void setRepository(CommentRepository repository) {
		this.repository = repository;
	}
}