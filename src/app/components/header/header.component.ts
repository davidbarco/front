import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute,Params} from "@angular/router";
import { UserService } from '../../services/user.service';
import{Global} from "../../services/global";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  user;
  apiURL: String;
  public url: string;

  constructor(
    private userService: UserService,
    private _router: Router,
  ) {
    this.url = Global.url;
    this.apiURL = this.userService.apiURL;
    this.userService.authenticate$.subscribe(
      userAuth => {

        this.user = userAuth

      }
    )
   }

  ngOnInit(): void {
  }

  destroySession() {
    this.userService.removeToken();
    this._router.navigate(['/login']);

  }

}
