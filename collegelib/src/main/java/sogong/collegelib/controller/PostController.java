package sogong.collegelib.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.Service.CommentService;
import sogong.collegelib.Service.PostService;
import sogong.collegelib.controller.dto.*;
import sogong.collegelib.domain.*;
import sogong.collegelib.exception.board.InvalidUserException;
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
    private final CommentService commentService;

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
        Post post = postService.findOne(postId);
        User user = post.getUser();

        if (book == null) {
            throw new NotExistBookException();
        } else if (post == null) {
            throw new NotExistPostException();
        }


        PostDto postDto = new PostDto();
        postDto.setBody(post.getBody());
        postDto.setTitle(post.getTitle());
        postDto.setTags(post.getTags());
        postDto.setId(post.getId());
        postDto.setUser(new UserDtoTwo(user.getId(), user.getLoginId(), user.getPassword(), user.getUsername()));

        if(post.getAnswers() == null){
            return postDto;
        }
        for (Comment comment : post.getAnswers()) {
            CommentDto commentDto = new CommentDto();
            commentDto.setText(comment.getText());
            commentDto.setDate(comment.getDate());
            commentDto.setUser(new UserDtoTwo(comment.getUser().getId(), comment.getUser().getLoginId(), comment.getUser().getPassword(), comment.getUser().getUsername()));
            postDto.getComments().add(commentDto);
        }

        return postDto;
    }

    @PostMapping("/comment/{postId}")  //댓글
    public CommentDto postComment(@PathVariable Long postId, @RequestBody String body, HttpSession session) {
        User loginUser = (User)session.getAttribute("loginUser");
        Post post = postService.findOne(postId);
        Comment commentDto = new Comment();
        commentDto.setText(body);
        commentDto.setDate(LocalDateTime.now());
        commentDto.setUser(loginUser);
        commentDto.setPost(post);
        post.getAnswers().add(commentDto);
        commentService.saveComment(commentDto);

        CommentDto commentDto1 = new CommentDto();
        commentDto1.setDate(commentDto.getDate());
        commentDto1.setText(commentDto.getText());
        commentDto1.setUser(new UserDtoTwo(loginUser.getId(), loginUser.getLoginId(), loginUser.getPassword(), loginUser.getUsername()));


        return commentDto1;
    }

    @DeleteMapping("/{bookId}/{postId}")  //삽니다 게시판에서 특정 게시글 클릭
    public void deletePost(@PathVariable Long bookId, @PathVariable Long postId, HttpSession session) {
        Book book = bookService.findOne(bookId);
        User loginUser = (User) session.getAttribute("loginUser");
        System.out.println("loginUser = " + loginUser.toString());

        if(book == null){
            throw new NotExistBookException();
        }


        postService.deleteById(postId);
        throw new NotExistPostException();
    }

    @PostMapping("/{bookId}/{postId}/edit")
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
