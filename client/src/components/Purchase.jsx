import { useParams } from "react-router-dom";

export default function Purchase({ movies = [], setMovies }) {
  const { id } = useParams() ?? {};
  const selectedMovie = id
    ? movies.find((movie) => movie.id === Number(id))
    : {};

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          fetch(`http://localhost:3000/movies/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: e.target.name.value,
              phonenumber: e.target.phonenumber.value,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log("data", data);
            });
        }}
      >
        <div>
          <label>title</label>
          <span>{selectedMovie.title ?? ""}</span>
        </div>
        <div>
          <label>time</label>
          <span>{selectedMovie.time ?? ""}</span>
        </div>

        <div>
          <label>ticket_price</label>
          <span>{selectedMovie.ticket_price ?? ""}</span>
        </div>
        <div>
          <label>name</label>
          <input name="name"></input>
        </div>
        <div>
          <label>phone number</label>
          <input name="phonenumber"></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
