package com.shortstack.griddle.service;

import com.shortstack.griddle.model.User;
import com.shortstack.griddle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public String createUser(User user) {
        userRepository.save(user);
        return "User added";
    }

    public User findUser(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(User user) {
        Optional<User> optionalUser = userRepository.findById(user.getUserID());
        User oldUser = null;
        if(optionalUser.isPresent()) {
            oldUser = optionalUser.get();
            oldUser.setUserID(user.getUserID());
            oldUser.setEmail(user.getEmail());
            oldUser.setFirstName(user.getFirstName());
            oldUser.setLastName(user.getLastName());
            oldUser.setUsername(user.getUsername());
            oldUser.setPassword(user.getPassword());
            oldUser.setIsLandlord(user.getIsLandlord());
        } else {
            return new User();
        }
        return oldUser;
    }

    public String deleteUser(int id) {
        userRepository.deleteById(id);
        return "User deleted";
    }

}
