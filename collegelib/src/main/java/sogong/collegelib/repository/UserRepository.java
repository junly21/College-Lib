package sogong.collegelib.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import sogong.collegelib.domain.User;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {
    @PersistenceContext
    private EntityManager em;
    public void save(User user) {
        em.persist(user);
    }
    public User findOne(Long id) {
        return em.find(User.class, id);
    }

    public Optional<User> findByLoginId(String loginId) {
        return findAll().stream()
                .filter(m -> m.getLoginId().equals(loginId))
                .findFirst();
    }

    public List<User> findAll() {
        return em.createQuery("select m from User m", User.class)
                .getResultList();
    }
    public List<User> findByName(String name) {
        return em.createQuery("select m from User m where m.username = :username", User.class)
                .setParameter("username", name)
                .getResultList();
    }
}
