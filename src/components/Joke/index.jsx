import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [onLikes, setOnLikes] = useState(0);
  const [onDislikes, setOnDislikes] = useState(0);

  const handleClickLike = () => {
    setOnLikes(onLikes + 1);
  };

  const handleClickDislike = () => {
    setOnDislikes(onDislikes + 1);
  };

  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={userAvatar} />
          <p class="user-name">{userName}</p>
        </div>
        <p class="joke__text">{text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={handleClickLike}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {onLikes}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={handleClickDislike}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {onDislikes}
        </span>
      </div>
    </div>
  );
};
