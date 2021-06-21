import React, { useEffect, useState } from "react";
import { Vacancy } from "../components/Vacancy";
import { CreateJob } from "../components/CreateJob";
import { jobs } from "./data";

export const Home = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    setVacancies(jobs);
  }, []);

  const handleSubmit = (form) => {
    setVacancies([form, ...vacancies]);
  };

  const handleDelete = (id) => {
    const filterVacancies = vacancies.filter((vacancy) => vacancy.id !== id);
    setVacancies(filterVacancies);
  };
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Find your dream company</p>
          <p className="subtitle">Apply for any vaccines below</p>
        </div>
      </section>

      <CreateJob submit={handleSubmit} />
      <Vacancy vacancies={vacancies} handleDelete={handleDelete} />
    </>
  );
};
