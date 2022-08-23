import React from "react";
import card from "../apis/card";
import { useState, useEffect } from "react";
import UniqueCard from "./UniqueCard";
import { Container, Typography } from '@mui/material';

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(card);
  }, []);

  console.log(card);

  return (
    <Container >
      <section className="d-flex mt-5 gap-3 justify-content-around flex-wrap">
        {cards.map((card, index) => {
          // !stateteki ilk değeri maple
          return <UniqueCard key={index} card={card} />;
        })}
      </section>
    </Container>
  );
};

export default Card;
