import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Navibar from "./components/NavBar";
import "./styles.css"; // Make sure to import your CSS file

const App = () => {
  const [movies, setMovies] = useState([
    // Add your initial movie data here
    {
      title: "King Of Kilers (2023)",
      description:
        "Garan is a part of a group of international hitmen who are contracted to take out the most dangerous killer in the world, only to find out that they’re the ones being hunted. ",
      posterURL:
        "https://nkiri.com/wp-content/uploads/2023/09/king-of-killers-hollywood-movie-200x300.jpg",
      rating: 7.5,
    },
    {
      title: "Barbie (2023)",
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      posterURL: "https://cdn.wallpapersafari.com/8/39/XzZe6I.jpg",
      rating: 4.5,
    },
    {
      title: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023)",
      description:
        "fter years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O’Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
      posterURL: "https://static.netnaija.com/i/Wz27WPB9a5R.webp",
      rating: 5.5,
    },
    {
      title: "Indiana Jones and the Dial of Destiny (2023)",
      description:
        "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn’t fall into the wrong hands.",
      posterURL: "https://static.netnaija.com/i/G4E7zgQJab6.webp",
      rating: 5.5,
    },
    {
      title: "Avengers Endgame",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos’ actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg",
      rating: 5.5,
    },
    {
      title: "The Pod Generation (2023) | Download Hollywood Movie",
      description:
        " Set in a near future where AI is all the rage and nature is becoming a distant memory, Rachel and Alvy are a New York couple ready to take their relationship to the next level and start a family.",
      posterURL:
        "https://nkiri.com/wp-content/uploads/2023/08/the-pod-generation-hollywood-movie.jpg",
      rating: 5.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <div className="container">
      <Navibar />
      <h1 className="mt-4 mb-4">Movie App</h1>
      <button className="btn btn-dark mb-2" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
