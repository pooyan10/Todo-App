import React from "react";

const Employee = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <div>
      {`First name is : ${firstName}  - Last name is : ${lastName} - Age : ${age}`}
    </div>
  );
};

export default Employee;
