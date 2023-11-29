import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Button, Checkbox, Form } from "semantic-ui-react";

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Required";
    } else if (values.name.length < 2) {
        errors.name = "Must be at least 2 characters or more";
    }

    if (!values.phonenumber) {
        errors.phonenumber = "Required";
    } else if (
        !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i.test(values.phonenumber)
    ) {
        errors.phonenumber = "Invalid phone number";
    }

    return errors;
};

export default function Purchase({ movies = [], setMovies }) {
    const { id } = useParams() ?? {};
    const selectedMovie = id
        ? movies.find((movie) => movie.id === Number(id))
        : {};

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        validate,
        onSubmit: (values) => {
            fetch(`http://localhost:3000/movies/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log("data", data);
                });
        },
    });

    return (
        <div>
            <div>
                <label>title</label>
                <span>{selectedMovie.title ?? ""}</span>
            </div>
            <div>
                <label>time</label>
                <span>{selectedMovie.time ?? ""} minutes</span>
            </div>

            <div>
                <label>ticket_price</label>
                <span>${selectedMovie.ticket_price ?? ""}</span>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                    <label>name</label>
                    <input
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    ></input>
                    {formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </Form.Field>
                <Form.Field>
                    <label>phone number</label>
                    <input
                        name="phonenumber"
                        onChange={formik.handleChange}
                        value={formik.values.phonenumber}
                    ></input>
                    {formik.errors.phonenumber ? (
                        <div>{formik.errors.phonenumber}</div>
                    ) : null}
                </Form.Field>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}
