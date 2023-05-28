package sogong.collegelib.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.BookDto;
import sogong.collegelib.controller.dto.PostDto;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("/{bookId}")
    public BookDto lookBook(@PathVariable Long bookId) {

        return null;
    }

    @GetMapping("/{bookId}/buy")
    public List<PostDto> buyPost(@PathVariable Long bookId) {

        return null;
    }

    @GetMapping("/{bookId}/sell")
    public List<PostDto> sellPost(@PathVariable Long bookId) {
        return null;
    }

    @GetMapping("/{bookId}/qa")
    public List<PostDto> qaPost(@PathVariable Long bookId) {
        return null;
    }

    @PostMapping("/{bookId}/buy/add")
    public void buyPostAdd(@PathVariable Long bookId) {

    }

    @PostMapping("/{bookId}/sell/add")
    public void sellPostAdd(@PathVariable Long bookId) {

    }

    @PostMapping("/{bookId}/qa/add")
    public void qaPostAdd(@PathVariable Long bookId) {

    }




}
