import "./styles.css";
import { useState } from "react";

const booksList = {
  Fiction: [
    {
      title: "The Help by Kathryn Stockett",
      detail:
        "The story is an exploration of the ways in which racism pervaded every aspect of social life in 1960s Jackson, Mississipi.",
      rating: "4.46/5"
    },
    {
      title: "A Game of Thrones by George Martin",
      detail:
        "Sweeping from harsh land of cold to a summertime kingdom of epicurean plenty, it tells a tale of lords and ladies, soldiers, sorceres and assassins.",
      rating: "4.45/5"
    },
    {
      title: "A Court of Mist and Fury by Sarah J.Maas",
      detail:
        "The story is about Feyre who navigates a dark web of politics, passion and dazzling power, a greate evil looms and who might just be the key to stopping it.",
      rating: "4.7/5"
    },
    {
      title: "The Way of Kings by Brandon Sanderson",
      detail:
        "In a war that makes no sense where ten armies fight separately against a single foe, Brightlord Daliner saves his men and to fathom the leaders who consider them expendable.",
      rating: "4.64/5"
    },
    {
      title: "Clockwork Princess by Cassandra Clare",
      detail:
        "A net of shadows begins to tighten around the Shadowhunters of the Londn institute. Mortmain plans to use his infernal devices , an army of pitiless automation , to destroy the world of shadow hunters.",
      rating: "4.59/5"
    }
  ],
  Scifi: [
    {
      title: "Lilith's Brood by Octavia",
      detail:
        "It is a story of how Humanity was saved from the war it waged on itself by an alien species.",
      rating: "4.33/5"
    },
    {
      title: "Dune by Frank Herbert",
      detail:
        "Dune tells the story of Paul Atreides, a brillaint and gifted young man born into a great destiny beyond his understanding,who must travel to the most dangerous planet in the universe to ensure th future of his family and his people.",
      rating: "4.21/5"
    },
    {
      title: "A Wrinkle in Time by Madeline",
      detail:
        "The novel offers a glimpse into the war between light and darkness, and good and evil as youg charaters mature into adolescents on their journey.",
      rating: "4/5"
    },
    {
      title: "1984 by George Orwell",
      detail:
        "The story is about an unimagined future in thr year 1984, when much of the world is in perpetual war.",
      rating: "4.17/5"
    },
    {
      title: "The Sparrow by Mary Doria",
      detail:
        "The Sparrow is about a charismatic Jesuit priest who leads a scientific mission to the planet called Rakhat. ",
      rating: "4.3/5"
    }
  ],
  Fantasy: [
    {
      title: "The Name of the Wind by Patrick Rothfuss",
      detail:
        "The is the tale of the magically gifted young man who grows to be the most notorious wizaed his world has ever seen.",
      rating: "4.5/5"
    },
    {
      title: "The Wizard of Earthsea by Ursula Leguin",
      detail:
        "This is the tale of Sparrowhawk's testing , how he mastered the mighty words of power, tamed an ancient dragon and crossed death's threshold to restore the balance.",
      rating: "3.9/5"
    },
    {
      title: "Assassin's Apprentice by Robin Hobb",
      detail:
        "This is a story of a boy who grows into manhood while living as an outsider, a person caught between his two worlds.",
      rating: "4.15/5"
    },
    {
      title: "The Lies of Locke Lamora by Scott Lynch",
      detail:
        "The book is about elite con artists led by their leader Locke Lamora. The story begins with the gang trying to pull off the biggest heist they ever attempted.",
      rating: "4.2/5"
    },
    {
      title: "Kushiel's Dart by Jacqueline Carey",
      detail:
        "A tale about the violent death of an old age and birth of the new.",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const booksArray = Object.keys(booksList);
  const [bookCategory, setCategory] = useState("Fiction");

  function clickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1 className="heading">📚 goodbooks</h1>
      <div className="sub-heading">
        Checkout top books on goodreads. Select a genre to get started
        <hr style={{ color: "black" }} />
      </div>
      <div>
        {booksArray.map((category) => {
          return (
            <button key={category} onClick={() => clickHandler(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <div>
        {Object.values(booksList[bookCategory]).map((b) => {
          var title = b.title;
          var detail = b.detail;
          var rating = b.rating;
          return (
            <ul>
              <li key={title}>
                <div className="li-title">{title}</div>
                <div>{detail}</div>
                <small className="li-rating">{rating}</small>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
