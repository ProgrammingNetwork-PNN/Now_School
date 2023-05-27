package com.example.now_school.Board;

import lombok.*;
import org.hibernate.annotations.Columns;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "board")
@AllArgsConstructor
@Builder
@Entity(name = "board")
public class Board {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "writeTime")
    private LocalDateTime writeTime;

    @Column(name = "userId")
    private String userId;

    @Column(name = "userPw")
    private String userPw;

    @Column(name = "image")
    private String image;
}
