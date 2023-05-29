package sogong.collegelib.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private LocalDateTime date;
    private String text;
    private PostType type;
    private boolean trade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOOK_ID")
    private Book book;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> answers = new ArrayList<>();
}
