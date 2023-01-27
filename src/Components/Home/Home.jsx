import React from "react";
import { data } from "../../Data/Data";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="home__title">
        {data?.map((e, i) => (
          <h1 className="home__title__item" key={i}>
            {e.id == "1" ? e.fan : ""}
          </h1>
        ))}
      </div>
      <div className="home__question__title">
        <h3>Kimyo(3.1)</h3>
        <span>
          {data.map((e, i) => (
            <p key={i}>{e.id}</p>
          ))}
        </span>
      </div>
      <div className="home__question">
        {data?.map((e, i) => (
          <ul key={i}>
            <p  className="question__title">
              {e.id} ) {e.question}
            </p>

            <li>
              {e.variant?.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
