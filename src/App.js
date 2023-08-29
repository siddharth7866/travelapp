export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
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
