package sogong.collegelib.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.BookDto;
import sogong.collegelib.controller.dto.PostDto;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;
import sogong.collegelib.exception.board.NotExistBookException;
import sogong.collegelib.exception.board.NotExistPostException;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final BookService bookService;

//    @GetMapping("/board/buy/{bookId}")
//    public List<Post> getBuyBoard(@PathVariable Long bookId) {
//
//    }
//
//    @GetMapping("/board/sell/{bookId}")
//    public List<Post> getSellBoard(@PathVariable Long bookId) {
//
//    }
//
//    @GetMapping("/board/qa/{bookId}")
//    public List<Post> getQaBoard(@PathVariable Long bookId) {
//
//    }


    @GetMapping("/buy/{bookId}/{postId}")  //삽니다 게시판에서 특정 게시글 클릭
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

    @GetMapping("/sell/{bookId}/{postId}")  //팝니다 게시판에서 특정 게시글 클릭
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

    @GetMapping("/qa/{bookId}/{postId}")  //Q&A 게시판에서 특정 게시글 클릭
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


//    @GetMapping("/board/buy/{bookId}/write")
//    public void writeBuyPost(@PathVariable Long bookId) {
//
//    }
//
//    @GetMapping("/board/sell/{bookId}/write")
//    public void writeSellPost(@PathVariable Long bookId) {
//
//    }
//
//    @GetMapping("/board/qa/{bookId}/write")
//    public void writeQaPost(@PathVariable Long bookId) {
//
//    }
}
