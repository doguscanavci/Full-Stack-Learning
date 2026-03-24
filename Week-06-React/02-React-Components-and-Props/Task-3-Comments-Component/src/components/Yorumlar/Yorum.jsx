import React from 'react';

const Yorum = (props) => {
  const { yorum } = props;
  const { username, text } = yorum;
  /* ADIM 4: Yorumların ekranda isim ve yorum şeklinde görünmesini sağlayalım. sahteVeri'ye bakabilirsin */

  return (
    <div className="comment-text" data-testid="yorum-area">
      <span className="user">{username}</span>{' '}
      <span className="comment">{text}</span>
    </div>
  );
};

export default Yorum;
