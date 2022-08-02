import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
const Counter = () => {
  const [clicked, setClicked] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setClicked(!clicked);
    // setCounter(counter + 1);
    localStorage.setItem("counter", JSON.stringify(counter));
  };

  return (
    <div>
      <span>
        {" "}
        <FiHeart
          size={20}
          className={clicked && "togg"}
          onClick={handleClick}
        />{" "}
        LIKE
      </span>
    </div>
  );
};

export default Counter;
