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
    <div className={styles.dateWrapper}>
      {jsonData.map((day) => (
        <Day
          key={day.id}
          date={day.date}
          program={day.program}
        />
      ))}
    </div>
  );
};

export default ProgramDays;
