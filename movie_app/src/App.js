import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

state = {
  greeting: "Hello!",
  movies: [
    {
      title: "Matrix",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      title: "Full Metal Jacket",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
    },
    {
      title: "Oldboy",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
    },
    {
      title: "Star Wars",
      poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
    }
  ]
}

componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [
        {
          title: "Trainspotting",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfy5cAxK1zduJi27tTvmLBveSDLxoq3Ko2E8v3wY3ANIGkz3AmwA"
        },
        ...this.state.movies
      ]
    })
  }, 5000)
}

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
