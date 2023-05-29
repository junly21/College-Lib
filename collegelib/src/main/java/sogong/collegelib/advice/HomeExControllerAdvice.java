package sogong.collegelib.advice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import sogong.collegelib.exception.ErrorResult;
import sogong.collegelib.exception.user.homeExaception.NullSearchException;

@Slf4j
@RestControllerAdvice
public class HomeExControllerAdvice {

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NullSearchException.class)
    public ErrorResult nullSearchExHandle() {
        return new ErrorResult("nullSearch", "검색 정보를 입력하시오.");
    }
}
