package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.MovieCardDTO;
import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Service
public class MovieService {


    @Autowired
    private MovieRepository repository;

    @Autowired
    private GenreRepository genreRepository;


    @Transactional(readOnly = true)
    public Page<MovieCardDTO> findByGenre(Long genreId, Pageable pageable) {
        try {
            //List<Genre> genre = (genreId == 0) ? null : Arrays.asList(genreRepository.getOne(genreId));
            Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
            Page<Movie> page = repository.find(genre, pageable);
            return page.map(x -> new MovieCardDTO(x));
        }
        catch(ResourceNotFoundException e) {
            throw new ResourceNotFoundException("Id does not exist " + genreId);
        }
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> obj = repository.findById(id);
        Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id does not exixt"));
        return new MovieDTO(entity);
    }

}
