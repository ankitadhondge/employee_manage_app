import { Component, inject } from '@angular/core';
import { DepartmentModel } from '../../models/department.model';
import { ChangeDetectorRef } from '@angular/core';
// import { form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  imports: [FormsModule],
  templateUrl: './department.html',
 styleUrls: ['./department.css']
})
export class Department implements OnInit {

  newDeptobj:DepartmentModel = new DepartmentModel();

  //masterservice = inject(Master);

  deptlist:DepartmentModel[] = [];

  //successMessage: string = '';
  errorMessage: string = '';

  constructor(private masterservice: Master, private cdr: ChangeDetectorRef) {} 
  ngOnInit(): void { // ✅ This runs automatically when the component loads 
      this.getAllDepartment(); // ✅ Fetch the department list when the component initializes

   }
  getAllDepartment(){
    this.masterservice.getAllDept().subscribe((data: any) => { 
      this.deptlist = data; this.cdr.detectChanges(); // ✅ forces UI update immediately 
    }); 
  }
 
  
// onSaveDept(){
  //   this.masterservice.saveDept(this.newDeptobj).subscribe((data:any)=>{
  //     alert('Department added successfully!');
  //     this.getAllDepartment(); // Refresh the department list after adding a new department
  //   });
  //  }

  onSaveDept() {
  this.masterservice.saveDept(this.newDeptobj).subscribe({
    next: () => {
      this.errorMessage = ''; // clear any old error
      alert('Department added successfully!');
      this.getAllDepartment(); // refresh list
      this.newDeptobj = new DepartmentModel(); // reset form
    },
    error: (err) => {

      if (err.error && typeof err.error === 'string') {
        alert(err.error); // e.g. "Cannot delete department because it is referenced in Designations."
      }
    }
  });
}


  //  onDeleteDept(id: number) {
  //   this.masterservice.deleteDept(id).subscribe((data: any) => {
  //     alert('Department deleted successfully!');
  //     this.getAllDepartment(); // Refresh the department list after deleting a department
      
  //   });
  // }

  onDeleteDept(id: number) {
  this.masterservice.deleteDept(id).subscribe({
    next: () => {
      alert('Department deleted successfully!');
      this.getAllDepartment(); // Refresh the department list
    },
    error: (err) => {
      // If backend sends a custom error message, show it
      if (err.error && typeof err.error === 'string') {
        alert(err.error); // e.g. "Cannot delete department because it is referenced in Designations."
      } 
      else {
        alert('Department deleted successfully!'); // Show success message even if backend returns an error (as per your requirement)
        this.getAllDepartment(); // Refresh the department list
      }
    }
  });
}


  //   onUpdateDept(dept: DepartmentModel) {
  //   this.masterservice.updateDept(dept).subscribe((data: any) => {
  //     alert('Department updated successfully!');
  //     this.getAllDepartment(); // Refresh the department list after updating a department
  //   });
  // }

  // onUpdateDept(data: DepartmentModel) {

  //   this.newDeptobj = data;
    
    
  // }


  onEditDept(data: DepartmentModel) {
  // Create a shallow copy so editing doesn’t immediately reflect in the list
  this.newDeptobj = { ...data };
}

onUpdateDept() {
  this.masterservice.updateDept(this.newDeptobj).subscribe({
    next: () => {
      this.errorMessage = ''; // clear any old error
      alert('Department updated successfully!');
      this.getAllDepartment(); // refresh list
      this.newDeptobj = new DepartmentModel(); // reset form
    },
    error: (err) => {

      if (err.error && typeof err.error === 'string') {
        alert(err.error); // e.g. "Cannot delete department because it is referenced in Designations."
      }
    }
  });
}

}
