import React, { useEffect, useState } from "react";
import data from "../../data/programData.json";
import styles from "./ProgramDay.module.scss";

const ProgramDay = () => {
  const [programData, setProgramData] = useState(null);

  useEffect(() => {
    setProgramData(data);
  }, []);

  if (!programData) {
    // Data is still loading, show a loading indicator or return null
    return null;
  }

  return (
    <div>
      {programData.map((day) => (
        <div key={day.id}>
          <h2>{day.date}</h2>
          <ul>
            {day.program.map((item) => (
              <li key={item.time}>
                <span>{item.time}</span> - <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProgramDay;
