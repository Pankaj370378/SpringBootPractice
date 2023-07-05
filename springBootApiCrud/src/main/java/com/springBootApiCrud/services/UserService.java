package com.springBootApiCrud.services;

import com.springBootApiCrud.entity.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    User getUserById(Long userId);
    List<User> getAllUser();
    User updateUSer(User user);
    void deleteUser(Long userId);
}
