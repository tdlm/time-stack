import React, { useState } from "react";

import { formatEventList } from "../utilities/time";
import { sortArrayByProperty } from "../utilities/array";

import CountdownCard from "./CountdownCard";

import "./CountdownList.scss";

const CountdownList = ({ list }) => {
  let [currentTime, setCurrentTime] = useState(new Date());

  list = formatEventList(list);
  list = sortArrayByProperty(list, "daysUntil", "descending");

  React.useEffect(() => {
    let handle = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60); // Update once every minute.

    return () => clearInterval(handle);
  }, [currentTime, setCurrentTime]);

  return (
    <ul className="countdown-list">
      {list.map((countdown) => {
        let {
          type,
          title,
          gender,
          date,
          daysUntil,
          image,
          repeating,
        } = countdown;
        return (
          <li className="countdowns__item" key={countdown.slug}>
            <CountdownCard
              type={type}
              title={title}
              gender={gender}
              date={date}
              daysUntil={daysUntil}
              image={image}
              repeating={repeating}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CountdownList;
