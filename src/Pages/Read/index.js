import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col, Divider } from "antd";

export function Read() {
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/party-angelo"
        );
        console.log(response);
        setList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchList();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "stretch",
        justifyContent: "space-around",
        paddingLeft: 80,
        paddingRight: 80,
      }}
    >
      <h1 style={{ color: "yellow", fontSize: "500%" }}>Confirmados</h1>
      <Divider></Divider>
      {list.map((currentList) => {
        return (
          <Card
            style={{
              width: "10%",
              margin: 20,
              borderRadius: 50,
              display: "flex",
            }}
            key={currentList.person}
          >
            <h2 key={currentList.name}>{currentList.person}</h2>
            <h4>{currentList.costume}</h4>
            <Link to={`/update/${currentList._id}`}>
              <button style={{ borderRadius: 20 }}>
                <h3 style={{ color: "blue" }}>Troca a fantasia</h3>
              </button>
            </Link>
          </Card>
        );
      })}
      <Divider></Divider>
      <Link to="/">
        <button style={{ borderRadius: 20 }}>
          <h3 style={{ color: "blue" }}> Convidar</h3>
        </button>
      </Link>
    </div>
  );
}
