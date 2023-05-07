package sogong.collegelib.domain;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Like {
    private Long member_id;
    private Long comment_id;
}
