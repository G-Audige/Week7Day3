import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import employeeImage from '../models/EmployeeImage';
import employeeInfo from '../models/EmployeeInfo';

function EmployeeList() {
  return (
    <div className="employeelist">
      <EmployeeListItem pic={employeeImage.pic[0]} name={employeeInfo.name[0]} position={employeeInfo.position[0]}/>
      <EmployeeListItem pic={employeeImage.pic[1]} name={employeeInfo.name[1]} position={employeeInfo.position[1]}/>
      <EmployeeListItem pic={employeeImage.pic[2]} name={employeeInfo.name[2]} position={employeeInfo.position[2]}/>
      <EmployeeListItem pic={employeeImage.pic[3]} name={employeeInfo.name[3]} position={employeeInfo.position[3]}/>
      <EmployeeListItem pic={employeeImage.pic[4]} name={employeeInfo.name[4]} position={employeeInfo.position[4]}/>
      <EmployeeListItem pic={employeeImage.pic[5]} name={employeeInfo.name[5]} position={employeeInfo.position[5]}/>
    </div>
  );
}

export default EmployeeList;
