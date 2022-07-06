import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  }

  async function deleteGuest() {
    await axios.delete(`https://ironrest.herokuapp.com/party-angelo/${id}`);
    navigate("/");
  }

  return (
    <div>
      <form>
        <p>{guest.person}</p>
        <label>Costume</label>
        <input
          name="costume"
          value={guest.costume}
          placeholder="costume"
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Edit Costume</button>
      </form>

      <button onClick={deleteGuest}>Not Going</button>
    </div>
  );
}

/* {edition.map((currentEdition) =>{
    return(<><p>{currentEdition.costume}</p></>)
})} */
