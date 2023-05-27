package com.example.now_school.Board;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Board {
    private Long id;
    private String Title;
    private String content;
    private LocalDateTime writeTime;
    private String userId;
    private String userPw;
    private String image;
}
