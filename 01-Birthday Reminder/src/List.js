import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((persons) => {
        const { id, name, age, image } = persons;
        return (
          <article key={id}>
            <div className="person__img">
              <img src={image} alt={name} />
            </div>
            <div className="person__details">
              <h1>{name}</h1>
              <h3>{age}</h3>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
