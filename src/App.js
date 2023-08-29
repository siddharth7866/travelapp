export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you want for your travel?</h3>
    </div>
  );
}

function Packinglist() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x item on your list and you already packed x</em>
    </footer>
  );
}
