package sogong.collegelib.Service;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sogong.collegelib.domain.User;
import sogong.collegelib.exception.user.registerExceotion.DuplicateLoginIdException;
import sogong.collegelib.repository.UserRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional //변경
    public Long join(User user) {
        validateDuplicateMember(user); //중복 회원 검증

        userRepository.save(user);
        return user.getId();
    }

    public User login(String loginId, String password) {
        return userRepository.findByLoginId(loginId)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
    private void validateDuplicateMember(User user) {
        List<User> findMembers =
                userRepository.findByName(user.getLoginId());
        if (!findMembers.isEmpty()) {
            throw new DuplicateLoginIdException();
        }
    }
    /**
     *전체 회원 조회
     */
    public List<User> findUsers() {
        return userRepository.findAll();
    }
    public User findOne(Long userId) {
        return userRepository.findOne(userId);
    }
}
