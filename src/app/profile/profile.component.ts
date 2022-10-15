import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {UserService} from "../shared/user.service";
import {FileService} from "../shared/file.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @Input() connectedUser: any;

  constructor(private  loginService : LoginService,
              private userService: UserService,
              private fileService: FileService) { }

  ngOnInit(): void {
    console.warn(this.connectedUser);
  }

  signOut() {
    if (this.loginService.getToken()) {
      this.loginService.logout();
      this.reloadPage();
    }
  }

  reloadPage() {
    window.location.reload();
  }

  // @ts-ignore
  changeProfilePicture(event) {
    if (event.target.files.length === 0) {
      return;
    }

    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }

    const uploadedFile = event.target.files[0];
    this.fileService.uploadFile(uploadedFile).subscribe(result => {
      this.connectedUser.avatar = result.link;
      this.userService.updateUserProfilePicture(this.connectedUser.id, this.connectedUser.avatar);
    });

    /*const reader = new FileReader();
    //this.imagePath = files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.connectedUser.avatar = event.target.result;
    }*/
  }
}
