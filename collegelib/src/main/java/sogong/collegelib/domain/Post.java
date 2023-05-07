package sogong.collegelib.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class Post {
    @Id @GeneratedValue
    private Long Id;

    private Long member_id;
    private Long book_id;
    private LocalDateTime date;
    private String text;
    private PostType type;
    private boolean trade;
}
