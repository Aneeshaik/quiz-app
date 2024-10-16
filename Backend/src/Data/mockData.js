const mongoose = require('mongoose');
const Question = require('../models/Question');
const connectDB = require('../../db')

connectDB()

const insertData = async() => {
    try{
        const count = await Question.countDocuments();
        if(count === 0) {

const mockData = [
    // General Knowledge
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "If someone said &quot;you are olid&quot;, what would they mean?",
        "correct_answer": "You smell extremely unpleasant.",
        "incorrect_answers": [
            "You are out of shape/weak.",
            "Your appearance is repulsive.",
            "You are incomprehensible/an idiot."
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "In flight systems, what does the initialism &quot;TCAS&quot; stand for?",
        "correct_answer": "Traffic Collision Avoidance System",
        "incorrect_answers": [
            "Traffic Communication Alert System",
            "Traffic Configuration Alignment System",
            "Traffic Call-sign Abbreviation System"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "Which of the General Mills Corporation&#039;s monster cereals was the last to be released in the 1970&#039;s?",
        "correct_answer": "Fruit Brute",
        "incorrect_answers": [
            "Count Chocula",
            "Franken Berry",
            "Boo-Berry"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "What is the highest number of Michelin stars a restaurant can receive?",
        "correct_answer": "Three",
        "incorrect_answers": [
            "Four",
            "Five",
            "Six"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Area 51 is located in which US state?",
        "correct_answer": "Nevada",
        "incorrect_answers": [
            "Arizona",
            "New Mexico",
            "Utah"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "Which church&#039;s interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?",
        "correct_answer": "St. Peter&#039;s Basilica",
        "incorrect_answers": [
            "Catania Cathedral",
            "St. Mark&rsquo;s Basilica",
            "The Duomo of Florence"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "Rolex is a company that specializes in what type of product?",
        "correct_answer": "Watches",
        "incorrect_answers": [
            "Cars",
            "Computers",
            "Sports equipment"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which of the following is not the host of a program on NPR?",
        "correct_answer": "Ben Shapiro",
        "incorrect_answers": [
            "Terry Gross",
            "Ira Glass",
            "Peter Sagal"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "hard",
        "category": "General Knowledge",
        "question": "Who founded the Khan Academy?",
        "correct_answer": "Sal Khan",
        "incorrect_answers": [
            "Ben Khan",
            "Kitt Khan",
            "Adel Khan"
        ]
    },
    {
        "id": 1,
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "Who is a co-founder of music streaming service Spotify?",
        "correct_answer": "Daniel Ek",
        "incorrect_answers": [
            "Sean Parker",
            "Felix Miller",
            "Michael Breidenbruecker"
        ]
    },

    // Entertainment : Books   
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Television",
        "question": "Who played the sun baby in the original run of Teletubbies?",
        "correct_answer": "Jessica Smith",
        "incorrect_answers": [
            "Pui Fan Lee",
            "Sue Monroe",
            "Lisa Brockwell"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "EDM record label Monstercat is based in which country?",
        "correct_answer": "Canada",
        "incorrect_answers": [
            "United States",
            "Australia",
            "United Kingdom"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "easy",
        "category": "History",
        "question": "In which year did the Invasion of Kuwait by Iraq occur?",
        "correct_answer": "1990",
        "incorrect_answers": [
            "1992",
            "1988",
            "1986"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "The 1952 musical composition 4&#039;33&quot;, composed by prolific American composer John Cage, is mainly comprised of what sound?",
        "correct_answer": "Silence",
        "incorrect_answers": [
            "Farts",
            "People talking",
            "Cricket chirps"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Science: Computers",
        "question": "What is the number of keys on a standard Windows Keyboard?",
        "correct_answer": "104",
        "incorrect_answers": [
            "64",
            "94",
            "76"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Video Games",
        "question": "What was Frank West&#039;s job in &quot;Dead Rising&quot;?",
        "correct_answer": "Photojournalist",
        "incorrect_answers": [
            "Janitor",
            "Chef",
            "Taxi Driver"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Cartoon &amp; Animations",
        "question": "Who voice acted the character Hiccup in the movie &quot;How to Train Your Dragon&quot;?",
        "correct_answer": "Jay Baruchel",
        "incorrect_answers": [
            "Jack Brauchel",
            "John Powell",
            "Gerard Butler"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Film",
        "question": "What did the first moving picture depict?",
        "correct_answer": "A galloping horse",
        "incorrect_answers": [
            "A woman in a dress",
            "A man walking",
            "A crackling fire"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Books",
        "question": "What book series published by Jim Butcher follows a wizard in modern day Chicago?",
        "correct_answer": "The Dresden Files",
        "incorrect_answers": [
            "A Hat in Time",
            "The Cinder Spires",
            "My Life as a Teenage Wizard"
        ]
    },
    {
        "id": 2,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Science: Computers",
        "question": "Which of these is not a layer in the OSI model for data communications?",
        "correct_answer": "Connection Layer",
        "incorrect_answers": [
            "Application Layer",
            "Transport Layer",
            "Physical Layer"
        ]
    },

    // Entertainment: Film
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Film",
        "question": "Who plays Jack Burton in the movie &quot;Big Trouble in Little China?&quot;",
        "correct_answer": "Kurt Russell",
        "incorrect_answers": [
            "Patrick Swayze",
            "John Cusack",
            "Harrison Ford"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Entertainment: Film",
        "question": "What was the name of the actor who played Leatherface in the 1974 horror film, The Texas Chainsaw Massacre?",
        "correct_answer": "Gunnar Hansen",
        "incorrect_answers": [
            "Edwin Neal",
            "John Dugan",
            "Joe Bill Hogan"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "In the 1979 British film &quot;Quadrophenia&quot; what is the name of the seaside city the mods are visiting?",
        "correct_answer": "Brighton",
        "incorrect_answers": [
            "Eastbourne",
            "Mousehole",
            "Bridlington"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "In the 1999 movie Fight Club, which of these is not a rule of the &quot;fight club&quot;?",
        "correct_answer": "Always wear a shirt",
        "incorrect_answers": [
            "You do not talk about FIGHT CLUB",
            "Only two guys to a fight",
            "Fights will go on as long as they have to"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
        "correct_answer": "Sugar",
        "incorrect_answers": [
            "Honey",
            "Caramel",
            "Candy"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "In the 1971 film &quot;Willy Wonka &amp; the Chocolate Factory&quot;, who played Willy Wonka?",
        "correct_answer": "Gene Wilder",
        "incorrect_answers": [
            "Shia LeBouf",
            "Peter Ostrum",
            "Johnny Depp"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "What year did the James Cameron film &quot;Titanic&quot; come out in theaters?",
        "correct_answer": "1997",
        "incorrect_answers": [
            "1996",
            "1998",
            "1999"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Film",
        "question": "In &quot;Jurassic World&quot;, what is the name of the dinosaur that is a genetic hybrid?",
        "correct_answer": "Indominus Rex",
        "incorrect_answers": [
            "Mosasaurus",
            "Pteranodon",
            "Tyrannosaurus Rex "
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "Which movie of film director Stanley Kubrick is known to be an adaptation of a Stephen King novel?",
        "correct_answer": "The Shining",
        "incorrect_answers": [
            "2001: A Space Odyssey",
            " Dr. Strangelove ",
            "Eyes Wide Shut"
        ]
    },
    {
        "id": 3,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Film",
        "question": "What is the name of James Dean&#039;s character in the 1955 movie &quot;Rebel Without a Cause&quot;?",
        "correct_answer": "Jim Stark",
        "incorrect_answers": [
            "Ned Stark",
            "Jim Kane",
            "Frank Stark"
        ]
    },
    // Sports
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
        "correct_answer": "Sunderland FC",
        "incorrect_answers": [
            "Barcelona FC",
            "Paris Saints-Germain",
            "Manchester United"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Which car manufacturer won the 2017 24 Hours of Le Mans?",
        "correct_answer": "Porsche",
        "incorrect_answers": [
            "Toyota",
            "Audi",
            "Chevrolet"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "In a game of snooker, what colour ball is worth 3 points?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Yellow",
            "Brown",
            "Blue"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
        "correct_answer": "Nico Rosberg",
        "incorrect_answers": [
            "Lewis Hamilton",
            "Max Verstappen",
            "Kimi Raikkonen"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Sports",
        "question": "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
        "correct_answer": "Mazda",
        "incorrect_answers": [
            "Toyota",
            "Subaru",
            "Nissan"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "Who won the UEFA Champions League in 2017?",
        "correct_answer": "Real Madrid C.F.",
        "incorrect_answers": [
            "Atletico Madrid",
            "AS Monaco FC",
            "Juventus F.C."
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Sports",
        "question": "Where was the Games of the XXII Olympiad held?",
        "correct_answer": "Moscow",
        "incorrect_answers": [
            "Barcelona",
            "Tokyo",
            "Los Angeles"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        "correct_answer": "Leicester City",
        "incorrect_answers": [
            "Tottenham Hotspur",
            "Watford",
            "Stoke City"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Sports",
        "question": "Which country hosted the 2018 FIFA World Cup?",
        "correct_answer": "Russia",
        "incorrect_answers": [
            "Germany",
            "United States",
            "Saudi Arabia"
        ]
    },
    {
        "id": 4,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Who was the top scorer of the 2014 FIFA World Cup?",
        "correct_answer": "James Rodr&iacute;guez",
        "incorrect_answers": [
            "Thomas M&uuml;ller",
            "Lionel Messi",
            "Neymar"
        ]
    },
    // History
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "When did Jamaica recieve its independence from England? ",
        "correct_answer": "1962",
        "incorrect_answers": [
            "1492",
            "1963",
            "1987"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
        "correct_answer": "John and Mary",
        "incorrect_answers": [
            "Joseph and Catherine",
            "William and Elizabeth",
            "George and Anne"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "easy",
        "category": "History",
        "question": "Which modern day country is the region that was known as Phrygia in ancient times?",
        "correct_answer": "Turkey",
        "incorrect_answers": [
            "Syria",
            "Greece",
            "Egypt"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "In relation to the British Occupation in Ireland, what does the IRA stand for.",
        "correct_answer": "Irish Republican Army",
        "incorrect_answers": [
            "Irish Rebel Alliance",
            "Irish Reformation Army",
            "Irish-Royal Alliance"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
        "correct_answer": "Battle of Midway",
        "incorrect_answers": [
            "Attack on Truk Island",
            "Attack on Pearl Harbor",
            "Battle of the Coral Sea"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "The main objective of the German operation &quot;Case Blue&quot; during World War II was originally to capture what?",
        "correct_answer": "Caucasus",
        "incorrect_answers": [
            "Stalingrad",
            "Crimea",
            "Voronezh"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "hard",
        "category": "History",
        "question": "Who was the first man to travel into outer space twice?",
        "correct_answer": "Gus Grissom",
        "incorrect_answers": [
            "Vladimir Komarov",
            "Charles Conrad",
            "Yuri Gagarin"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "What was the bloodiest single-day battle during the American Civil War?",
        "correct_answer": "The Battle of Antietam",
        "incorrect_answers": [
            "The Siege of Vicksburg",
            "The Battle of Gettysburg",
            "The Battles of Chancellorsville"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "Which of these founding fathers of the United States of America later became president?",
        "correct_answer": "James Monroe",
        "incorrect_answers": [
            "Alexander Hamilton",
            "Samuel Adams",
            "Roger Sherman"
        ]
    },
    {
        "id": 5,
        "type": "multiple",
        "difficulty": "medium",
        "category": "History",
        "question": "Who was the last Roman emperor in the Year of Four Emperors (69 AD)?",
        "correct_answer": "Vespasian",
        "incorrect_answers": [
            "Vitellius",
            "Otho",
            "Galba"
        ]
    },
    // Animals
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "&quot;Decapods&quot; are an order of ten-footed crustaceans.  Which of these are NOT decapods?",
        "correct_answer": "Krill",
        "incorrect_answers": [
            "Lobsters",
            "Shrimp",
            "Crabs"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Animals",
        "question": "Which species of Brown Bear is not extinct?",
        "correct_answer": "Syrian Brown Bear",
        "incorrect_answers": [
            "California Grizzly Bear",
            "Atlas Bear",
            "Mexican Grizzly Bear"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "For what reason would a spotted hyena &quot;laugh&quot;?",
        "correct_answer": "Nervousness",
        "incorrect_answers": [
            "Excitement",
            "Aggression",
            "Exhaustion"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Animals",
        "question": "Which of these animals is NOT a lizard?",
        "correct_answer": "Tuatara",
        "incorrect_answers": [
            "Komodo Dragon",
            "Gila Monster",
            "Green Iguana"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Animals",
        "question": "What scientific family does the Aardwolf belong to?",
        "correct_answer": "Hyaenidae",
        "incorrect_answers": [
            "Canidae",
            "Felidae",
            "Eupleridae"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Animals",
        "question": "What type of creature is a Bonobo?",
        "correct_answer": "Ape",
        "incorrect_answers": [
            "Lion",
            "Parrot",
            "Wildcat"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "medium",
        "category": "Animals",
        "question": "What are rhino&#039;s horn made of?",
        "correct_answer": "Keratin",
        "incorrect_answers": [
            "Bone",
            "Ivory",
            "Skin"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "hard",
        "category": "Animals",
        "question": "What is the scientific name of the Budgerigar?",
        "correct_answer": "Melopsittacus undulatus",
        "incorrect_answers": [
            "Nymphicus hollandicus",
            "Pyrrhura molinae",
            "Ara macao"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Animals",
        "question": "By definition, where does an abyssopelagic animal live?",
        "correct_answer": "At the bottom of the ocean",
        "incorrect_answers": [
            "In the desert",
            "On top of a mountain",
            "Inside a tree"
        ]
    },
    {
        "id": 6,
        "type": "multiple",
        "difficulty": "easy",
        "category": "Animals",
        "question": "Hippocampus is the Latin name for which marine creature?",
        "correct_answer": "Seahorse",
        "incorrect_answers": [
            "Dolphin",
            "Whale",
            "Octopus"
        ]
    }
]
    await Question.insertMany(mockData);
      console.log('Mock data inserted successfully.');
    } else {
      console.log('Questions already exist in the database. Skipping insertion.');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // mongoose.connection.close();
  }
}

module.exports = insertData
// module.exports = mockData