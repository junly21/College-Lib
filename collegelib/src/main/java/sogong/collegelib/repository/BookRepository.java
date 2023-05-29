package sogong.collegelib.repository;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;

import java.util.List;

@Repository
public class BookRepository {

    @PersistenceContext
    private EntityManager em;
    public void save(Book book) {
        em.persist(book);
        em.persist(book.getAuthor());
    }

    public Book findOne(Long id) {
        return em.find(Book.class, id);
    }

    public List<Book> findByKeyword(String keyword) {
        List<Book> books = em.createQuery("select b from Book b where b.title like %:keyword%")
                .getResultList();

        return books;
    }
}
