package sogong.collegelib.controller;

import com.fasterxml.classmate.MemberResolver;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.controller.dto.UserDto;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.User;
import sogong.collegelib.exception.user.loginException.NotLoginUserException;
import sogong.collegelib.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class HomeController {

    private final UserRepository userRepository;
    private final BookService bookService;

    @GetMapping("/")
    public User homeLogin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            throw new NotLoginUserException();
        }

        User loginUser = (User)session.getAttribute("loginUser");
        if (loginUser == null) {
            throw new NotLoginUserException();
        }

        // 필요한 데이터를 담은 DTO 또는 VO 객체를 생성하여 반환
        return loginUser;
    }

    @GetMapping("/check")
    public UserDto check(HttpServletRequest request) {
        System.out.println("check");
        HttpSession session = request.getSession(false);
        if (session == null) {
            //throw new NotLoginUserException();
            return null;
        }

        User loginUser = (User)session.getAttribute("loginUser");
        if (loginUser == null) {
            //throw new NotLoginUserException();
            return null;
        }

        // 필요한 데이터를 담은 DTO 또는 VO 객체를 생성하여 반환

        System.out.println(loginUser.getLoginId());
        System.out.println(loginUser.getPassword());
        UserDto user = new UserDto();
        user.setLoginId(loginUser.getLoginId());
        user.setPassword(loginUser.getPassword());
        user.setUsername(loginUser.getUsername());
        return user;
    }

    @GetMapping("/search")
    public List<Book> searchBook(@RequestParam("keyword") String keyword) {
       return bookService.findBooksByKeyword(keyword);
    }
}
