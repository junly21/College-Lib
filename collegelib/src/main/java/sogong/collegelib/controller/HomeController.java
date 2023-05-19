package sogong.collegelib.controller;

import com.fasterxml.classmate.MemberResolver;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import sogong.collegelib.domain.User;
import sogong.collegelib.repository.UserRepository;

@Slf4j
@Controller
@RequiredArgsConstructor
public class HomeController {

    private final UserRepository userRepository;

    @GetMapping("/")
    public String homeLogin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return "home";
        }
//로그인
        User loginUser = (User)session.getAttribute("loginUser");
        if (loginUser == null) {
            return "home";
        }
        return "loginHome";
    }
}
