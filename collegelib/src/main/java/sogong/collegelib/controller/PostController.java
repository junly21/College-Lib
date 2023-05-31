package sogong.collegelib.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.BookDto;
import sogong.collegelib.controller.dto.PostDto;
import sogong.collegelib.controller.dto.UserDtoTwo;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;
import sogong.collegelib.domain.PostType;
import sogong.collegelib.domain.User;
import sogong.collegelib.exception.board.NotExistBookException;
import sogong.collegelib.exception.board.NotExistPostException;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final BookService bookService;

    @GetMapping("/{bookId}/buy")
    public List<Post> getBuyBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }

    @GetMapping("/{bookId}/sell")
    public List<Post> getSellBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }

    @GetMapping("/{bookId}/qa")
    public List<Post> getQaBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }


    @GetMapping("/{bookId}/{postId}")  //삽니다 게시판에서 특정 게시글 클릭
    public PostDto getBuyPost(@PathVariable Long bookId, @PathVariable Long postId, HttpSession session) {
        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        if(book == null){
            throw new NotExistBookException();
        }

        for (Post post : book.getPosts()) {
            if(post.getId() == postId) {

                PostDto dto = new PostDto();
                dto.setBody(post.getBody());
                dto.setTitle(post.getTitle());
                dto.setTag(post.getTag());
                dto.setId(post.getId());
                dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));
                return dto;
            }
        }
        throw new NotExistPostException();
    }


    @PostMapping("/{bookId}/write")
    public PostDto writeBuyPost(@RequestBody PostDto postDto, @PathVariable Long bookId, HttpSession session) {

        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);

        post.setTag(postDto.getTag());
        post.setUser(loginUser);

        PostDto dto = new PostDto();
        dto.setBody(postDto.getBody());
        dto.setTitle(postDto.getTitle());
        dto.setTag(postDto.getTag());
        dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));
        Long postId = postService.savePost(post);
        dto.setId(postId);
        return dto;
    }


}
