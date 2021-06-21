import React from "react";

export const Vacancy = (props) => {
  return (
    <section>
      {props.vacancies.map((vacancy) => {
        return (
          <div key={vacancy.id} className="box mt-4 mb-4">
            <h1 className="title is-5">{vacancy.title}</h1>
            <span>{vacancy.company}</span>
            <p>{vacancy.city}</p>
            <div className="block"></div>
            <p>{vacancy.description}</p>
            <div className="is-flex is-justify-content-space-between">
              <button
                onClick={() => {
                  window.alert(`Successfully applied for ${vacancy.title}`);
                }}
                className="button is-primary mt-4"
              >
                Apply
              </button>
              <button
                onClick={() => props.handleDelete(vacancy.id)}
                className="button is-danger mt-4"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
