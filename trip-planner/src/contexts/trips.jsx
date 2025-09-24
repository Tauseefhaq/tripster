import { createContext, useContext, useState } from "react";

import bali1 from "../assets/bali_1.jpg";
import istanbul from "../assets/istanbul.jpg";
import marrakech from "../assets/marrakech.jpg";
import sicily from "../assets/sicily1.jpg";
import barcelona from "../assets/barcelona.jpg";
import hanoi from "../assets/hanoi.jpg";
import bangkok from "../assets/bangkok.jpg";
import rome from "../assets/rome.jpg";
import paris from "../assets/paris.jpg";

export const ListContext = createContext();

export function TripItems({ children }) {
  const [items] = useState([
    {
      title: "Bali",
      des: "Island paradise of vibrant culture, stunning volcanic landscapes, and spiritual serenity.",
      img: bali1,
      price: "Starting at only &#8377;20k/person",
    },
    {
      title: "Istanbul",
      des: " The majestic crossroads of Europe and Asia, where Byzantine churches and Ottoman mosques meet the bazaar.",
      img: istanbul,
      price: "Starting at only &#8377;12k/person",
    },
    {
      title: "Marrakech",
      des: " A sensory overload within red-clay walls, from the Djemaa el-Fna square to its labyrinthine souks.",
      img: marrakech,
      price: "Starting at only &#8377;8k/person",
    },
    {
      title: "Sicily",
      des: "A sun-drenched Mediterranean island of ancient Greek ruins, majestic volcanoes, and incredible cuisine.",
      img: sicily,
      price: "Starting at only &#8377;22k/person",
    },
    {
      title: "Barcelona",
      des: "Gaudí's modernist masterpiece, buzzing with Mediterranean energy on the coast.",
      img: barcelona,
      price: "Starting at only &#8377;30k/person",
    },
    {
      title: "Hanoi",
      des: "A captivating blend of French colonial architecture, ancient temples, and buzzing motorbike-filled streets.",
      img: hanoi,
      price: "Starting at only &#8377;15k/person",
    },
    {
      title: "Bangkok",
      des: "A thrilling chaos of golden temples, towering skyscrapers, vibrant street food, and non-stop nightlife.",
      img: bangkok,
      price: "Starting at only &#8377;10k/person",
    },
    {
      title: "Rome",
      des: "An open-air museum where ancient empire grandeur lives alongside vibrant Italian life.",
      img: rome,
      price: "Starting at only &#8377;25k/person",
    },
    {
      title: "Paris",
      des: " The timeless City of Light, renowned for its art, pastry-perfumed cafes, and elegant romance.",
      img: paris,
      price: "Starting at only &#8377;30k/person",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <ListContext.Provider
      value={{
        items,
        selectedItem,
        setSelectedItem,
        isModalOpen,
        setisModalOpen,
      }}
    >{children}</ListContext.Provider>
  );
}
export const useListContext = () => useContext(ListContext);
