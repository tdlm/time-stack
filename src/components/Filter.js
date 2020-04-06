import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTextFilter } from "../store/app/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");

  // Debounce typing by 50 milliseconds.
  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(setTextFilter(filterText));
    }, 50);

    return () => clearTimeout(timeout);
  }, [filterText, setFilterText]);

  return (
    <form className="form-filter">
      <label className="form-filter__label">Search</label>
      <input
        className="form-filter__input"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Enter text to filter..."
      />
    </form>
  );
};

export default Filter;
