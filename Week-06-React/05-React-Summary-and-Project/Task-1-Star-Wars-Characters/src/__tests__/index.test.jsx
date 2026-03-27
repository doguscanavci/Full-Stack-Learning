import { beforeEach, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import fs from 'fs';
import path from 'path';

let dom;
let document;

const app = fs
  .readFileSync(path.resolve(__dirname, '../App.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

beforeEach(() => {
  dom = render(<App />);
  document = dom.container;
});

test('Program hatasız bir şekilde çalışıyor', () => {
  screen.getByText(/Karakterler/i);
});

test("1.1 App.jsx'de useEffect kullanılmış ve sayfa mount olduğunda karakterler yükleniyor.", () => {
  expect(app.includes('useEffect(')).toBe(true);
  expect(app.includes(',[])')).toBe(true);
});

test("1.2 axios import edilmiş ve useEffect içinde kullanılmış.", () => {
  const part = app.split("useEffect(")[1];
  expect(app.includes("importaxiosfrom")).toBe(true);
  expect(part.includes("axios.get(")).toBe(true);
  expect(
    part.includes("https://workintech-fe-ecommerce.onrender.com/characters")
  ).toBe(true);
});

test("1.3 useEffect içinde axios ile get isteği atıyor.", () => {
  const part = app.split('useEffect(')[1];
  expect(part.includes('axios.get(')).toBe(true);
  expect(
    part.includes('https://workintech-fe-ecommerce.onrender.com/characters')
  ).toBe(true);
});

test('1.4 Başlangıç değeri boş array olan state tanımlanmış', () => {
  expect(app.includes('useState([])')).toBe(true);
});

test('1.5 Karakterler için map kullanılmış', () => {
  expect(app.includes('.map(')).toBe(true);
});

test("1.6 Her karakter için karakter componenti kullanılmış", () => {
  expect(app.includes('<Karakter')).toBe(true);
});

test("1.7 Karakterler için map yaparken Karakter componentine key propu eklenmiş", () => {
  const part = app.split('<Karakter')[1];
  expect(part.includes('key={')).toBe(true);
});

test("1.7 Karakter componentine prop olarak karakter gönderiliyor", () => {
  const part = app.split('<Karakter')[1];
  expect(part.includes('karakter={')).toBe(true);
});
