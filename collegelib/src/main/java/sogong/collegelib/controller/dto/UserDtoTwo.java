package sogong.collegelib.controller.dto;

import lombok.Data;

@Data
public class UserDtoTwo {
    private Long id;
    private String loginId;
    private String password;
    private String username;

    public UserDtoTwo(Long id, String loginId, String password, String username) {
        this.id = id;
        this.loginId = loginId;
        this.password = password;
        this.username = username;
    }
}
