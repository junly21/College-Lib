package sogong.collegelib.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sogong.collegelib.domain.Book;
import sogong.collegelib.domain.Post;
import sogong.collegelib.repository.PostRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public void savePost(Post post) {
        postRepository.save(post);
    }

    public Book findBookOne(Long bookId) {
        return postRepository.findBookOne(bookId);
    }

    public Post findPostOne(Long postId) {
        return postRepository.findPostOne(postId);
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
