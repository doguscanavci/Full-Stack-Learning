import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notlariAlAPI } from '../store/actions';
import Post from './Post';

export default function PostList() {
  const dispatch = useDispatch();
  const notlar = useSelector((state) => state.notlar);

  useEffect(() => {
    dispatch(notlariAlAPI());
  }, [dispatch]);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok...</div>
  ) : (
    notlar.map((not) => <Post item={not} key={not.id} />)
  );
}
