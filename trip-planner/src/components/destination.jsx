import bali1 from "../assets/bali_1.jpg";
import bali2 from "../assets/bali_2.jpeg";
import sicily1 from "../assets/sicily1.jpg";
import sicily2 from "../assets/sicily2.jpg";
import barcelona2 from "../assets/barcelona2.jpg";
import barcelona from "../assets/barcelona.jpg";
import "../css/destination.css";
import DestinationData from "../contexts/destinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>POPULAR DESTINATIONS</h1>
      <p>
        Travels helps you create precious memories with the ones you cherish
      </p>
      <DestinationData
        class="first-des"
        heading="Bali"
        text="Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship. On shore, the lush jungle shelters stone temples and mischievous monkeys. The “artistic capital” of Ubud is the perfect place to see a cultural dance performance, take a batik or silver-smithing workshop, or invigorate your mind and body in a yoga class."
        img1={bali1}
        img2={bali2}
      ></DestinationData>
      <DestinationData
        class="first-des2"
        heading="Sicily"
        text="The Mediterranean's biggest island is separated from the mainland by the Strait of Messina. A mountainous spot, Sicily's coast and its small islands sit at the foot of volcanoes, including Etna, Stromboli and Vulcano. The Greeks, Romans, Normans and Catalans all left their mark on the island in the form of Byzantine palaces, Gothic castles and Baroque flourishes in capital Palermo. Most larger towns offer interesting museums, but Etna and the Hellenic temples in Agrigento offer particularly unique sights."
        img1={sicily1}
        img2={sicily2}
      ></DestinationData>
      <DestinationData
        class="first-des"
        heading="Barcelona"
        text="Stroll Las Ramblas and enjoy Barcelona's unique blend of Catalan culture, distinctive architecture, lively nightlife and trendy, stylish hotels. You'll find Europe's best-preserved Gothic Quarter here, as well as amazing architectural works by Gaudi. La Sagrada Familia, considered Gaudi's masterpiece, is still under construction (your entrance fee helps to fund the project). Feel like a picnic? Look no further than the rambunctious La Boqueria market, where you can stock up on local delicacies."
        img1={barcelona}
        img2={barcelona2}
      ></DestinationData>
    </div>
  );
}

export default Destination;
