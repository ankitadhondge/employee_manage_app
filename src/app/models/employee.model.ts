export class EmployeeModel {
  employeeId: number = 0;

  name: string = ''; // Required, max length 50

  contactNo: string = ''; // Required, exactly 10 characters

  email: string = ''; // Required, max length 50

  city: string = ''; // Required, max length 50

  state: string = ''; // Required, max length 50

  pincode: string = ''; // Required, max length 6

  altcontactNo: string = ''; // Required, exactly 10 characters

  address: string = ''; // Required, max length 50

  designationId: number = 0;

  createdDate: Date = new Date();
  modifiedDate: Date = new Date();

  role: string = ''; // Required, max length 50

  constructor(){
    }
}
