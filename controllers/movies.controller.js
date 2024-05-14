const Movie = require("../models/movie.model");

//get
const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (e) {
    res.status(500).json({ message: e.message }); //500-server error
  }
};

// get one movie details
const MovieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie == null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// create
const MovieCreate = async (req, res) => {
  // id,title,desc
  console.log(req.body);

  // validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie); // 200 ok status
  } catch (e) {
    return res.status(400).json({ message: e.message }); // 400 bad requst
  }
};

// put
const MovieUpdate = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    if (!updatedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
    res.status(200).json(updatedMovie);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// delete
const MovieDelete = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
          return res.status(404).json({ message: "Movie not found" });
        }
    
        res.status(200).json({ message: "Movie successfully deleted" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

module.exports = {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
  MovieDetail,
};
