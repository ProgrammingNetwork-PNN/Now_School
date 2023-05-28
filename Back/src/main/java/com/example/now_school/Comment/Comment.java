package com.example.now_school.Comment;

import lombok.*;

import javax.persistence.*;

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

}
