package sogong.collegelib.Service;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sogong.collegelib.domain.User;
import sogong.collegelib.repository.UserRepository;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserServiceTest {
    @Autowired UserService userService;
    @Autowired
    UserRepository userRepository;

    @Test
    public void 회원가입() throws Exception {
//Given
        User user = new User();
        user.setUsername("kim");
//When
        Long saveId = userService.join(user);
//Then
        assertEquals(user, userRepository.findOne(saveId));
    }

}