import ListItems from "./components/ListItems";

function App() {
  const items = ["Clay", "Tools", "Clay wheel", "Glaze"];

  return (
    <div>
      <ListItems items={items} heading="List of products"></ListItems>
    </div>
  );
}

export default App;
