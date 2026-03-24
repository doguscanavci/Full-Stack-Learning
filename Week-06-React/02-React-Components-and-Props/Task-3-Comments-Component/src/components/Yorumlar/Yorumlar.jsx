import React from 'react';
import './Yorumlar.css';
import Yorum from '../Yorumlar/Yorum';
/* ADIM 1: Yorum component'ini import edelim */

const Yorumlar = (props) => {
  const { yorumlar } = props;
  /* ADIM 2: yorumları parent component'den prop olarak alalım */
  return (
    <div>
      {/* ADIM 3: her Yorum için Yorum component'ini çalıştıralım. */}
      {yorumlar.map((yorum) => {
        return <Yorum yorum={yorum} />;
      })}
    </div>
  );
};

export default Yorumlar;
