import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Form.css";
import "./Slider.css";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    horse: location.state?.horse || "",
    date: "",
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
  });

  const [timeSlots, setTimeSlots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.getUTCDay();
    const slots = [];

    if (dayOfWeek >= 6 && dayOfWeek <= 7) {
      // Weekends (Sat-Sun)
      for (let i = 15; i <= 23; i++) {
        const hour = i < 10 ? `0${i}` : i;
        slots.push(`${hour}:00`);
      }
      slots.push("00:00");
    } else {
      // Weekdays (Mon-Fri)
      for (let i = 0; i <= 23; i++) {
        const hour = i < 10 ? `0${i}` : i;
        slots.push(`${hour}:00`);
      }
    }

    setTimeSlots(slots);
    setFormData((prevData) => ({
      ...prevData,
      date: e.target.value,
      timeSlot: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleHeaderClick = () => {
    navigate("/");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      <header className="App-header" style={{ cursor: "pointer" }}>
        <h1 className="mainHeading" onClick={handleHeaderClick}>
          Ride_<span>Horse</span>.com
        </h1>
      </header>
      <form id="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="horse">Select a Horse:</label>
        <select
          id="horse"
          name="horse"
          value={formData.horse}
          onChange={handleInputChange}
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="Jacob">Jacob</option>
          <option value="Bella">Bella</option>
          <option value="Max">Max</option>
          <option value="Daisy">Daisy</option>
        </select>

        <label htmlFor="date">Choose a Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="timeSlot">Choose a Time Slot:</label>
        <select
          id="timeSlot"
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleInputChange}
          required
        >
          <option value="">--Please choose a time slot--</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="sub_btn">
          Submit
        </button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-heading">Booking Confirmation</h2>
            <p className="main-para">
              Thank you, {formData.name}! You have successfully booked a ride
              with {formData.horse} on {formData.date} at {formData.timeSlot}.
            </p>
            <p className="second-para">
              Please check your email at {formData.email} for further
              instructions.
            </p>
            <button onClick={closeModal} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
