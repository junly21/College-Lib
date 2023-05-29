package sogong.collegelib.controller.dto;

import lombok.Data;

@Data
public class UserDto {
    private String loginId;
    private String password;
    private String Hashedpassword;
}
