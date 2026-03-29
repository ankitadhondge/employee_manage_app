import { Component } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../services/employee';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  newEmpobj: EmployeeModel = new EmployeeModel();

  empList: EmployeeModel[] = [];

  constructor(private masterservice: Employee, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void { // ✅ This runs automatically when the component loads 
    this.getAllEmployee(); // ✅ Fetch the employee list when the component initializes

  }
  getAllEmployee() {
    this.masterservice.getAllEmployee().subscribe((data: any) => {
      this.empList = data; this.cdr.detectChanges(); // ✅ forces UI update immediately 
    });
  }

  onEditEmployee(employee: EmployeeModel): void {
    this.newEmpobj = { ...employee };
  }

  onUpdateEmployee(employee: EmployeeModel): void {
    this.masterservice.updateEmployee(employee).subscribe({
      next: () => {
        alert('employee updated successfully!');
        this.getAllEmployee();
        //this.newDesignation = new DesignationModel();
      },
      error: (err) => {
        // If backend sends a custom error message, show it
        if (err.error && typeof err.error === 'string') {
          alert(err.error); // e.g. "Cannot delete designation because it is referenced in employee."
        }
        else {
          alert('Employee updated successfully!'); // Show success message even if backend returns an error (as per your requirement)
          this.getAllEmployee(); // Refresh the designation list
        }
      }
    });
  }

  onDeleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.masterservice.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employee deleted successfully!');
          this.getAllEmployee();
        },
        error: (err) => {
          // If backend sends a custom error message, show it
          if (err.error && typeof err.error === 'string') {
            alert(err.error); // e.g. "Cannot delete employee because it is referenced in other records."
          }
          else {
            alert('Employee deleted successfully!'); // Show success message even if backend returns an error (as per your requirement)
            this.getAllEmployee(); // Refresh the employee list
          }
        }

      });
    }
  }

} 
