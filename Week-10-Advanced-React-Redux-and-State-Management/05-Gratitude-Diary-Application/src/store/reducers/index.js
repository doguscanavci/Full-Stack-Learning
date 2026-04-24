import { NOTLARI_AL, NOT_EKLE, NOT_SIL } from '../actions';

const s10chLocalStorageKey = 's10d5';

const baslangicDegerleri = {
  notlar: [],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);
  if (eskiNotlar !== null) {
    return localStorageStateOku(key);
  } else {
    localStorageStateYaz(key, baslangicDegerleri);
    return baslangicDegerleri;
  }
}

// Başlangıç state'ini localStorage'dan alıyoruz
const initialState = baslangicNotlariniGetir(s10chLocalStorageKey);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NOTLARI_AL:
      const stateWithNotes = { ...state, notlar: action.payload };
      localStorageStateYaz(s10chLocalStorageKey, stateWithNotes);
      return stateWithNotes;

    case NOT_EKLE:
      const stateAfterAdd = { ...state, notlar: [action.payload, ...state.notlar] };
      localStorageStateYaz(s10chLocalStorageKey, stateAfterAdd);
      return stateAfterAdd;

    case NOT_SIL:
      const stateAfterDelete = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, stateAfterDelete);
      return stateAfterDelete;

    default:
      return state;
  }
}