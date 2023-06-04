package sogong.collegelib.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sogong.collegelib.controller.dto.PostDto;
import sogong.collegelib.domain.Post;
import sogong.collegelib.repository.PostRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public Long savePost(Post post) {
        return postRepository.save(post);
    }

    public Post findOne(Long postId) {
        return postRepository.findOne(postId);
    }

    @Transactional
    public void deleteById(Long postId){
        postRepository.deleteById(postId);
    }

    @Transactional
    public Post updatePost(PostDto postDto, Long postId) {
        Post post = postRepository.findOne(postId);

        post.setTitle(postDto.getTitle());
        post.setBody(postDto.getBody());
        post.setTags(postDto.getTags());

        return post;
    }

    public List<Post> findBuyPost(Long bookId) {
        return postRepository.findBuyAll(bookId);
    }

    public List<Post> findSellPost(Long bookId) {
        return postRepository.findSellAll(bookId);
    }

    public List<Post> findQaPost(Long bookId) {
        return postRepository.findQaAll(bookId);
    }


}
