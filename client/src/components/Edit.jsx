import { useParams, useNavigate } from "react-router-dom";

export default function Edit({ isNew = false, movies = [], setMovies }) {
  const { id } = useParams() ?? {};
  const navigate = useNavigate();
  const selectedMovie = id
    ? movies.find((movie) => movie.id === Number(id)) ?? {}
    : {};

  const onDelete = (e) => {
    const url = `http://localhost:3000/movies/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        return res.json();
      })
      .then((_) => {
        setMovies((movies) => {
          return movies.filter((movie) => movie.id !== Number(id));
        });
      })
      .then((_) => {
        navigate("/admin/movies");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", {
      title: e.target.title.value,
      time: e.target.time.value,
      details: e.target.details.value,
      ticket_price: e.target.ticket_price.value,
      image: e.target.image.value,
    });
    const url = isNew
      ? "http://localhost:3000/movies"
      : `http://localhost:3000/movies/${id}`;
    const method = isNew ? "POST" : "PATCH";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        time: e.target.time.value,
        details: e.target.details.value,
        ticket_price: e.target.ticket_price.value,
        image: e.target.image.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies((movies) => {
          if (isNew) {
            return [...movies, data];
          } else {
            // update (patch)
            return movies.map((movie) => {
              if (movie.id === Number(id)) {
                return data;
              } else {
                return movie;
              }
            });
          }
        });
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>title</label>
          <input name="title" defaultValue={selectedMovie.title ?? ""}></input>
        </div>
        <div>
          <label>time</label>
          <input
            name="time"
            type="number"
            defaultValue={selectedMovie.time ?? ""}
          ></input>
        </div>
        <div>
          <label>details</label>
          <input
            name="details"
            defaultValue={selectedMovie.details ?? ""}
          ></input>
        </div>
        <div>
          <label>ticket_price</label>
          <input
            name="ticket_price"
            type="number"
            defaultValue={selectedMovie.ticket_price ?? ""}
          ></input>
        </div>
        <div>
          <label>image</label>
          <input name="image" defaultValue={selectedMovie.image ?? ""}></input>
        </div>

        <div>
          <button type="button" onClick={onDelete}>
            Delete
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
