package sogong.collegelib.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.controller.dto.BookDto;
import sogong.collegelib.domain.Book;
import sogong.collegelib.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BookController {

    private final UserRepository userRepository;
    private final BookService bookService;
    @GetMapping("/search")
    public List<BookDto> search(@RequestParam("keyword") String keyword, HttpServletRequest request) {
//        HttpSession session = request.getSession(false);
//        if (session == null) {
//            throw new NotLoginUserException();
//        }
//
//        User loginUser = (User)session.getAttribute("loginUser");
//        if (loginUser == null) {
//            throw new NotLoginUserException();
//        }
//
//        // 필요한 데이터를 담은 DTO 또는 VO 객체를 생성하여 반환
//        return loginUser;
        System.out.println(keyword);
        List<Book> bookList = bookService.findBooksByKeyword(keyword);
        List<BookDto> bookDtoList = new ArrayList<>();
        for(Book book : bookList) {
            BookDto bookDto = new BookDto();
            bookDto.setId(book.getId());
            bookDto.setName(book.getName());
            bookDto.setAuthorName(book.getAuthor().getName());
            bookDtoList.add(bookDto);
        }
        return bookDtoList;
    }

    @GetMapping("/info/{bookId}")
    public BookDto infoBook(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setName(book.getName());
        bookDto.setAuthorName(book.getAuthor().getName());
        return bookDto;
    }

}
