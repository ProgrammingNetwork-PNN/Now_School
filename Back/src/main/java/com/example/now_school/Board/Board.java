package com.example.now_school.Board;

import com.example.now_school.Comment.Comment;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "board")
@AllArgsConstructor
@Builder
@Entity(name = "board")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "writetime")
    private LocalDateTime writetime;

    @Column(name = "userid")
    private String userid;

    @Column(name = "userpw")
    private String userpw;

    /*@JsonIgnoreProperties({"board"})
    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    private List<Comment> commentList;*/
}
