package sogong.collegelib.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.PostDto;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/info/{bookId}")
    public Book lookBook(@PathVariable Long bookId) {
        return postService.findBookOne(bookId);
    }

    @GetMapping("/board/buy/{bookId}")
    public List<Post> buyPost(@PathVariable Long bookId) {
        return postService.findBuyPost(bookId);
    }

    @GetMapping("/board/sell/{bookId}")
    public List<Post> sellPost(@PathVariable Long bookId) {
        return postService.findSellPost(bookId);
    }

    @GetMapping("/board/qa/{bookId}")
    public List<Post> qaPost(@PathVariable Long bookId) {
        return postService.findQaPost(bookId);
    }

    @PostMapping("/board/buy/{bookId}/write")
    public void buyPostAdd(@PathVariable Long bookId, @RequestBody Post post) {

    }

    @PostMapping("/{bookId}/sell/add")
    public void sellPostAdd(@PathVariable Long bookId) {

    }

    @PostMapping("/{bookId}/qa/add")
    public void qaPostAdd(@PathVariable Long bookId) {

    }




}
