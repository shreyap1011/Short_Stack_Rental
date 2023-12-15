package com.shortstack.griddle.controller;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/users")
    public Iterable<Tenant> getAllUsers() {
        return userService.getAllUsers();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/users/{id}")
    public Tenant findUser(@PathVariable int id) {
        return userService.findUser(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/addUser")
    public String addUser(@RequestBody Tenant user) {
        return userService.createUser(user);
    }

    @ResponseStatus(HttpStatus.RESET_CONTENT)
    @PutMapping("/updateUser")
    public Tenant updateUser(@RequestBody Tenant user) {
        return userService.updateUser(user);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("deleteUser/{id}")
    public String deleteUser(@PathVariable int id) {
        return userService.deleteUser(id);
    }
}
