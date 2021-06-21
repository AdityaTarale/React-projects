import React, { useState } from "react";

export const CreateJob = (props) => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    company: "",
    city: "",
    description: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit({ ...form, id: new Date().getTime().toString() });
    setForm({
      id: "",
      title: "",
      company: "",
      city: "",
      description: "",
    });
  };

  return (
    <div className="box">
      <h1 className="title is-5">Create a vacancy</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInput}
          className="input"
          placeholder="Job title"
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleInput}
          className="input"
          placeholder="Company name"
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleInput}
          className="input"
          placeholder="City name"
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className="input"
          placeholder="Description"
          required
          value={form.description}
          onChange={handleInput}
        ></textarea>
        <button className="button is-primary">Create</button>
      </form>
    </div>
  );
};
