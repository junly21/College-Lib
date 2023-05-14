package sogong.collegelib.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import sogong.collegelib.Service.UserService;
import sogong.collegelib.domain.User;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(value = "/register")
    public String createForm(Model model){
        model.addAttribute("user", new User());

    }
}
