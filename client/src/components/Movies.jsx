import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import "./Movies.css";

export const Movies = ({ isAdmin = false, movies = [] }) => {
  const [selectedId, setSelectedId] = useState(-1);
  const selectedMovie =
    selectedId < 0 ? null : movies.find((m) => m.id === selectedId);
  console.log("movies:", movies);
  return (
    <div className="movies_page">
      <Table columns={1} celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Now Showing</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {movies.map((m) => (
            <Table.Row>
              <Table.Cell onClick={() => setSelectedId(m.id)}>
                {m.title}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        {isAdmin && (
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>3 People</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        )}
      </Table>

      <div className="movie_detail">
        {selectedMovie === null ? (
          <div className="nothing-selected">
            <div>
              <span className="x">𝕏</span>
              <span>nothing is selected</span>
              <span className="x">𝕏</span>
            </div>
          </div>
        ) : (
          <>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.image} alt={selectedMovie.title} />
            <p>{selectedMovie.detail}</p>
            <p>{selectedMovie.time}</p>
            <p>{selectedMovie.price}</p>
            <div className="buttons">
              <button>Purchase</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
