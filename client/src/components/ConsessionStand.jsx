import React from "react";
import "./ConsessionStand.css";
import { Grid, Image, Card, Header } from "semantic-ui-react";

export function ConsessionStand() {
    return (
        <div className="consessionStand">
            <Header size="huge">/ / / CONCESSION STAND / / /</Header>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Card
                            link
                            image="https://m.media-amazon.com/images/I/31NgYi2JSgL.__AC_QL70_FMwebp_.jpg"
                            header="Butter Popcorn"
                            meta="$7.50"
                            description={"Butter or Carmel"}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            link
                            image="https://www.funmiles.net//static/upload/Nachos%20Cheese%20(1).jpg"
                            header="Cheesy Nachos"
                            meta="$9.50"
                            description={"Chilli and Cheesy"}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            link
                            image="https://m.media-amazon.com/images/I/91H1K4ZibAL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg"
                            header="Assorted Candies"
                            meta="$6.50"
                            description={"May contain nuts"}
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Card
                            link
                            image="https://rosemarieskitchensite.files.wordpress.com/2018/08/dog-movie-night-hot-dogs.jpg"
                            header="Hotdog"
                            meta="$5.50"
                            description={"Beef Hotdog or Pork Hotdog"}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            link
                            image="https://i.pinimg.com/originals/88/96/80/88968006191f0f2528620b7feb093639.jpg"
                            header="Fountain Drinks"
                            meta="$7.50"
                            description={"Coke, Sprite, Dr. Pepper"}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            link
                            image="https://d3hbe0kmbam4a5.cloudfront.net/photos/3e388779-f6c2-4347-b2af-6156092a85ef.jpg"
                            header="Icee"
                            meta="$5.50"
                            description={"Cherry or Coke"}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
