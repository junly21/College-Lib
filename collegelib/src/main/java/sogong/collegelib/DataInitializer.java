package sogong.collegelib;


import jakarta.annotation.PostConstruct;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sogong.collegelib.Service.BookService;
import sogong.collegelib.domain.Author;
import sogong.collegelib.domain.Book;
import sogong.collegelib.repository.BookRepository;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@Component
public class DataInitializer {

    private final BookService bookService;

    @Autowired
    public DataInitializer(BookService bookService) {
        this.bookService = bookService;
    }

    @PostConstruct
    public void init() throws IOException {

        FileInputStream file = new FileInputStream(new File("/Users/gimjaehyeon/Downloads/bookData.xlsx"));
        XSSFWorkbook workbook = new XSSFWorkbook(file);
        XSSFSheet sheet = workbook.getSheetAt(0);


        for (Row row : sheet) {
            Cell cell1 = row.getCell(0);
            Cell cell2 = row.getCell(1);
            Author author = new Author(String.valueOf(cell2));
            Book book = new Book(String.valueOf(cell1),author);
            bookService.saveBook(book);

        }

        workbook.close();
        file.close();
    }


}
