package com.jiekebo.MongoBlog.model;

import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Post {
	
	@Id
	private String id;
	
	private String body;
	private String permalink;
	private String author;
	private String title;
	
	private Set<String> tags;
	
	private List<Comment> comments;
	
	public Post() {
		super();
	}
	
	public Post(String body, String permalink, String author, String title, Set<String> tags, List<Comment> comments) {
		super();
		this.body = body;
		this.permalink = permalink;
		this.author = author;
		this.title = title;
		this.tags = tags;
		this.comments = comments;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getPermalink() {
		return permalink;
	}

	public void setPermalink(String permalink) {
		this.permalink = permalink;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Set<String> getTags() {
		return tags;
	}

	public void setTags(Set<String> tags) {
		this.tags = tags;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

}
