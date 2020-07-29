import React, { useEffect, useState, FunctionComponent } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { changeStudentYear } from "../store/action";
import { Dispatch } from "../interfaces";
import { IStudent } from "../StudentsList/interfaces";
import { ILevelListProps, ILevelListItemProps } from "./interfaces";
import style from "./LevelList.style";
const LevelList: FunctionComponent<ILevelListProps> = ({
  dispatch,
  students,
  selectedStudent,
}) => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    if (selectedStudent) {
      let tempYear: string | any = students.find(
        (el) => el.id === selectedStudent
      )?.year;
      console.log("temp year", tempYear);
      setCurrentYear(tempYear);
    }
  }, [selectedStudent]);

  const classes = style();
  const years: string[] = ["1st", "2nd", "3rd", "4th", "5th"];
  const renderYearList: JSX.Element[] = years.map(
    (year: string, index: number) => {
      const listItemProps: ILevelListItemProps = {
        key: `year-${index}`,
        year: year,
      };
      return (
        <FormControlLabel
          control={<Radio />}
          label={year}
          value={year}
          {...listItemProps}
          className={classes.level__list__item}
        />
      );
    }
  );

  const yearChangeHandler = (
    dispatch: Dispatch,
    students: IStudent[],
    selectedStudent: number,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let updatedYear = (e.target as any).value;
    setCurrentYear(updatedYear);
    changeStudentYear(dispatch, students, selectedStudent, updatedYear);
  };

  return (
    <div className={classes.level__container}>
      <p>Level List</p>
      <RadioGroup
        className={classes.level__list}
        aria-label="year"
        name="year"
        value={currentYear}
        onChange={(e) =>
          yearChangeHandler(dispatch, students, selectedStudent, e)
        }
      >
        {renderYearList}
      </RadioGroup>
    </div>
  );
};

export default LevelList;
