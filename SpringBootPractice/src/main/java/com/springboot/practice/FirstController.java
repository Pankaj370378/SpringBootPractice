package com.springboot.practice;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;
import com.springboot.practice.model.UserModel;
import com.springboot.practice.service.UserService;

@RestController
public class FirstController {
	@Autowired
	UserService userService;
	@RequestMapping("/")
	public List<UserModel>getallserModels(){
		return userService.getallserModels();
	}
	@RequestMapping(value = "/add-user",method = RequestMethod.POST)
	public void addUser(@RequestBody UserModel userModel) {
		userService.addUser(userModel);
	}

}
