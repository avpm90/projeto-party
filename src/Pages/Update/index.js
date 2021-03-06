import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Divider, Card } from "antd";
import style from "./style.module.css";

export function Update() {
  const { id } = useParams();
  const [guest, setGuest] = useState({ costume: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchId() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/party-angelo/${id}`
      );
      setGuest(response.data);
    }
    fetchId();
  }, [id]);

  function handleChange(e) {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    delete guest._id;
    try {
      await axios.put(
        `https://ironrest.herokuapp.com/party-angelo/${id}`,
        guest
      );
    } catch (err) {
      console.log(err);
    }
    navigate("/read");
  }

  async function deleteGuest() {
    await axios.delete(`https://ironrest.herokuapp.com/party-angelo/${id}`);
    navigate("/read");
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card className={style.card}>
        <form>
          <h2>{guest.person}</h2>
          <label>Fantasia</label>
          <input
            name="costume"
            value={guest.costume}
            placeholder="costume"
            onChange={handleChange}
          />
          <button
            style={{ color: "blue", borderRadius: 20 }}
            onClick={handleUpdate}
          >
            Troca a roupa
          </button>
        </form>
      </Card>

      <Divider></Divider>
      <button
        style={{ backgroundColor: "#24b9dd", color: "blue", borderRadius: 50 }}
        onClick={deleteGuest}
      >
        Não vou colar. (Sou bunda mole)
      </button>
      <Link to="/read">
        <button
          style={{
            backgroundColor: "#24b9dd",
            color: "blue",
            borderRadius: 50,
          }}
        >
          Olha quem vai também
        </button>
      </Link>
    </div>
  );
}
