package com.hackwestern.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class MainController {

    private UserRepository userRepository;

    @PostMapping(path="/login")
    public @ResponseBody String addNewUser (@RequestParam String username, @RequestParam String password) {

        User n = new User();
        n.setUsername(username);
        n.setPassword(password);
        userRepository.save(n);
        return "Saved"; // TODO: return response entity (200 ok)
    }
}
