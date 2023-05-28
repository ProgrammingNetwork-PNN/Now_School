package com.example.now_school.Board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface BoardRepository  extends JpaRepository<Board, Long> {

    @Query("select b from board b where userid = :userid and userpw = :userpw")
    Board findByIdAndPw(@Param("userid") String userid, @Param("userpw") String userpw);
}
