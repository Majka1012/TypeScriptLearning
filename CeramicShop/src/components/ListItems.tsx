import { useState } from "react";

function ListItems() {
  const items = ["Clay", "Tools", "Clay wheel", "Glaze"];
  // const handleClick = (event: React.MouseEvent) => console.log(event);
  const [sellectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Using shortcut to add Fragment
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={sellectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListItems;
