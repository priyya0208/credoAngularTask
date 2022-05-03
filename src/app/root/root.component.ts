import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roots',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  userForm: FormGroup;
  passwordIsValid: boolean =false;
  firstNameFlag: boolean | undefined;
  emailFlag: boolean | undefined;
  phoneFlag: boolean | undefined;
  passwordFlag: boolean | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password : ['', Validators.required]
    });
  }
  passwordValid(event: any) {
    this.passwordIsValid = event;
  }
  ngOnInit() {}
  onSubmit(key:any) {
    if(key == 'firstName')
    this.firstNameFlag = false
    if(key == 'email')
    this.emailFlag = false
    if(key == 'phone')
    this.phoneFlag = false
    if(key == 'password')
    this.passwordFlag = false


    if(this.userForm.controls[key].status == 'INVALID'){
    if(key == 'firstName')
      this.firstNameFlag = true;
      if(key == 'email')
    this.emailFlag = true
    if(key == 'phone')
    this.phoneFlag = true
    if(key == 'password')
    this.passwordFlag = true

    }
  }

  fieldTextType: boolean = false;

toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
}
