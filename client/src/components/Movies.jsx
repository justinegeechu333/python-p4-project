import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

export const Movies = ({ isAdmin = false, movies = [] }) => {
  const [selectedId, setSelectedId] = useState(-1);
  useEffect(() => {
    if (movies.length > 0) setSelectedId(movies[0].id);
  }, [movies]);
  const selectedMovie =
    selectedId < 0 ? null : movies.find((m) => m.id === selectedId);
  const navigate = useNavigate();
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
            <Table.Row key={m.id}>
              <Table.Cell onClick={() => setSelectedId(m.id)}>
                {m.title}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        {isAdmin && (
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>
                <button onClick={() => navigate(`/admin/new`)}>new</button>
              </Table.HeaderCell>
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
            <p>{selectedMovie.details}</p>
            <p>{selectedMovie.time}</p>
            <p>{selectedMovie.ticket_price}</p>
            <div className="buttons">
              {isAdmin ? (
                <button
                  onClick={() => navigate(`/admin/edit/${selectedMovie.id}`)}
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/purchase/${selectedMovie.id}`)}
                >
                  Purchase
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
