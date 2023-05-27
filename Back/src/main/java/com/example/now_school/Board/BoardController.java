package com.example.now_school.Board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board")
@RequiredArgsConstructor
public class BoardController {

    private static BoardRepository boardRepository;

    @GetMapping("/test")
    public String Hello() {
        return "Hello";
    }
}
