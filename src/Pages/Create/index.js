import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Create() {
  const [person, setPerson] = useState("");
  const [costume, setCostume] = useState("");

  const navigate = useNavigate();

  async function handleList(e) {
    e.preventDefault();

    await axios.post("https://ironrest.herokuapp.com/party-angelo", {
      person,
      costume,
    });
     navigate("/read");
  }

  return (
    <>
      <h1>Bday</h1>

      <form>
        <label>Name</label>
        <input
          name="name"
          value={person}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        />
      </form>
      <form>
        <label>Costume</label>
        <input
          name="cost"
          value={costume}
          onChange={(e) => {
            setCostume(e.target.value);
          }}
        />
        <button onClick={handleList}> Add to List</button>
      </form>
    </>
  );
}

/* value={menu.login}
type="text"
name="login"
onChange={handleChange} */
