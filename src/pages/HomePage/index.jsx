import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const readJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const json = await response.json();
      setJokes(json.data);
    };
    readJokes();
  }, []);

  return (
    <div className="container">
      {jokes !== null &&
        jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
    </div>
  );
};
