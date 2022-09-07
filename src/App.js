import "./App.css";
import React, { useEffect, useState } from "react";

function Clock() {
  let [time, setTime] = useState(new Date());
  let [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (isVisible === true) {
        setTime(new Date());
        console.log(time);
      }
    }, 1000);

    return function clear() {
      clearInterval(intervalRef);
    };
  });

  let clock;
  let button = <button onClick={() => setVisibility(false)}>Disappear!</button>;

  if (isVisible === false) {
    clock = null;
    button = <button onClick={() => setVisibility(true)}>Appear!</button>;
  } else {
    clock = <h2>It is {time.toLocaleTimeString()}</h2>;
  }

  return (
    <div>
      {clock}
      {button}
    </div>
  );
}

export default Clock;
