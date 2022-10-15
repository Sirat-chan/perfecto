import { Pipe, PipeTransform } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login/login.service";

@Pipe({
  name: 'authImage'
})
export class AuthImagePipe implements PipeTransform {
  constructor(private http: HttpClient,
              private loginService : LoginService) {
  }
  async transform(src: string): Promise<string> {
    const token = this.loginService.getToken();
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    const imageBlob = await this.http.get(src, {headers, responseType: 'blob'}).toPromise();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result as string);
      // @ts-ignore
      reader.readAsDataURL(imageBlob);
    });
  }

}
