import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentModel, DesignationModel } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class Master {
  apiUrl: string = 'https://localhost:7285/api';
  http = inject(HttpClient);

  getAllDept(){
    return this.http.get(`${this.apiUrl}/DepartmentMaster/GetDepartment`);
  }

  saveDept(obj:DepartmentModel){
    return this.http.post(`${this.apiUrl}/DepartmentMaster/AddDepartment`, obj);
  }

  deleteDept(id:number){
    return this.http.delete(`${this.apiUrl}/DepartmentMaster/DeleteDepartment/${id}`);
  } 

  updateDept(obj:DepartmentModel){
    return this.http.put(`${this.apiUrl}/DepartmentMaster/UpdateDepartment`, obj);
  }

  getAllDesignations(){
    return this.http.get(`${this.apiUrl}/Designation/GetDesignation`);
  }

  saveDesignation(obj:DesignationModel){
    return this.http.post(`${this.apiUrl}/Designation/AddDesignation`, obj);
  }

  deleteDesignation(id:number){
    return this.http.delete(`${this.apiUrl}/Designation/DeleteDesignation/${id}`);
  } 

  updateDesignation(obj:DesignationModel){
    return this.http.put(`${this.apiUrl}/Designation/UpdateDesignation`, obj);
  }

  
}

