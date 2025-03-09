import { useAppSelector } from './store';

export const UserList = () => {

  const Users = useAppSelector((state) => state.user.users);


  return (
    <>
      <div>
        {Users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <button onClick={() => { }}>Delete</button>
          </div>
        ))}
      </div>
    </>


  );
};
