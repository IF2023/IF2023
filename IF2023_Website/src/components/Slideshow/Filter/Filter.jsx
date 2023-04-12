import { useState } from "react";
import styles from "./Filter.module.scss";

const Filter = ({ data, setFilter }) => {
  const [currentFilter, setCurrentFilter] = useState(undefined);
  const filters = new Set();

  data.forEach((item) => {
    filters.add(item.semester);
  });

  const handleFilter = (selection) => {
    if (selection === currentFilter) {
      setCurrentFilter(undefined);
      setFilter(undefined);
    } else {
      setCurrentFilter(selection);
      setFilter(selection);
    }
  };

  return (
    <div>
      {[...filters].map((item) => {
        return (
          <p
            className={`${styles.filter} ${
              item === currentFilter ? styles.active : ""
            }`}
            key={item}
            onClick={() => {
              handleFilter(item);
            }}
          >
            <b>//</b> {item}. Semester
          </p>
        );
      })}
    </div>
  );
};
export default Filter;
