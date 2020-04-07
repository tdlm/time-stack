import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import CountdownCard from "./CountdownCard";

import "./CountdownList.scss";

/**
 * Countdown List component.
 *
 * Displays Countdown Card components and filters their output.
 */
const CountdownList = () => {
  const events = useSelector((state) => state.app.events);
  const filterText = useSelector((state) => state.app.filterText);
  const filterType = useSelector((state) => state.app.filterType);
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    const searchText = filterText?.toLowerCase() || "";
    const searchType = filterType?.toLowerCase() || "";

    if ("" === searchText && "" === searchType) {
      return setFilteredEvents(events);
    }

    const results = events.filter(
      (event) =>
        event.type.toLowerCase().includes(searchType) &&
        (event.title.toLowerCase().includes(searchText) ||
          event.slug.toLowerCase().includes(searchText) ||
          event.date.format("LLLL").toLowerCase().includes(searchText))
    );
    setFilteredEvents(results);
  }, [filterText, filterType]);

  return filteredEvents.length ? (
    <ul className="countdown-list">
      {filteredEvents.map((countdown) => {
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
  ) : (
    <div className="countdown-404">
      <p>No events found. Try changing your filters.</p>
    </div>
  );
};

export default CountdownList;
