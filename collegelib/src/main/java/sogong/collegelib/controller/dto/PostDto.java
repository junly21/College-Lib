package sogong.collegelib.controller.dto;

import lombok.Data;

@Data
public class PostDto {
    private String title;
    private String body;
    private String[] tag;
    private UserDtoTwo user;
    private Long id;
}
