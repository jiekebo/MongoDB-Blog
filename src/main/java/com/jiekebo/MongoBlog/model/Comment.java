package com.jiekebo.MongoBlog.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Comment {
	
	private String body;
	private String email;
	private String author;
	
	public Comment() {
		super();
	}
	
	public Comment(String body, String email, String author) {
		super();
		this.body = body;
		this.email = email;
		this.author = author;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

}
