import React, { useEffect, useState } from "react";
import data from "../../data/programData.json";
import Day from "./Day/Day";
import styles from "./ProgramDays.module.scss";

const ProgramDays = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  if (!jsonData) {
    return null;
  }

  return (
    <div>
      {jsonData.map((day) => (
        <Day
          key={day.id}
          className={styles.dateWrapper}
          date={day.date}
          program={day.program}
        />
      ))}
    </div>
  );
};

export default ProgramDays;
