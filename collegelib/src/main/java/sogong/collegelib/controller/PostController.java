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

    @GetMapping("/board/buy/{bookId}")
    public List<Post> getBuyBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }

    @GetMapping("/board/sell/{bookId}")
    public List<Post> getSellBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }

    @GetMapping("/board/qa/{bookId}")
    public List<Post> getQaBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);
        return book.getPosts();
    }


    @GetMapping("/board/buy/{bookId}/{postId}")  //삽니다 게시판에서 특정 게시글 클릭
    public Post getBuyPost(@PathVariable Long bookId, @PathVariable Long postId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }

        for (Post post : book.getPosts()) {
            if(post.getId() == postId){
                return post;
            }
        }
        throw new NotExistPostException();
    }

    @GetMapping("/board/sell/{bookId}/{postId}")  //팝니다 게시판에서 특정 게시글 클릭
    public Post getSellPost(@PathVariable Long bookId, @PathVariable Long postId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }

        for (Post post : book.getPosts()) {
            if(post.getId() == postId){
                return post;
            }
        }
        throw new NotExistPostException();
    }

    @GetMapping("/board/qa/{bookId}/{postId}")  //Q&A 게시판에서 특정 게시글 클릭
    public Post getQaPost(@PathVariable Long bookId, @PathVariable Long postId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }

        for (Post post : book.getPosts()) {
            if(post.getId() == postId){
                return post;
            }
        }
        throw new NotExistPostException();
    }


    @PostMapping("/board/buy/{bookId}/write")
    public PostDto writeBuyPost(@RequestBody PostDto postDto, @PathVariable Long bookId, HttpSession session) {

        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);
        post.setTag(PostType.BUY);
        post.setUser(loginUser);

        PostDto dto = new PostDto();
        dto.setBody(postDto.getBody());
        dto.setTitle(postDto.getTitle());
        dto.setTag(null);
        dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));

        postService.savePost(post);

        dto.setId(post.getId());

        return dto;
    }

    @PostMapping("/board/sell/{bookId}/write")
    public void writeSellPost(@RequestBody PostDto postDto, @PathVariable Long bookId, HttpSession session) {

        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);
        post.setTag(PostType.SELL);
        post.setUser(loginUser);

        postService.savePost(post);
    }

    @PostMapping("/board/qa/{bookId}/write")
    public void writeQaPost(@RequestBody PostDto postDto, @PathVariable Long bookId, HttpSession session) {

        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);
        post.setTag(PostType.QA);
        post.setUser(loginUser);

        postService.savePost(post);
    }
}
