import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;
  public isSubmitted = false;
  public username: string = "admin";
  public password: string = "admin123";
  public errorMsg:boolean= false;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.prepareform();
  }
  public prepareform() {
    this.loginform = this.fb.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }
  get formControls() {
    return this.loginform.controls;
  }

  public onSubmitted() {
   this.isSubmitted = true;
   if (this.loginform.invalid) {
    return;
  }
    else if (this.username == this.loginform.value.Username && this.password == this.loginform.value.Password) {
      this.router.navigate(['/dashboard']);
    }
    else {
     this.errorMsg = true;

    }
  }
  }
