import React from "react";

export default function SearchBox({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name="search"
        placeholder="search robots"
        value={searchfield}
        onChange={searchChange}
      />
    </div>
  );
}
