package com.springboot.practice.dao;

import org.springframework.data.repository.CrudRepository;

import com.springboot.practice.model.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Integer> {

}
