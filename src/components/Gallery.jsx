import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Gallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { searchValue } = this.props;

    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6bd26be0`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Non funziona ${response.status}`);
      }

      const data = await response.json();
      const films = data.Search.slice(0, 6);
      this.setState({ movies: films });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  render() {
    const movieTitles = this.state.movies.map((film) => film.Title).join(', ');

    return (
      <div className='container'>
        <h5 className='text-light'>{this.props.searchValue}</h5>
        <Row>
          {this.state.movies.map((film, index) => (
            <Col key={index} sm={6} md={4} lg={3} xl={2} className="mb-4">
              <div className="text-center">
                {film.Poster && (
                  <img src={film.Poster} alt={film.Title} className="img-fluid mb-2" />
                )}
                <p className="mb-0">{film.Title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Gallery;
