package sogong.collegelib.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.BookDto;
import sogong.collegelib.controller.dto.PostDto;
import sogong.collegelib.controller.dto.PostListDto;
import sogong.collegelib.controller.dto.UserDtoTwo;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;
import sogong.collegelib.domain.PostType;
import sogong.collegelib.domain.User;
import sogong.collegelib.exception.board.NotExistBookException;
import sogong.collegelib.exception.board.NotExistPostException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final BookService bookService;

    @GetMapping("/{bookId}/buy")
    public List<PostListDto> getBuyBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }


        List<PostListDto> postListDtoList = new ArrayList<>();

        for (Post post : book.getPosts()) {
            if(post.getTags().equals("삽니다")){
                PostListDto postListDto = new PostListDto();
                postListDto.setId(post.getId());
                postListDto.setTitle(post.getTitle());
                postListDto.setDate(post.getDate());
                postListDto.setUsername(post.getUser().getUsername());
                postListDto.setTags(post.getTags());
                postListDtoList.add(postListDto);
            }

        }

        return postListDtoList;
    }

    @GetMapping("/{bookId}/sell")
    public List<PostListDto> getSellBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }


        List<PostListDto> postListDtoList = new ArrayList<>();

        for (Post post : book.getPosts()) {
            if(post.getTags().equals("팝니다")){
                PostListDto postListDto = new PostListDto();
                postListDto.setId(post.getId());
                postListDto.setTitle(post.getTitle());
                postListDto.setDate(post.getDate());
                postListDto.setUsername(post.getUser().getUsername());
                postListDto.setTags(post.getTags());
                postListDtoList.add(postListDto);
            }

        }

        return postListDtoList;
    }

    @GetMapping("/{bookId}/qa")
    public List<PostListDto> getQaBoard(@PathVariable Long bookId) {
        Book book = bookService.findOne(bookId);

        if(book == null){
            throw new NotExistBookException();
        }


        List<PostListDto> postListDtoList = new ArrayList<>();

        for (Post post : book.getPosts()) {
            if(post.getTags().equals("질문")){
                PostListDto postListDto = new PostListDto();
                postListDto.setId(post.getId());
                postListDto.setTitle(post.getTitle());
                postListDto.setDate(post.getDate());
                postListDto.setUsername(post.getUser().getUsername());
                postListDto.setTags(post.getTags());
                postListDtoList.add(postListDto);
            }

        }

        return postListDtoList;
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
                dto.setTags(post.getTags());
                dto.setId(post.getId());
                dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));
                return dto;
            }
        }
        throw new NotExistPostException();
    }

    @PostMapping("/{bookId}/{postId}/edit")  //삽니다 게시판에서 특정 게시글 클릭
    public PostDto editPost(@RequestBody PostDto postDto, @PathVariable Long bookId, @PathVariable Long postId, HttpSession session) {
        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);

        post.setTags(postDto.getTags());
        post.setUser(loginUser);

        PostDto dto = new PostDto();
        dto.setBody(postDto.getBody());
        dto.setTitle(postDto.getTitle());
        dto.setTags(postDto.getTags());
        dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));
        Long Id = postService.savePost(post);
        dto.setId(Id);
        return dto;
    }


    @PostMapping("/{bookId}/write")
    public PostDto writePost(@RequestBody PostDto postDto, @PathVariable Long bookId, HttpSession session) {

        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        Post post = new Post();
        post.setBody(postDto.getBody());
        post.setTitle(postDto.getTitle());
        post.setDate(LocalDateTime.now());
        post.setBook(book);

        post.setTags(postDto.getTags());
        System.out.println(postDto.getTags());
        post.setUser(loginUser);

        PostDto dto = new PostDto();
        dto.setBody(postDto.getBody());
        dto.setTitle(postDto.getTitle());
        dto.setTags(postDto.getTags());
        dto.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));
        Long postId = postService.savePost(post);
        dto.setId(postId);
        return dto;
    }


}
