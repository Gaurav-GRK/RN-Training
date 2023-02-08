import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MovieList = ({ movies, onMoviePress }) => {
  return (
    <View style={styles.container}>
      {movies.map((movie, index) => (
        <TouchableOpacity key={index} onPress={() => onMoviePress(movie)}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const MovieDetails = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.movieInfo}>{movie.description}</Text>
    </View>
  );
};

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movies = [
    { title: 'Movie 1', description: 'Description for movie 1' },
    { title: 'Movie 2', description: 'Description for movie 2' },
    { title: 'Movie 3', description: 'Description for movie 3' },
  ];

  return selectedMovie ? (
    <MovieDetails movie={selectedMovie} />
  ) : (
    <MovieList movies={movies} onMoviePress={setSelectedMovie} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  movieInfo: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default App;
