package com.hackwestern.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @PostMapping(path="/login")
    public ResponseEntity<String> addNewUser (@RequestBody User user) {

        User loggedIn = userRepository.findUserByUsername(user.getUsername());

        if (loggedIn == null) {
            userRepository.save(user);
            return ResponseEntity.ok("New User Created");
        }
        else if (loggedIn.equals(user)) {
            return ResponseEntity.ok("Logged In");
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping(path="/equipment")
    public Iterable<Equipment> getEquipment () {
        return equipmentRepository.findAll();
    }
}
