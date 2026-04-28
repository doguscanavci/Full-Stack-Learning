import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

function AddFriend() {
  const { authInfo } = useAuth();

  const token = authInfo?.token;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const history = useHistory();

  const addFriendSubmit = (data) => {
    const postData = { ...data, age: Number(data.age) };

    axios
      .post(
        'https://nextgen-project.onrender.com/api/s11d2/friends',
        postData,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(function (response) {
        history.push('/friends');
      })
      .catch(function (error) {
        console.log('Ekleme hatası:', error);
      });
  };

  return (
    <div className="loginFormMainDiv">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit(addFriendSubmit)}>
        <div>
          <input
            type="text"
            placeholder="name"
            {...register('name', { required: 'Ama adın ne?' })}
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register('email', {
              required: 'Epostanı ver ki spamlayalım.',
            })}
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="age"
            {...register('age', {
              required: 'yaş kaç',
            })}
          />
          {errors?.age && <p>{errors.age.message}</p>}
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddFriend;
