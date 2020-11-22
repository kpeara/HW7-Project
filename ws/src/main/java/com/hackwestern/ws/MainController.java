package com.hackwestern.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/login")
    public @ResponseBody String addNewUser (@RequestBody User user) {
        userRepository.save(user);
        return "Saved";
    }
}
