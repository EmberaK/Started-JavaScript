import React, { useState, useEffect } from "react";
import { Field, Form } from "react-final-form";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Используем useNavigate вместо useHistory
import { required } from "../utils/validation"; // Импорт валидации

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate(); // Применяем useNavigate вместо history

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/destination");
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations", error);
      }
    };

    fetchDestinations();
  }, []);

  const onSubmit = async (values) => {
    try {
      await axios.post("http://localhost:5000/hotels", values);
      navigate("/hotels"); // Используем navigate для редиректа
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Destination</label>
            <Field
              name="destination"
              component="select"
              validate={required}
            >
              <option value="">Select destination</option>
              {destinations.map((destination) => (
                <option key={destination.id} value={destination.value}>
                  {destination.label}
                </option>
              ))}
            </Field>
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    />
  );
};

export default Main;
