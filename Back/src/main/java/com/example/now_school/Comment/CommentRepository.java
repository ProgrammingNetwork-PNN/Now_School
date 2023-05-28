package com.example.now_school.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query("select c from comment c where boardid = :boardid")
    List<Comment> findAllByBoardId(Long BoardId);

    @Query("select c from comment c where userpw = :userpw")
    Comment findByPw(@Param("userpw") String userpw);
}
