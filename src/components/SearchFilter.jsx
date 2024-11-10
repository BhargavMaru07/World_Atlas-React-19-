import React from "react";

function SearchFilter({ search, setSearch, filter, setFilter }) {

    let handleSearchChange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    } 

    let handleSelectChange = (e)=>{
        e.preventDefault()
        setFilter(e.target.value)
    }

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Enter Country name"
        value={search}
        onChange={handleSearchChange}
      />

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
