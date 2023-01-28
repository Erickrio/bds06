package com.devsuperior.movieflix.services;


import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


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
    public ReviewDTO insert(ReviewDTO dto) {
        //pega o usuario logado
        User user = authService.authenticated();

        Review entity = new Review();
        entity.setText(dto.getText());
        entity.setMovie(movieRepository.getOne(dto.getMovieId()));
        entity.setUser(user);
        repository.save(entity);
        return new ReviewDTO(entity);
    }
}
