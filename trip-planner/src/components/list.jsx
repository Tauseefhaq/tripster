import { useContext } from "react";
import { ListContext } from "../contexts/trips";
import "../css/list.css";

function ItemList() {
  const { items, setSelectedItem, setisModalOpen } = useContext(ListContext);

  const handleClick = (item) => {
    console.log("Clicked", item.title)
    setSelectedItem(item);
    setisModalOpen(true);
  };

  return (
    <div className="holder">
      {items.map((item, index) => (
        <div className="list" key={index} >
            <div className="title">
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
            </div>

            <div className="container">
              <p dangerouslySetInnerHTML={{ __html: item.price }} />
              <button className="info" onClick={() => handleClick(item)} >More Info</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

