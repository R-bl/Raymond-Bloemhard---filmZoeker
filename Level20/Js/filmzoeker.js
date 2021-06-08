const movieList = document.getElementById("movieList");
const radioButtons = document.getElementsByName("movie-filter");

//Function to add movies to the dom
const addMoviesToDom = (movies) => {
  const movieListItems = movies.map((movie) => {
    const newListItem = document.createElement("li");
    const newLink = document.createElement("a");
    const poster = document.createElement("img");
    newLink.target = "_blank";
    newLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    poster.src = movie.Poster;
    newListItem.appendChild(newLink);
    newLink.appendChild(poster);
    return newListItem;
  });
  movieListItems.forEach((item) => {
    movieList.appendChild(item);
  });
};
addMoviesToDom(movies);

//filter movies by year and word
const filterLatestMovie = movies.filter((movie) => movie.Year >= 2014);
const filterMovie = (wordInMovieTitle) =>
  movies.filter((movie) =>
    movie.Title.toLocaleLowerCase().includes(
      wordInMovieTitle.toLocaleLowerCase()
    )
  );

const handleOnChangeEvent = document.body.addEventListener("change", (e) => {
  let target = e.target;
  switch (target.value) {
    case "all-movies":
      movieList.innerHTML = "";
      addMoviesToDom(movies);
      break;
    case "new-movies":
      movieList.innerHTML = "";
      addMoviesToDom(filterLatestMovie);
      break;
    case "avenger-movies":
      movieList.innerHTML = "";
      addMoviesToDom(filterMovie("Avengers"));
      break;
    case "xmen-movies":
      movieList.innerHTML = "";
      addMoviesToDom(filterMovie("X-Men"));
      break;
    case "princess-movies":
      movieList.innerHTML = "";
      addMoviesToDom(filterMovie("Princess"));
      break;
    case "batman-movies":
      movieList.innerHTML = "";
      addMoviesToDom(filterMovie("Batman"));
      break;
    default:
      movieList.innerHTML = "";
      addMoviesToDom(movies);
      break;
  }
});

// Search
const searchFunction = () => {
  let input, filter, ul, li;
  input = document.getElementById("search-movie");
  filter = input.value.toUpperCase();
  ul = document.getElementById("movieList");
  li = ul.getElementsByTagName("li");
  movieList.innerHTML = "";
  addMoviesToDom(filterMovie(filter));
};

//input for search
const input = document.getElementById("search-movie");
input.addEventListener("keypress", function (evt) {
  if (evt.key === "Enter") {
    evt.preventDefault();
    document.getElementById("searchButton").click();
  }
});
