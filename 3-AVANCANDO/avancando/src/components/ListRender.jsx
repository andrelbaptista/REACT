import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["André", "Luiz", "Baptista", "André"]);

  const [users, setUsers] = useState([
    { id: 1, name: "André", age: 10 },
    { id: 2, name: "Luiz", age: 20 },
    { id: 3, name: "Baptista", age: 25 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
    prevUsers.filter((user) => randomNumber !== user.id));
  }

  return (
    <div>
      {/* render sem key, pode usar o index da lista, porem n~ao e aconselhado */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* render com key oriunda de chave unica do back-end, neste caso dos objetos acima */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* previus state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
