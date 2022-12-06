package com.devsuperior.movieflix.services;


import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.EntityNotFoundException;
import java.util.List;

import java.util.stream.Collectors;


@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private AuthService authService;

    @Transactional(readOnly = true)
    public List<ReviewDTO> findMovieReviews(Long movieId) {
        try {
            List<Review> list = repository.findMovieReviews(movieId);
            return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());

        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + movieId);
        }
    }

        @Transactional
        public ReviewDTO insert(ReviewDTO dto){
           //pega o usario logado
           User user = authService.authenticated();

           Review review = new Review();
           review.setText(dto.getText());
           review.setMovie(movieRepository.getOne(dto.getMovieId()));
           review.setUser(user);
           repository.save(review);
           return new ReviewDTO(review);
       }

}
