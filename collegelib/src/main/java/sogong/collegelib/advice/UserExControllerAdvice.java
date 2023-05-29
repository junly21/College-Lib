package sogong.collegelib.advice;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import sogong.collegelib.exception.ErrorResult;
import sogong.collegelib.exception.user.homeExaception.NullSearchException;
import sogong.collegelib.exception.user.loginException.NotExistUserException;
import sogong.collegelib.exception.user.loginException.NotMatchUserException;
import sogong.collegelib.exception.user.registerExceotion.*;

@Slf4j
@RestControllerAdvice
public class UserExControllerAdvice {   //http header 에 accept 가 application/json 이어야 함

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NullLoginIdException.class)
    public ErrorResult nullLoginIdExHandle(){
        return new ErrorResult("nullLoginId", "아이디를 입력하시오.");
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NullUsernameException.class)
    public ErrorResult nullUsernameExHandle() {
        return new ErrorResult("nullUsername", "username을 입력하시오.");
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NullPasswordException.class)
    public ErrorResult nullPasswordExHandle() {
        return new ErrorResult("nullPassword", "비밀번호를 입력하시오.");
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NullPasswordConfirmException.class)
    public ErrorResult nullPasswordConfirmExHandle() { return new ErrorResult("nullPasswordConfirm", "확인 비밀번호를 입력하시오."); }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NotMatchPasswordException.class)
    public ErrorResult notMatchPasswordExHandle() {
        return new ErrorResult("notMatchPassword", "비밀번호가 일치하지 않습니다.");
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(DuplicateLoginIdException.class)
    public ErrorResult duplicateLoginIdExHandle() {
        return new ErrorResult("duplicateLoginIdInDB", "이미 존재하는 id입니다.");
    }

    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NotExistUserException.class)
    public ErrorResult notExistUserExHandle() {
        return new ErrorResult("notExistUser", "존재하지 않는 회원입니다.");
    }


    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NotMatchUserException.class)
    public ErrorResult notMatchUserExHandle(){
        return new ErrorResult("notMatchUserInLogin", "아이디와 비밀번호가 일치하지 않습니다.");
    }
}
