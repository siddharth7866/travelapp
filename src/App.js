import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Books", quantity: 4, packed: true },
// ];

export default function App() {
  const [items, setitems] = useState([]);

  function Additems(item) {
    setitems((items) => [...items, item]);
  }
  function deleteitems(id) {
    console.log(id);
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function onClear() {
    const confirmed = window.confirm("Do you want to delete everything!");
    if (confirmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={Additems} />
      <Packinglist
        item={items}
        ondeleteitems={deleteitems}
        toggle={handleToggleItem}
        clearfunc={onClear}
      />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far away</h1>;
}

function Form({ onAdd }) {
  const [description, setDesc] = useState("");
  const [quantity, setquant] = useState("1");

  function sidSubmit(sid) {
    sid.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: 10214756 };
    console.log(newItem);
    onAdd(newItem);

    setDesc("");
    setquant("");
  }
  return (
    <form className="add-form" onSubmit={sidSubmit}>
      <h3>What do you want for your travel?</h3>
      <select value={quantity} onChange={(e) => setquant(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function Packinglist({ item, ondeleteitems, toggle, clearfunc }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            items={item}
            key={item.id}
            ondeleteitem={ondeleteitems}
            linecross={toggle}
            clear={clearfunc}
          />
        ))}
      </ul>
      <button onClick={() => clearfunc()}>Clear List</button>
    </div>
  );
}

function Item({ items, ondeleteitem, linecross }) {
  return (
    <li>
      <input type="checkbox" onChange={() => linecross(items.id)} />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity}
        {items.description}
      </span>
      <button onClick={() => ondeleteitem(items.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x item on your list and you already packed x</em>
    </footer>
  );
}
