package sogong.collegelib.controller.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentDto {

    private Long id;
    private LocalDateTime date;
    private String text;
    private UserDtoTwo user;
}
