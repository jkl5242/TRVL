import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import card9 from "../assets/images/img-9.jpg";
import card2 from "../assets/images/img-2.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Check out these EPIC destinations!
        <div class="cards__container">
          <div class="cards__wrapper">
            <ul class="cards__items">
              <CardItem
                src={card9}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={card2}
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Cards;
