package com.springBootApiCrud.controller;

import com.springBootApiCrud.services.UserService;
import com.springBootApiCrud.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserService userService;
@PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User saveUser=userService.createUser(user);
        return new ResponseEntity<>(saveUser, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId){
        User user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    //Pankaj yadav
    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
    List<User> user=userService.getAllUser();
    return new ResponseEntity<>(user,HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<User>updateUser(@PathVariable("id") Long userId,@RequestBody User user){
    user.setId((userId));
    User updateUSer=userService.updateUSer(user);
    return new ResponseEntity<>(updateUSer,HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id")Long userId){
    userService.deleteUser(userId);
    return new ResponseEntity<>("User succesfully deleted !",HttpStatus.OK);
    }
}
