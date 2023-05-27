package com.example.now_school.Board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.crypto.spec.OAEPParameterSpec;
import java.time.LocalDateTime;
import java.util.*;

@Repository
public interface BoardRepository  extends JpaRepository<Board, String> {
    Optional<Board> findByUserId(String userId);
}
