package com.springboot.practice.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.practice.dao.UserRepository;
import com.springboot.practice.model.UserModel;

@Service
public class UserService {
	@Autowired
  UserRepository userRepository;
	public List<UserModel>getallserModels(){
		List<UserModel> userrecordList=new ArrayList<>(); 
		userRepository.findAll().forEach(userrecordList::add);
		return userrecordList;
	}
	public void addUser(UserModel userModel) {
		userRepository.save(userModel);
	}

}
