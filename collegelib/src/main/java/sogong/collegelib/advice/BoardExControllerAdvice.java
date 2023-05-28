package sogong.collegelib.advice;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import sogong.collegelib.exception.ErrorResult;
import sogong.collegelib.exception.board.InvalidUserException;
import sogong.collegelib.exception.board.NotExistBookException;
import sogong.collegelib.exception.board.NullTextException;
import sogong.collegelib.exception.board.NullTitleException;

@Slf4j
@RestControllerAdvice
public class BoardExControllerAdvice {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotExistBookException.class)
    public ErrorResult notExistBookExHandle() {
        return new ErrorResult("notExistBook", "존재하지 않는 책의 정보입니다.");
    }

    @ExceptionHandler(NullTitleException.class)
    public ErrorResult nullTitleExHandle() {
        return new ErrorResult("nullTitle", "제목을 입력하시오.");
    }

    @ExceptionHandler(NullTextException.class)
    public ErrorResult nullTextExHandle() {
        return new ErrorResult("nullTitle", "본문 내용을 입력하시오.");
    }

    @ExceptionHandler(InvalidUserException.class)
    public ErrorResult invalidUserExHandle() {
        return new ErrorResult("invalidUser", "허용되지 않는 접근입니다.");
    }
}
