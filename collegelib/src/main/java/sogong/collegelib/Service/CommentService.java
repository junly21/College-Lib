package sogong.collegelib.Service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sogong.collegelib.domain.Comment;
import sogong.collegelib.domain.Post;
import sogong.collegelib.repository.CommentRepository;
import sogong.collegelib.repository.PostRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    @Transactional
    public Long saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment findOne(Long commentId) {
        return commentRepository.findOne(commentId);
    }

    @Transactional
    public void deleteById(Long commentId){
        commentRepository.deleteById(commentId);
    }
}
