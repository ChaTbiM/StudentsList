import React, { useEffect, useState } from "react";
import { IStudent, IAgeListItemProps } from "../interfaces";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import style from "./AgesList.css.js";

import { changeStudentAge } from "../store/action.ts";

const AgeList: React.FC<{
  dispatch: Dispatch;
  students: IStudent[];
  selectedStudent: number;
}> = ({ dispatch, students, selectedStudent }) => {
  const [currentAge, setCurrentAge] = useState(0);

  useEffect(() => {
    if (selectedStudent) {
      let tempAge: number = Number(
        students.find((el) => el.id === selectedStudent).age
      );
      setCurrentAge(tempAge);
    }
  }, [selectedStudent]);

  const classes = style();
  const ages: number[] = Array.from(Array(50).keys());
  const renderAgeList: JSX.Element[] = ages.map(
    (age: number, index: number) => {
      const listItemProps: IAgeListItemProps = {
        key: `age-${index}`,
        age: age,
      };
      return (
        <FormControlLabel
          control={<Radio />}
          label={age}
          value={age}
          {...listItemProps}
          className={classes.age__list__item}
        />
      );
    }
  );

  const ageChangeHandler = (dispatch, students, selectedStudent, e) => {
    let updatedAge: number = Number(e.target.value);
    setCurrentAge(updatedAge);
    changeStudentAge(dispatch, students, selectedStudent, updatedAge);
  };

  return (
    <div className={classes.age__container}>
      <p>Age List</p>
      <RadioGroup
        className={classes.age__list}
        aria-label="age"
        name="age"
        value={currentAge}
        onChange={(e) =>
          ageChangeHandler(dispatch, students, selectedStudent, e)
        }
      >
        {renderAgeList}
      </RadioGroup>
    </div>
  );
};

export default AgeList;
