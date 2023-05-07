package sogong.collegelib.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue
    private Long id;
    private Long post_id;
    private Long member_id;
    private LocalDateTime date;
    private String text;
    private Long parent_id;
}
