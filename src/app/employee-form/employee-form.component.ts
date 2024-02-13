
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
 
employeeForm: FormGroup= new FormGroup({});

 
constructor(private formBuilder: FormBuilder) { }
 
ngOnInit(): void {
  this.employeeForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
    QA: ['NA', Validators.required],
    SSP: ['NA', Validators.required],
    IMPAI: ['NA', Validators.required],
    Operations: ['NA', Validators.required],
    BA: ['NA', Validators.required],
    HR: ['NA', Validators.required]
  });
}
 
onSubmit() {
  if (this.employeeForm.valid) {
    // You can perform actions with the form data here
    console.log(this.employeeForm.value);
  } else {
    // Handle invalid form
  }
}
 
}
 