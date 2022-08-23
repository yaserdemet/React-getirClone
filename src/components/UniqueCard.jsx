import React from "react";
import { useState } from "react";
import {Button} from "@mui/material"

//? import {x} from "@mui/material"


const UniqueCard = ({ card }) => {
  const [read, setRead] = useState(false);
  const { desc, title, image } = card;
  return (
    <div>
      <div className="card" style={{ width: "18rem", height: "32rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{read ? `${desc.substring(0,15)}`: desc}</p>

          <div className="mt-5">
            <Button onClick={() => setRead(!read)} color="secondary" variant="contained">
              {/* // içine bir parametre alıyorsa () => abc  şeklinde yaz */}
              {!read ? "Read Less" : "Read More"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueCard;
