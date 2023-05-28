package com.example.now_school.Comment;

import com.example.now_school.Board.Board;
import com.example.now_school.Board.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private BoardRepository boardRepository;

    String nickname = "익명";
    int seq = 0;

    public Long commentSave(Long boardId, CommentDTO comment) {
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new IllegalArgumentException("해당 boardId가 없습니다."));

        Comment newcomment = Comment.builder()
                .boardid(board)
                .comment(comment.getComment())
                .nickname(nickname+(++seq))
                .userpw(comment.getUserpw())
                .createtime(LocalDateTime.now())
                .build();

        commentRepository.save(newcomment);

        return newcomment.getCommentid();
    }

    public List<Comment> findAll(Long boardId) {
        return commentRepository.findAllByBoardId(boardId);
    }

    public boolean deleteComment(Long commentId, String userPw) {
        Comment comment = commentRepository.findByPw(userPw);
        commentRepository.deleteById(commentId);
        return true;
    }
}
