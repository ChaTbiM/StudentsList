import React, { useEffect, useState, FunctionComponent } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { changeStudentAge } from "../store/action";
import { Dispatch } from "../interfaces";
import { IStudent } from "../StudentsList/interfaces";
import { IAgeListItemProps, IAgeListProps } from "./interfaces";
import style from "./AgesList.css";

const AgeList: FunctionComponent<{
  dispatch: Dispatch;
  students: IStudent[];
  selectedStudent: number;
  className: string;
}> = ({ dispatch, students, selectedStudent }) => {
  const [currentAge, setCurrentAge] = useState(0);

  useEffect(() => {
    if (selectedStudent) {
      let tempAge: number | any = students.find(
        (el) => el.id === selectedStudent
      )?.age;

      setCurrentAge(tempAge);
    }
  }, [selectedStudent]);

  const classes = style();
  const ages: number[] = Array.from(Array(50).keys());
  ages.shift();
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

  const ageChangeHandler = (
    dispatch: Dispatch,
    students: IStudent[],
    selectedStudent: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let updatedAge: number = (e.target as any).value;
    updatedAge = Number(updatedAge);
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
