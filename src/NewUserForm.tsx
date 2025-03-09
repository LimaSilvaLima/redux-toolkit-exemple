import { useRef } from 'react';
import { useAppDispatch, addUser, reseteUsers } from './store';

export const NewUserForm = () => {

  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefAge = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {

    if (!inputRefName.current?.value || !inputRefAge.current?.value) {
      return;
    }

    dispatch(addUser({
      name: String(inputRefName.current?.value),
      age: Number(inputRefAge.current?.value),
      id: Math.random().toString(),
    }));
  };

  const resetAllUssers = () => {
    dispatch(reseteUsers());
  };

  return (
    <div>
      <p>User name</p>
      <input ref={inputRefName.current?.value} type="text" />
      <p>User age</p>
      <input ref={inputRefAge.current?.value} type="text" />
      <button onClick={handleSubmit}>Adicionar User</button>
      <button onClick={resetAllUssers}>Reset Users</button>
    </div>
  );
};
