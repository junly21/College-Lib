package sogong.collegelib.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import sogong.collegelib.domain.Post;
import sogong.collegelib.domain.User;

import java.util.List;
import java.util.Optional;

@Repository
public class PostRepository {

    @PersistenceContext
    private EntityManager em;
    public Long save(Post post) {
        em.persist(post);
        return post.getId();
    }
    public Post findOne(Long id) {
        return em.find(Post.class, id);
    }

    public void deleteById(Long id){
        Post post = findOne(id);
        em.remove(post);
    }

    public List<Post> findBuyAll(Long bookId) {
        return em.createQuery("select m from Post m JOIN m.Book.b on b.id = :bookId where m.tags = '삽니다'",
                        Post.class)
                .setParameter("bookId", bookId)
                .getResultList();
    }

    public List<Post> findSellAll(Long bookId) {
        return em.createQuery("select m from Post m JOIN m.Book.b on b.id = :bookId where m.tags = '팝니다'",
                        Post.class)
                .setParameter("bookId", bookId)
                .getResultList();
    }

    public List<Post> findQaAll(Long bookId) {
        return em.createQuery("select m from Post m JOIN m.Book.b on b.id = :bookId where m.tags = '질문'",
                        Post.class)
                .setParameter("bookId", bookId)
                .getResultList();
    }

    public List<User> findByName(String name) {
        return em.createQuery("select m from User m where m.username = :username", User.class)
                .setParameter("username", name)
                .getResultList();
    }
}
