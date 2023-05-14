package sogong.collegelib.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.UserService;
import sogong.collegelib.domain.User;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(value = "/register")
    public void createForm(@RequestBody Userdto userdto){
        System.out.println("성공");

    }
}
