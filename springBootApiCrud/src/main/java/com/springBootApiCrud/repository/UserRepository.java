package com.springBootApiCrud.repository;

import com.springBootApiCrud.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
