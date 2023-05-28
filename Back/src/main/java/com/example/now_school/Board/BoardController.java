package com.example.now_school.Board;

import com.example.now_school.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/board")
@RequiredArgsConstructor
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public List<Board> getAll() {
        return boardService.getAll();
    }

    @GetMapping(value = "{/id}")
    public Optional<Board> board(Long id) {
        return boardService.findBoardById(id);
    }

    @PostMapping(value = "/add")
    public Long addBoard(@RequestBody Board board) {
        return boardService.save(board);
    }

    @DeleteMapping
    public Message deleteBoard(Long id, String userId, String userPw) {
        boardService.deleteBoard(id, userId, userPw);
        return  new Message("삭제 완료", true);
    }

    @PutMapping("{/id}")
    public Message putBoard(Long id, String userId, String userPw, @RequestBody Board newBoard) {
        boardService.updateBoard(id, userId, userPw, newBoard);
        return  new Message("수정 완료", true);
    }
}
