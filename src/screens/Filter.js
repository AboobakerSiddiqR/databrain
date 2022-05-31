import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Filter.css";

function Filter() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState([]);
  const [second, setSecond] = useState(false);
  const [first, setFirst] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Sri+lanka")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(search);

  const fullList = () => (
    <div style={{ textAlign: "center" }}>
      {list?.map((collegeList) => (
        <div>
          <p>{collegeList.name}</p>
        </div>
      ))}
    </div>
  );
  const filters = (event) => {
    setSearch(event);
    if (search !== "") {
      const results = list.filter((filtered) => {
        return filtered.name.toLowerCase().includes(search.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setShow(results);
    } else if (search == "") {
      setShow([]);
    }
  };

  const searchList = () => (
    <div style={{ textAlign: "center" }}>
      {show?.map((collegeList) => (
        <div>
          <p>{collegeList.name}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="filter">
      <h2 style={{ color: "black", textAlign: "center" }}>Filter App</h2>
      <div className="input__Div">
        <input value={search} onChange={(e) => filters(e.target.value)} />
        <button
          onClick={() => setFirst(!first)}
          style={{ marginLeft: "20px" }}
          type="submit"
        >
          SEARCH
        </button>
        <button
          style={{ marginLeft: "20px" }}
          type="submit"
          onClick={() => setSecond(!second)}
        >
          FULL LIST
        </button>
      </div>
      {second === true ? fullList() : ""}
      {first === true ? searchList() : ""}
    </div>
  );
}

export default Filter;
