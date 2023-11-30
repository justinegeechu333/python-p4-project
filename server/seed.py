#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Movie, Customer, Purchase

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        
        Purchase.query.delete()
        Movie.query.delete()
        Customer.query.delete()


        movies = []

        movies.append(Movie(title='The Hunger Games: Ballad of Songbirds & Snakes', time= 158 , details= 'Years before he becomes the tyrannical president of Panem, 18-year-old Coriolanus Snow remains the last hope for his fading lineage. With the 10th annual Hunger Games fast approaching, the young Snow becomes alarmed when he is assigned to mentor Lucy Gray Baird from District 12. Uniting their instincts for showmanship and political savvy, they race against time to ultimately reveal who\'s a songbird and who\'s a snake.', ticket_price = 14, image = 'https://regalcdn.azureedge.net/REG/HungerGamesBalladofSongbirdsSnakesThe/HO00013027/TV_SmallPosterImage/20230927-134228841.png'))
        movies.append(Movie(title = 'Five Nights at Freddy\'s', time = 110 , details = 'A troubled security guard begins working at Freddy Fazbear\'s Pizza. While spending his first night on the job, he realizes the night shift at Freddy\'s won\'t be so easy to make it through.', ticket_price = 12, image = 'https://regalcdn.azureedge.net/REG/FiveNightsatFreddys/HO00014314/TV_SmallPosterImage/20230517-074301474.jpg'))
        movies.append(Movie(title = 'Wish', time = 95, details = 'In “Wish,” Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force—a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe—the ruler of Rosas, King Magnifico—to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.', ticket_price = 16, image = 'https://regalcdn.azureedge.net/REG/Wish/HO00014431/TV_SmallPosterImage/20230928-092917528.png'))
        movies.append(Movie(title = 'The Marvels', time = 105, details = 'Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan, Kamala Khan aka Ms. Marvel, and Carol\'s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team-up and learn to work in concert to save the universe as “The Marvels.”', ticket_price = 17, image = 'https://regalcdn.azureedge.net/REG/MarvelsThe/HO00010980/TV_SmallPosterImage/20230721-072522533.jpg' ))
        movies.append(Movie(title = 'Saving Private Ryan 25th Anniversary', time = 169, details = 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', ticket_price = 15, image = 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg'))
        movies.append(Movie(title = 'Thanksgiving', time = 106, details = 'After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the infamous holiday.', ticket_price = 13, image = 'https://m.media-amazon.com/images/M/MV5BZjcyNmI2NzMtNjVhMy00ZDhjLTkwNWItMTJhYzc3YjU2ZTk3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'))
        movies.append(Movie(title = 'The Equalizer 3', time = 109, details = 'Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends\' protector by taking on the mafia.', ticket_price = 14, image = 'https://m.media-amazon.com/images/M/MV5BODdiMzM2YjctZmU3ZS00MzUwLWJiYTMtMmI2NzIyMTQyOTQ1XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg'))
        movies.append(Movie(title = 'Saw X', time = 118, details = 'A sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer only to discover the entire operation is a scam to defraud the most vulnerable.', ticket_price = 17, image = 'https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg'))
        movies.append(Movie(title = 'Spirited Away', time = 125, details = 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.',ticket_price = 8, image = 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'))
        movies.append(Movie(title = 'Napolean', time = 158, details = 'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.', ticket_price = 16, image = 'https://resizing.flixster.com/IV_6IDxEbgc14nQNEUo1jiUFbD8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2NzUxMTgyLTFkMDgtNDhjYi05MTU4LWFlYWRmNmM5ZjYxNC5qcGc='))
        movies.append(Movie(title = 'Killers Of The Flower Moon', time = 206, details = 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.', ticket_price = 14, image = 'https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc='))
        movies.append(Movie(title = 'The Creator', time = 133, details = 'Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.', ticket_price = 16, image = 'https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg'))

        db.session.add_all(movies)
        db.session.commit()

