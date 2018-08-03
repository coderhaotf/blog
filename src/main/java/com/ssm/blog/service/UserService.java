package com.ssm.blog.service;

import com.ssm.blog.entity.User;

import java.util.List;

public interface UserService {

    List<User> findUserByEmail(String email);

    void addUser(User user);

    String getRolesByUsername(String username);

    List<User> getUserByName(String username);
}
