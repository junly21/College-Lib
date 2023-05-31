package sogong.collegelib.controller.dto;

import lombok.Data;
import sogong.collegelib.domain.PostType;

@Data
public class PostDto {
    private String title;
    private String body;
<<<<<<< HEAD
    private String[] tag;
    private UserDtoTwo user;
    private Long id;
=======
    private PostType tag;
>>>>>>> 81e52a6345b9538385f7285e237d57b823c512fd
}
