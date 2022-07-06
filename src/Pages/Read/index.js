import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "antd";

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
    <>
      <h1>List</h1>
      {list.map((currentList) => {
        return (
          <>
            <Card key={currentList.person}>
              <p key={currentList.name}>{currentList.person}</p>
              <p>{currentList.costume}</p>
              <Link to={`/update/${currentList._id}`}>
                <button>Edit</button>
              </Link>
            </Card>
          </>
        );
      })}
    </>
  );
}
