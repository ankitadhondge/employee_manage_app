import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../models/employee.model';
@Injectable({
  providedIn: 'root',
})
export class Employee {

  apiUrl: string = 'https://localhost:7285/api';
  http = inject(HttpClient);

  getAllEmployee(){
    return this.http.get(`${this.apiUrl}/EmployeeMaster/GetEmployees`);
  }

  updateEmployee(obj:EmployeeModel){
      return this.http.put(`${this.apiUrl}/EmployeeMaster/UpdateEmployee`, obj);
    }

  deleteEmployee(id:number){  
    return this.http.delete(`${this.apiUrl}/EmployeeMaster/DeleteEmployee/${id}`);  
    
  }

  onSaveEmployee(obj:EmployeeModel){
    return this.http.post(`${this.apiUrl}/EmployeeMaster/AddEmployee`, obj);
  }

  getAllDesignations(){
    return this.http.get(`${this.apiUrl}/Designation/GetDesignation`);
  }
}
