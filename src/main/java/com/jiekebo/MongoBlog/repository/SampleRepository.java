package com.jiekebo.MongoBlog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jiekebo.MongoBlog.model.Sample;

public interface SampleRepository extends MongoRepository<Sample, String> {

}
