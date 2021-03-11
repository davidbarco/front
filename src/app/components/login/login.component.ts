import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router  } from '@angular/router';

import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.validateForm();
   }

  ngOnInit(): void {
  }

  validateForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required] ],
    })
  }

  login(){
    if(this.formLogin.valid  ){
      this.userService.login(this.formLogin.value).subscribe(
        (userLogged) =>{
          this.userService.saveToken(userLogged['token']);
          
          
          this.router.navigate(['/atleta']);
           //sweet alert.
           Swal.fire(
            'Bienvenido!',
            'Logueo exitoso',
            'success'
          )

         
          
        },(error) => {
         /*  swal('Los datos no coinciden', "", 'error'); */
          //sweet alert.
          Swal.fire(
            'Los datos no coinciden',
            'tus datos no coinciden de acuerdo a la informacion de registro',
            'error'
          )

          console.log('Error ', error)
        }
      )
    }else{
      /* swal('Diligencia todos los campos', "", 'error'); */
       //sweet alert.
       Swal.fire(
        'Diligencia todos los campos!',
        'Diligencia los campos correctamente',
        'error'
      )

    }
  }

}
