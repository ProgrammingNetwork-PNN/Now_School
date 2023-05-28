package com.example.now_school.Comment;

import com.example.now_school.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
@RequiredArgsConstructor
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/add")
    public Long addComment(Long boardId,@RequestBody CommentDTO comment) {
        return commentService.commentSave(boardId, comment);
    }

    @GetMapping("/{boardid}")
    public List<Comment> findBoardComment(Long boardId) {
        return commentService.findAll(boardId);
    }

    @DeleteMapping
    public Message deleteComment(Long commentId, String userPw) {
        commentService.deleteComment(commentId, userPw);
        return new Message("삭제 완료", true);
    }
}
