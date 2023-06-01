package sogong.collegelib.controller.dto;

import lombok.Data;
import sogong.collegelib.domain.PostType;

@Data
public class PostDto {
    private String title;
    private String body;
    private String tags;
    private UserDtoTwo user;
    private Long id;

}
