package com.devsuperior.movieflix.repositories;


import com.devsuperior.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<User,Long> {

}
