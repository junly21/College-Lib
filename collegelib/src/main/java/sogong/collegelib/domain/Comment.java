package sogong.collegelib.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment {
    @Id @GeneratedValue
    private Long id;
    private LocalDateTime date;
    private String text;
    private Long parent_id;
    //like는 클래스로 만들기보다 댓글클래스 변수로 넣는 게 좋을듯?

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;
}
