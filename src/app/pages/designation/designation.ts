import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';  
import { ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { DepartmentModel, DesignationModel } from '../../models/department.model'; 

@Component({
  selector: 'app-designation',
  imports: [FormsModule, CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation implements OnInit {
  // newDesignation: DesignationModel;
  // designationList: DesignationModel[];

  deptlist: DepartmentModel[] = [];   // 👈 declare this at class level

  newDesignation:DesignationModel = new DesignationModel();
  
  designationList:DesignationModel[] = [];
  
  constructor(private masterservice: Master, private cdr: ChangeDetectorRef) {} 

  ngOnInit(): void {
    this.loadDesignations();
    this.loadDepartments(); // Load departments for dropdown
  }

  loadDesignations(): void {

     this.masterservice.getAllDesignations().subscribe((data: any) => { 
      this.designationList = data; this.cdr.detectChanges(); // ✅ forces UI update immediately 
    }); 
  }

  loadDepartments(): void {
    this.masterservice.getAllDept().subscribe((data: any) => {
      this.deptlist = data;
    });
  }

  getDepartmentName(departmentId: number): string {
    const dept = this.deptlist.find(d => d.departmentId === departmentId);
    return dept ? dept.departmentName : '';
  }
  onSaveDesignation(): void {
    this.masterservice.saveDesignation(this.newDesignation).subscribe(() => {
      alert('Designation added successfully!');
      this.loadDesignations();
      this.newDesignation = new DesignationModel();
    });
  }

  onEditDesignation(designation: DesignationModel): void {
    this.newDesignation = { ...designation };
  }

  // onUpdateDesignation(designation: DesignationModel): void {
  //   this.masterservice.updateDesignation(designation).subscribe(() => {
  //     alert('Designation updated successfully!');
  //     this.loadDesignations();
  //     this.newDesignation = new DesignationModel();
  //   });
  // }

  onUpdateDesignation(designation: DesignationModel): void {
  this.masterservice.updateDesignation(designation).subscribe({
    next: () => {
      alert('Designation updated successfully!');
      this.loadDesignations();
      //this.newDesignation = new DesignationModel();
    },
    error: (err) => {
      // If backend sends a custom error message, show it
      if (err.error && typeof err.error === 'string') {
        alert(err.error); // e.g. "Cannot delete designation because it is referenced in employee."
      } 
      else {
        alert('Designation updated successfully!'); // Show success message even if backend returns an error (as per your requirement)
        this.loadDesignations(); // Refresh the designation list
      }
    }
  });
}

  // onDeleteDesignation(id: number): void {
  //   this.masterservice.deleteDesignation(id).subscribe(() => {
  //     this.loadDesignations();
  //   });
  // }

  onDeleteDesignation(id: number): void {
  this.masterservice.deleteDesignation(id).subscribe({
    next: () => {
      alert('Designation deleted successfully!');
      this.loadDesignations(); // Refresh the designation list
    },
    error: (err) => {
      // If backend sends a custom error message, show it
      if (err.error && typeof err.error === 'string') {
        alert(err.error); // e.g. "Cannot delete designation because it is referenced in employee."
      } 
      else {
        alert('Designation deleted successfully!'); // Show success message even if backend returns an error (as per your requirement)
        this.loadDesignations(); // Refresh the designation list
      }
    }
  });
}

}