import {createSlice, nanoid} from '@reduxjs/toolkit';

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  storageBackend: AsyncStorage,
});

const initialState = {
  email: '',
  token: storage.load({key: 'token'}).then(res => res) || null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: {
      reducer(state, action) {
        state.token = action.payload;
      },
      prepare() {
        const token = nanoid(4);

        storage.save({
          key: 'token',
          data: token,
        });

        return {
          payload: token,
        };
      },
    },
    logout: {
      reducer(state, action) {
        state.token = action.payload;
      },
      prepare() {
        storage.remove({
          key: 'token',
        });

        return {
          payload: null,
        };
      },
    },
  },
});

export const {login, logout} = userReducer.actions;

export default userReducer.reducer;
