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
import sogong.collegelib.controller.dto.LoginDto;
import sogong.collegelib.controller.dto.Registerdto;
import sogong.collegelib.controller.dto.UserDto;
import sogong.collegelib.domain.User;
import sogong.collegelib.exception.user.loginException.NotMatchUserException;
import sogong.collegelib.exception.user.registerExceotion.*;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;


    @PostMapping(value = "/register")
    public UserDto createForm(@RequestBody @Valid Registerdto registerdto, BindingResult bindingResult, HttpServletResponse response) throws IOException {
        System.out.println("회원가입성공");
//        if(bindingResult.hasErrors()){
//            response.sendError(409);
//        }
//        if(registerdto.getLoginId() == null){  //회원가입 폼에서 입력하지 않은 파트가 있다면 예외 처리
//            throw new NullLoginIdException();
//        }
//        else if(registerdto.getUsername() == null) {
//            throw new NullUsernameException();
//        }
//        else if(registerdto.getPassword() == null) {
//            throw new NullPasswordException();
//        }
        //중복되는 아이디는 어떻게 처리??


//        if(!registerdto.getPassword().equals(registerdto.getPasswordConfirm())){ //password와 passwordConfirm이 일치하지 않으면 예외 처리
//            throw new NotMatchPasswordException();
//        }

        User registerUser = new User();
        registerUser.setUsername(registerdto.getUsername());
        registerUser.setLoginId(registerdto.getLoginId());
        registerUser.setPassword(registerdto.getPassword());

        UserDto user = new UserDto();
        user.setHashedpassword(registerdto.getUsername());
        user.setLoginId(registerdto.getLoginId());
        user.setPassword(registerdto.getPassword());

        userService.join(registerUser);
        //json형식으로 login ID , password, 이름
        return user;
    }

    @PostMapping(value = "/login")
    public User login(@RequestBody @Valid LoginDto loginDto, BindingResult bindingResult,
                      HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("로그인성공");

//        if(loginDto.getLoginId() == null) {
//            throw new NullLoginIdException();
//        }
//        else if(loginDto.getPassword() == null) {
//            throw new NullPasswordException();
//        }



        User loginUser = userService.login(loginDto.getLoginId(), loginDto.getPassword());


        log.info("login? {}", loginUser);
        if (loginUser == null) {  //비밀번호가 일치하지 않으면 예외 처리 username, loginId 확실히 구분
            throw new NotMatchUserException();
        }
        //로그인 성공 처리 TODO
        HttpSession session = request.getSession();
        session.setAttribute("loginUser", loginUser);
        //json형식 login Id
        return loginUser;
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request) {  //로그인 되어 있지 않은 상태에서 /logout을 접근했을 때도 한 번 고려해보기
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }
    }
}
