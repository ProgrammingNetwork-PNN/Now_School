package com.example.now_school.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAll() {
        return boardRepository.findAll();
    }

    public Optional<Board> findBoardById(Long id) {
        return boardRepository.findById(id);
    }

    public Long save(Board board) {
        board.setId(board.getId());
        board.setTitle(board.getTitle());
        board.setContent(board.getContent());
        board.setId(board.getId());
        board.setUserpw(board.getUserpw());
        board.setWritetime(LocalDateTime.now());

        Board saveBoard = boardRepository.save(board);

        return saveBoard.getId();
    }

    public boolean deleteBoard(Long id, String userId, String userPw) {
        Board board = boardRepository.findByIdAndPw(userId, userPw);
        boardRepository.deleteById(id);
        return true;
    }

    public boolean updateBoard(Long id, String userId, String userPw, Board newBoard) {
        Board board = boardRepository.findByIdAndPw(userId, userPw);
        newBoard.setId(id);
        newBoard.setTitle(newBoard.getTitle());
        newBoard.setContent(newBoard.getContent());
        newBoard.setUserid(userId);
        newBoard.setUserpw(userPw);
        newBoard.setWritetime(board.getWritetime());

        boardRepository.save(newBoard);
        return true;

    }
}
