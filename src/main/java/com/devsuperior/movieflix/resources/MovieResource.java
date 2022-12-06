package com.devsuperior.movieflix.resources;


import com.devsuperior.movieflix.dto.MovieCardDTO;
import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.services.MovieService;
import com.devsuperior.movieflix.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {

    @Autowired
    private MovieService service;

    @Autowired
    private ReviewService reviewService;


    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
        MovieDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping
    public ResponseEntity<Page<MovieCardDTO>> findByGenre(
            @RequestParam(value ="categoryId",defaultValue = "0") Long genreId, Pageable pageable) {
        Page<MovieCardDTO> list = service.findByGenre(genreId, pageable);
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value = "/{movieId}/reviews")
    public ResponseEntity<List<ReviewDTO>> findMovieReviews(@PathVariable Long movieId) {
        List<ReviewDTO> list = reviewService.findMovieReviews(movieId);
        return ResponseEntity.ok(list);
    }

}
