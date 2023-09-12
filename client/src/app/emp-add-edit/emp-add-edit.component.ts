import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm:FormGroup;

  education:string[]=[
  'Matric',
  'Intermediate',
  'Diploma',
  'Graduate '
]

constructor(
  private _fb:FormBuilder,
  private _empService:EmployeeService,
  private _dialogRef:MatDialogRef<EmpAddEditComponent>){

  this.empForm=this._fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    dob:['', Validators.required],
    gender:['', Validators.required],
    education:['', Validators.required],
    company:['', Validators.required],
    experience:['', Validators.required],
    package:['', Validators.required],
  })
}

onFormSubmit(){
  if(this.empForm.valid){
    this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val:any)=>{
        alert('Employee added succesfully');
        this._dialogRef.close(true);
        
      },
      error:(err:any)=>{
        console.error(err.data);
      }
    })
  }
}
}
