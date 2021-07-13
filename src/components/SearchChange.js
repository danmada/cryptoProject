import React from "react";

function SearchChange({ sortCoins, sortBy}) {

  return (
    <div>
      <strong>Sort Name By:</strong>
      <label>
        <input
          type="radio"
          value="Ascending"
          name="sort"
          checked={ sortBy === 'Ascending' }
          onChange={sortCoins}
        />
        Ascending
      </label>
      <label>
        <input
          type="radio"
          value="Descending"
          name="sort"
          checked={sortBy === 'Descending'}
          onChange={sortCoins}
        />
       Descending
      </label>
      <br />
    </div>
  );
}

export default SearchChange;