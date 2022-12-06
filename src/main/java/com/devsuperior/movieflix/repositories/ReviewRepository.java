package com.devsuperior.movieflix.repositories;


import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {
    @Query("SELECT obj FROM Review obj WHERE obj.movie.id = :movieId")
    List<Review> findMovieReviews(Long movieId);
}
