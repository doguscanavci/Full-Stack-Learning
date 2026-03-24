import React, { useState } from 'react';
import './App.css';
import sahteVeri from './sahteVeri';
import AramaCubugu from './components/AramaCubugu/AramaCubugu';
import Gonderiler from './components/Gonderiler/Gonderiler';
/* 
ADIM 1: gerekli componentleri ve sahteVeri'yi import edin 
*/

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('');

  const aramaHandler = (value) => {
    setAramaKriteri(value);
    if (value === '') {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuclari = gonderiler.filter((gonderi) => {
      if (gonderi.username.includes(value)) {
        return gonderi;
      } else {
        return false;
      }
    });
    setGonderiler(aramaSonuclari);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      {/*
        ADIM 2: AramaCubugu ve Gonderiler component'ini ekleyin.
        Önce bu comoponentleri inceleyin. Hangi proplara ihtiyacı var?
        */}
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
