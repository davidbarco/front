import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  
})
export class ContentComponent implements OnInit {
  user;
  
 
  constructor(
    private userService: UserService,
    
  ) { 
    
    this.userService.authenticate$.subscribe(
      userAuth => {

        this.user = userAuth

      }
    )
    console.log(this.user)
   
  }

  ngOnInit(): void {

   
  }

}
