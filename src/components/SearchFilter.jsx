import React from "react";

function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  let handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  let handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  //state variable ma koi updation no karay so teno duplicate banavvo

  let sortCountries = (sort) => {
    let sortCountry = [...countries].sort((a, b) => {
      return sort === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry)
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={handleSearchChange}
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Des</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
