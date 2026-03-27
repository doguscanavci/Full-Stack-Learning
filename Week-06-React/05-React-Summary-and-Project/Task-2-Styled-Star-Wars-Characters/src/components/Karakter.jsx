import React from 'react';
import styled from 'styled-components';
import Film from './Film';

const KarakterCard = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 15px auto;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

// 3.3 Paragraf componenti p tagi için oluşturuldu
const Paragraf = styled.p`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 5px 0;
  margin: 8px 0;
`;

// 3.4 .label class'ı yerine Label componenti
const Label = styled.span`
  font-weight: normal;
  color: #555;
`;

// 3.5 .value class'ı yerine Value componenti
const Value = styled.span`
  font-weight: bold;
  color: #000;
`;

export const Karakter = ({ karakter, filmler }) => {
  return (
    <KarakterCard>
      <h3>{karakter.name}</h3>

      {/* Verileri Paragraf, Label ve Value ile sarmalıyoruz */}
      <Paragraf>
        <Label>Birth year</Label>
        <Value>{karakter.birth_year}</Value>
      </Paragraf>

      <Paragraf>
        <Label>Eye color</Label>
        <Value>{karakter.eye_color}</Value>
      </Paragraf>

      <Paragraf>
        <Label>Gender</Label>
        <Value>{karakter.gender}</Value>
      </Paragraf>

      <Paragraf>
        <Label>Height</Label>
        <Value>{karakter.height}</Value>
      </Paragraf>

      <Paragraf>
        <Label>Mass</Label>
        <Value>{karakter.mass}</Value>
      </Paragraf>

      <Paragraf>
        <Label>Skin color</Label>
        <Value>{karakter.skin_color}</Value>
      </Paragraf>

      <h4>Filmler:</h4>
      {/* ADIM 2: 
      karakterin her filmini .map ile dönerek gelen filmler datasından filmin datasını bulup(.find) Film component'ine gönderebilirsiniz.*/}
      {karakter.films.map((filmTitle, index) => {
        const bulunanFilm = filmler.find((f) => f.title === filmTitle);
        return <Film key={index} filmData={bulunanFilm} />;
      })}
    </KarakterCard>
  );
};
