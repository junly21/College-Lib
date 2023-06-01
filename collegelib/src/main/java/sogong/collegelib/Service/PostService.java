package sogong.collegelib.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
