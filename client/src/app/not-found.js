import React from "react";
import "./scss/index.scss";

const notFound = () => {
  return (
    <section>
      <div className="container">
        <div className="not-found__wrapper">
          <h1>404</h1>
          <p>Страница не найдена</p>
        </div>
      </div>
    </section>
  );
};

export default notFound;
