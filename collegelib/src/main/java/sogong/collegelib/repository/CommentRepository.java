package sogong.collegelib.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import sogong.collegelib.domain.Comment;
import sogong.collegelib.domain.Post;

@Repository
public class CommentRepository {
    @PersistenceContext
    private EntityManager em;
    public Long save(Comment comment) {
        em.persist(comment);
        return comment.getId();
    }
    public Comment findOne(Long id) {
        return em.find(Comment.class, id);
    }

    public void deleteById(Long id){
        Comment comment = findOne(id);
        em.remove(comment);
    }
}
