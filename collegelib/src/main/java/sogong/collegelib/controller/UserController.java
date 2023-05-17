package sogong.collegelib.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.UserService;
import sogong.collegelib.domain.User;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(value = "/register")
    public User createForm(@RequestBody @Valid Registerdto registerdto, BindingResult bindingResult, HttpServletResponse response) throws IOException {
        System.out.println("성공");
        if(bindingResult.hasErrors()){
            response.sendError(409);
        }
        User registerUser = new User();
        registerUser.setUsername(registerdto.getUsername());
        registerUser.setLoginId(registerdto.getLoginId());
        registerUser.setPassword(registerdto.getPassword());
        userService.join(registerUser);
        //json형식으로 login ID , password, 이름
        return registerUser;
    }

    @PostMapping(value = "/login")
    public User login(@RequestBody @Valid LoginDto loginDto, BindingResult bindingResult,
                        HttpServletRequest request, HttpServletResponse response) throws IOException {
        if (bindingResult.hasErrors()) {
            log.info("errors={}", bindingResult);
            response.sendError(401);
        }

        User loginUser = userService.login(loginDto.getLoginId(), loginDto.getPassword());
        log.info("login? {}", loginUser);
        if (loginUser == null) {
            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
            response.sendError(401);
        }
        //로그인 성공 처리 TODO
        HttpSession session = request.getSession();
        session.setAttribute("loginUser", loginUser);
        //json형식 login Id
        return loginUser;
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }
        return "redirect:/";
    }

}
