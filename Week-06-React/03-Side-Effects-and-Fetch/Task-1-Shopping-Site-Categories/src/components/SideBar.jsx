import { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import axios from 'axios';

export default function SideBar() {
  const [categories, setCategories] = useState([]);
  /* ADIM 1: Bir state tanımlayabilirsin */
  /* ADIM 2: kategorileri buradan alıp CategoryList'e yollayabilirsin: https://fakestoreapi.com/products/categories */
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </div>
    </>
  );
}
