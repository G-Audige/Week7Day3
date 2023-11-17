import React from 'react';

function EmployeeListItem(props) {
  return (
    <div className="employeelistitem">
      <img src={props.pic}/>
      <div className="employeeInfo">
        <p>{props.name}</p>
        <p>{props.position}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
