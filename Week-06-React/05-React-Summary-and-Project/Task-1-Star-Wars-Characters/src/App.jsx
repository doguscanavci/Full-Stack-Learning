import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Karakter from './components/Karakter';

const App = () => {
  /*
   ADIM 1: Uygulama yüklendiğinde axios ile karakter datasını çekin:
    GET: https://workintech-fe-ecommerce.onrender.com/characters
   * Bu datayı bir state'e aktarın.
   * JSX'de; karakterler state'indeki her bir karakter'i .map ile Karakter component'ine gönderelim.
  */

  const [karakterler, setKarakterler] = useState([]);

  useEffect(() => {
    axios
      .get('https://workintech-fe-ecommerce.onrender.com/characters')
      .then((res) => {
        setKarakterler(res.data);
      })
      .catch((err) => {
        console.error('Hata oluştu:', err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {karakterler.map((karakter, index) => (
        <Karakter key={index} karakter={karakter} />
      ))}
    </div>
  );
};

export default App;
