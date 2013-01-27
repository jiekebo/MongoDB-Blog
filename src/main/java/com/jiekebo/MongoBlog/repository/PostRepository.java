package com.jiekebo.MongoBlog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jiekebo.MongoBlog.model.Post;

public interface PostRepository extends MongoRepository<Post, String> {

}
