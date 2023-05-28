package com.example.now_school.Comment;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class CommentDTO {
    private Long boardid;

    private String comment;

    private String nickname;

    private String userpw;

    public CommentDTO() {}

    public CommentDTO(Long boardid, String comment, String nickname, String userpw) {
        this.boardid = boardid;
        this.comment = comment;
        this.nickname = nickname;
        this.userpw = userpw;
    }
}
