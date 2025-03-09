import { configureStore } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';




type User = {
  name: string
  age: number
  id: string
          
};    

type initialState = {
    users: User[];
};

const initialState: initialState = {
    users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      addUser: (state, {payload}: PayloadAction<User>) => {
        state.users.push( payload);
      },
      deleteUser: (state, {payload}: PayloadAction<string>) => {
        state.users = state.users.filter((user) => user.id !== payload);
      },
      reseteUsers: (state) => {
        state.users = [];
      },

    },
});

  
export const {   addUser,   deleteUser,   reseteUsers } = userSlice.actions;   

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },    
  
}); 

type RootState = ReturnType<typeof store.getState>; 

type Dispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Dispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();