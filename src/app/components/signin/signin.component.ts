import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}
  msgError:string='';
  isLoading:boolean = false;
  
  loginForm:FormGroup = new FormGroup({
   
    email :new FormControl(null,[Validators.required,Validators.email]),
    password :new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
   

  })
  loginSubmit(form:FormGroup){
    console.log(form.value);
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.isLoading=true;
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next:(response)=>{if(response.message =='success'){
          this.isLoading= false;
          localStorage.setItem('eToken',response.token);
          this._AuthService.saveUserData()
          this._Router.navigate(['./home'])

        }},
        error:(err)=>{
          this.isLoading= false
          this.msgError=err.error.message}
       
  
        
      })

    }
  
  
  }

}
