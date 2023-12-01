import React from "react";
import "./Home.css";
import { Card, Header, Image, Item } from "semantic-ui-react";
import socialMedia from "./social-media.png";

export function Home() {
    return (
        <>
            <div className="home">
                <div className="image-container">
                    <Image
                        src="https://i0.wp.com/www.courageouschristianfather.com/wp-content/uploads/2018/06/cats-dogs-3d-movie-national-pets-in-film-day-2583851.jpg?w=870&ssl=1"
                        fluid
                    />
                </div>
                <Item.Content className="info">
                    <Item.Header as="a" className="cinema-name">
                        MeowTown Cinema
                    </Item.Header>
                    <Item.Meta>1-800-Meow-Town - Customer Service</Item.Meta>
                    <Item.Meta>5555 Meow Avenue</Item.Meta>
                    <Item.Meta>Meow City, Meow State Meow Zip Code</Item.Meta>
                </Item.Content>
                <Header size="large">Coming Soon | New Releases</Header>
                <div className="new release">
                    <Card.Group itemsPerRow={6}>
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BNDgwNzc4MGYtOWMwMi00YjExLWIzMGEtMGQxMzA2NmExNzAxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                        />
                        <Card
                            raised
                            image="https://qph.cf2.quoracdn.net/main-qimg-533e65bf626e038b22090298f6d9d282-lq"
                        />
                        <Card
                            raised
                            image="https://www.lunchbox-productions.com/wp-content/uploads/2022/01/Gladiator-2000-1.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BNjgzZDgzOTQtMTlmYS00NzE4LThiM2UtNDE1YzRjYTJmNDU5XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
                        />
                        <Card
                            raised
                            image="https://preview.redd.it/in-your-opinion-what-movie-shouldve-been-nominated-for-best-v0-ic1lekqi6rib1.jpg?width=640&crop=smart&auto=webp&s=b611c5b668e31de2ecedef6b9fe17848d7d81e57"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BMmI3YjQ4NjctZTk0Zi00ZDFhLTgyZjAtYWRjZTJjMjMwNjM2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
                        />
                        <Card
                            raised
                            image="https://english.cdn.zeenews.com/sites/default/files/2023/03/27/1174492-shutter-island-thriller-film.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BM2QwMTdlYWYtOTQ4ZC00ZTVjLTkyZTMtYjUzYmE5N2FkZTFhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BYWJkZGMxYjUtNDdkMC00MDQxLWI2M2QtZmM2ZGIyODYyZDc3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                        />
                        <Card
                            raised
                            image="https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
                        />
                    </Card.Group>
                    <Item.Description className="social-media">
                        <Image src={socialMedia} />
                    </Item.Description>
                    <Item.Extra>© 2023 Meow Entertainments</Item.Extra>
                </div>
            </div>
        </>
    );
}
