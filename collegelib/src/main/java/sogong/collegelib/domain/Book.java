package sogong.collegelib.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Book {

    @Id @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AUTHOR_ID")
    private Author author;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();


}
