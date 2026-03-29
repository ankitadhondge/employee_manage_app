export class DepartmentModel {
    departmentId: number;
    departmentName: string; 
    isActive: boolean;

    constructor(){
        this.departmentId = 0;
        this.departmentName = '';
        this.isActive = false;
    }

   
}

export class DesignationModel {
    designationId: number;
    departmentId: number;
    designationName: string;

    constructor(){
        this.designationId = 0;
        this.departmentId = 0;
        this.designationName = '';  
    }

}
                                                                      