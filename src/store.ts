import { configureStore } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



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

  
const { addUser, deleteUser, reseteUsers } = userSlice.actions;   

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },    
  
}); 