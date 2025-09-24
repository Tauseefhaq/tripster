import { useListContext } from "../contexts/trips";
import { useEffect } from "react";
import "../css/popup.css"

function ItemModal() {
  const { selectedItem, isModalOpen, setisModalOpen } = useListContext();

    useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen || !selectedItem) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <img src={selectedItem.img} alt={selectedItem.title} />
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.des}</p>
        <p className="price" dangerouslySetInnerHTML={{ __html: selectedItem.price }} />
        <button className="book">Book Now</button>
        <button className="close" onClick={() => setisModalOpen(false)}>Close</button>
      </div>
    </div>
  );
}

export default ItemModal;


