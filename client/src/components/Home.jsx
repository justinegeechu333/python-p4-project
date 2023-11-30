import React from "react";
import "./Home.css";
import { Image, Item } from "semantic-ui-react";
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
                    <Item.Description className="social-media">
                        <Image src={socialMedia} />
                    </Item.Description>
                    <Item.Extra>© 2023 Meow Entertainments</Item.Extra>
                </Item.Content>
            </div>
        </>
    );
}
