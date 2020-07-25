import React from "react";
import StudentsListItem from "./StudentsListItem";

export default function StudentsList(props) {
  const renderStudentsList = props.students.map((student) => {
    return (
      <StudentsListItem
        key={`student-${student.id}`}
        name={student.fullName}
        id={student.id}
        className="students__list__item"
      />
    );
  });
  return (
    <div className="students__container">
      <ul className="students__list">{renderStudentsList}</ul>
    </div>
  );
}
