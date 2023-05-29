package sogong.collegelib.controller;

import com.fasterxml.classmate.MemberResolver;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sogong.collegelib.domain.User;
import sogong.collegelib.repository.UserRepository;

@Slf4j
@RestController
@RequiredArgsConstructor
public class HomeController {

    private final UserRepository userRepository;

    @GetMapping("/")
    public ResponseEntity<?> homeLogin(@RequestParam String search, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return ResponseEntity.ok("home");
        }

        User loginUser = (User)session.getAttribute("loginUser");
        if (loginUser == null) {
            return ResponseEntity.ok("home");
        }

        // 필요한 데이터를 담은 DTO 또는 VO 객체를 생성하여 반환
        return ResponseEntity.ok("home");
    }

}
