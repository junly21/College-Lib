package sogong.collegelib.controller.dto;

import lombok.Data;
import sogong.collegelib.domain.PostType;

import java.util.ArrayList;
import java.util.List;

@Data
public class PostDto {
    private String title;
    private String body;
    private String tags;
    private UserDtoTwo user;
    private Long id;
    private List<CommentDto> comments = new ArrayList<>();
}
