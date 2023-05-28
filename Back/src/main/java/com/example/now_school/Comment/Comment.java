package com.example.now_school.Comment;

import com.example.now_school.Board.Board;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "comment")
@AllArgsConstructor
@Builder
@Entity(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long commentid;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "comment")
    private String comment;

    @Column(name = "createtime")
    private LocalDateTime createtime;

    @Column(name = "userpw")
    private String userpw;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "boardid")
    @JsonBackReference
    private Board boardid;
}
