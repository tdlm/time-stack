import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTextFilter, setTypeFilter } from "../store/app/actions";
import { getEventTypesArray } from "../utilities/time";

const EventTypeDropdown = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const eventTypes = getEventTypesArray();
  const [value, setValue] = useState();

  useEffect(() => {
    dispatch(setTypeFilter(value));
  }, [value]);

  return (
    <div className={className} {...props}>
      <label
        className={`${className}__label`}
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Type
      </label>
      <select
        className={`${className}__select`}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        {...props}
      >
        <option value="">-- Filter Type --</option>
        {eventTypes.map((eventType) => (
          <option key={eventType.value} value={eventType.value}>
            {eventType.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const EventTextInput = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(setTextFilter(value));
  }, [value]);

  return (
    <div className={className} {...props}>
      <label
        className={`${className}__label`}
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Search
      </label>
      <input
        ref={inputRef}
        className={`${className}__input`}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text to filter..."
      />
    </div>
  );
};

/**
 * Filter component.
 * This handles all filtering for the countdown list.
 */
const Filter = () => {
  return (
    <form className="form-filter">
      <EventTextInput className="form-filter__event-text" />
      <EventTypeDropdown className="form-filter__event-type" />
    </form>
  );
};

export default Filter;
