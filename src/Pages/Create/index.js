import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Card, Divider } from "antd";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    > 
      <h1 style={{ color: "yellow", fontSize: "500%" }}>Confirmar Presença</h1>
      <Divider></Divider>
      <Card
        style={{
          width: 200,
          margin: 10,
          borderRadius: 50,
          justifyContent: "center",
        }}
      >
        <form>
          <label>Quem é? </label>
          <input
            name="name"
            placeholder="Nome"
            value={person}
            onChange={(e) => {
              setPerson(e.target.value);
            }}
          />
        </form>
        <form>
          <label>Vai fantasiado de que? </label>
          <input
            name="cost"
            placeholder="Fantasia"
            value={costume}
            onChange={(e) => {
              setCostume(e.target.value);
            }}
          />
          <button style={{ color: "blue", paddinTop: 10 }} onClick={handleList}>
            {" "}
            Tá na Lista !!!
          </button>
        </form>
      </Card>
      <Divider></Divider>
      <Link to="/read">
        <button style={{ color: "blue" }}>Olha quem vai também</button>
      </Link>
    </div>
  );
}
