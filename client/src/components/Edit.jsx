import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "Required";
    }

    if (typeof values.time !== "number") {
        errors.time = "time should be number with minute unit";
    }

    return errors;
};

export default function Edit({ isNew = false, movies = [], setMovies }) {
    const { id } = useParams() ?? {};
    const navigate = useNavigate();
    const selectedMovie = id
        ? movies.find((movie) => movie.id === Number(id)) ?? {}
        : {};

    const formik = useFormik({
        initialValues: {
            title: selectedMovie.title ?? "",
            time: selectedMovie.time ?? "",
            details: selectedMovie.details ?? "",
            ticket_price: selectedMovie.ticket_price ?? "",
            image: selectedMovie.image ?? "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

            const url = isNew
                ? "http://localhost:3000/movies"
                : `http://localhost:3000/movies/${id}`;
            const method = isNew ? "POST" : "PATCH";

            fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
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
                })
                .then((_) => {
                    navigate("/admin/movies");
                });
        },
    });
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
    };

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>title</label>
                    <input
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    ></input>
                    {formik.errors.title ? (
                        <div>{formik.errors.title}</div>
                    ) : null}
                </div>
                <div>
                    <label>time</label>
                    <input
                        name="time"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                    ></input>
                    {formik.errors.time ? (
                        <div>{formik.errors.time}</div>
                    ) : null}
                </div>
                <div>
                    <label>details</label>
                    <input
                        name="details"
                        onChange={formik.handleChange}
                        value={formik.values.details}
                    ></input>
                    {formik.errors.details ? (
                        <div>{formik.errors.details}</div>
                    ) : null}
                </div>
                <div>
                    <label>ticket_price</label>
                    <input
                        name="ticket_price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.ticket_price}
                    ></input>
                    {formik.errors.ticket_price ? (
                        <div>{formik.errors.ticket_price}</div>
                    ) : null}
                </div>
                <div>
                    <label>image</label>
                    <input
                        name="image"
                        onChange={formik.handleChange}
                        value={formik.values.image}
                    ></input>
                    {formik.errors.image ? (
                        <div>{formik.errors.image}</div>
                    ) : null}
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
