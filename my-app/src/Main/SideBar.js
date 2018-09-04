import React from "react";

const SideBar = props => {
  return (
    <div className="sidebar-details">
      <div className="search-info">
        <form>
          <h3>Search</h3>
          <input type="text" placeholder="Search" />
          <hr />
        </form>
      </div>
      <div className="filter1">
        <form>
          <label>Filter By types: </label>
          <pre><input type="checkbox" /><label>Smart phone</label></pre>
          <pre><input type="checkbox" /><label>Feature phone</label></pre>
        </form>
        <hr />
      </div>
      <div className="filter2">
        <form>
          <label>Filter By Brands: </label>
          <pre><input type="checkbox" /> <label> Apple</label></pre>
          <pre><input type="checkbox" /> <label> Samsung</label></pre>
          <pre><input type="checkbox" /> <label> Nokia</label></pre>
          <pre><input type="checkbox" /> <label> Micromax</label></pre>
        </form>
        <hr />
        <hr />
      </div>
      <div className="filter3">
        <form>
          <label>Filter By OPERATING SYSTEM: </label>
          <pre><input type="checkbox" /> <label> Android </label></pre>
          <pre><input type="checkbox" /> <label> IOS </label></pre>
        </form>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default SideBar;