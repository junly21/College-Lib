package sogong.collegelib.controller.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostListDto {
    private Long id;
    private String title;
    private String tags;
    private LocalDateTime date;
    private String username;
}
