import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router,
  ) {
    this.createValidator();
   }

  ngOnInit(): void {
  }
  createValidator(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  registerUser(){
    if(this.userForm.valid){
      this.userService.createUser(this.userForm.value).subscribe(
        (createdUser) => {
          
          if(createdUser.message == "El correo ya existe"){
             Swal.fire(
              'usuario ya existe',
              "", 
              'error'); 
            
          }else{
             Swal.fire('Registro Exítoso', "Ahora puedes logearte con tus datos", 'success');

            this.route.navigate(['/login'])
          }
        },(error) => {
          console.log("error al registrar el usuario", error)
        }
      )
    }else{
      Swal.fire("Diligencia todos los campos", "Diligencia los campos correctamente", 'error'); 
      
    }
  }

}
