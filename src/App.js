import "./styles.css";
import { useState } from "react";

const booksList = {
  Fiction: [
    {
      title: "The Help by Kathryn Stockett",
      rating: "4.46/5"
    },
    {
      title: "A Game of Thrones by George Martin",
      rating: "4.45/5"
    },
    {
      title: "A Court of Mist and Fury by Sarah J.Maas",
      rating: "4.7/5"
    },
    {
      title: "The Way of Kings by Brandon Sanderson",
      rating: "4.64/5"
    },
    {
      title: "Clockwork Princess by Cassandra Clare",
      rating: "4.59/5"
    }
  ],
  Scifi: [
    {
      title: "Lilith's Brood by Octavia",
      rating: "4.33/5"
    },
    {
      title: "Dune by Frank Herbert",
      rating: "4.21/5"
    },
    {
      title: "A Wrinkle in Time by Madeline",
      rating: "4/5"
    },
    {
      title: "1984 by George Orwell",
      rating: "4.17/5"
    },
    {
      title: "The Sparrow by Mary Doria",
      rating: "4.3/5"
    }
  ],
  Fantasy: [
    {
      title: "The Name of the Wind by Patrick Rothfuss",
      rating: "4.5/5"
    },
    {
      title: "The Wizard of Earthsea by Ursula Leguin",
      rating: "3.9/5"
    },
    {
      title: "Assassin's Apprentice by Robin Hobb",
      rating: "4.15/5"
    },
    {
      title: "The Lies of Locke Lamora by Scott Lynch",
      rating: "4.2/5"
    },
    {
      title: "Kushiel's Dart by Jacqueline Carey",
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
          var rating = b.rating;
          return (
            <ul>
              <li key={title}>
                <div className="li-title">{title}</div>
                <small className="li-rating">{rating}</small>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
