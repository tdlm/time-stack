import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTextFilter, setTypeFilter } from "../store/app/actions";
import { getEventTypesArray } from "../utilities/time";

const EventTypeDropdown = (props) => {
  const dispatch = useDispatch();
  const eventTypes = getEventTypesArray();
  const [value, setValue] = useState();

  useEffect(() => {
    dispatch(setTypeFilter(value));
  }, [value]);

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      {...props}
    >
      <option value="">--</option>
      {eventTypes.map((eventType) => (
        <option key={eventType.value} value={eventType.value}>
          {eventType.label}
        </option>
      ))}
    </select>
  );
};

/**
 * Filter component.
 * This handles all filtering for the countdown list.
 */
const Filter = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    dispatch(setTextFilter(filterText));
  }, [filterText, setFilterText]);

  return (
    <form className="form-filter">
      <label
        className="form-filter__label"
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Search
      </label>
      <input
        ref={inputRef}
        className="form-filter__input"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Enter text to filter..."
      />
      <EventTypeDropdown className="form-filter__input form-filter__input--select" />
    </form>
  );
};

export default Filter;
