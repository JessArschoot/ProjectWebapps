import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('fileInput') fileInput;
  public user: FormGroup;
  
  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  constructor(private authenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords }),
      name: ['',Validators.required],
      //picture: ['', Validators.required],
    });
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    };
  }

   previewFile() {
    
    var preview = document.getElementById('previewPic');
    var file    = this.fileInput.nativeElement.files[0];
    var reader  = new FileReader();
    reader.addEventListener("loadend", function () {
      
      preview.setAttribute('src', reader.result);
      
    }, true);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    let fileBrowser = this.fileInput.nativeElement;
    let data;
  
    let f = fileBrowser.files[0];
   
    let r = new FileReader();
    r.readAsDataURL(f);
    r.onload= (e) => {
    data = r.result.split(',')[1];
    this.authenticationService.register(this.user.value.username, this.passwordControl.value, this.user.value.name, data).subscribe(val => {
      if (val) {
        this.router.navigate(['article/list']);
      }
      else{
        alert("Foto moet toegevoegd zijn!");
        this.router.navigate(['register/']);
      }

    });

    //console.log(data2);
    //send your binary data via $http or $resource or do anything else with it
    }  
    //console.log(data.result);  
    
    
  }

}


