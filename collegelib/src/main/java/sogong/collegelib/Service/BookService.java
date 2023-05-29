package sogong.collegelib.Service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;
import sogong.collegelib.repository.BookRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    @Transactional
    public void saveBook(Book book) {
        bookRepository.save(book);
    }

    public Book findOne(Long bookId) {
        return bookRepository.findOne(bookId);
    }

    public List<Book> findBooksByKeyword(String keyword) {
        return bookRepository.findByKeyword(keyword);
    }
}
