import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { Employee } from '../../services/employee';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentModel, DesignationModel } from '../../models/department.model';
import { Master } from '../../services/master';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl:'./employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm{

  
  newEmpobj: EmployeeModel = new EmployeeModel();
  
  // empList: EmployeeModel[] = [];

  // deptlist: DepartmentModel[] = [];   // 👈 declare this at class level
  
  // newDesignation:DesignationModel = new DesignationModel();
    
  // designationList:DesignationModel[] = [];

  
  
  constructor(private masterservice: Employee, private cdr: ChangeDetectorRef) { }

  //  ngOnInit(): void {
  //   this.loadDesignations();
  //   //this.loadDepartments(); // Load departments for dropdown
  // }

  // loadDesignations(): void {

  //    this.masterservice.getAllDesignations().subscribe((data: any) => { 
  //     this.designationList = data; this.cdr.detectChanges(); // ✅ forces UI update immediately 
  //   }); 
  // }

  // getDesignationName(designationId: number): string {
  //   const dept = this.designationList.find(d => d.designationId === designationId);
  //   return dept ? dept.designationName : '';
  // }

  onSaveEmployee(){

    this.masterservice.onSaveEmployee(this.newEmpobj).subscribe(() => {
          alert('Employee added successfully!');
          //this.loadEmployees();
          this.newEmpobj = new EmployeeModel();
        });
      
  }
  
}
