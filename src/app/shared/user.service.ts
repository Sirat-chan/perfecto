import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

const API_URL = 'http://localhost:8085/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;
  private userConnectedSource = new BehaviorSubject<string>('');
  userConnected = this.userConnectedSource.asObservable();

  constructor(private http: HttpClient) { }

  getUserById(userId: any) {
    this.http.get<any>(`${API_URL}${userId}`)
      .subscribe(user => {
        this.currentUser = user;
        this.userConnectedSource.next(this.currentUser);
      });
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(API_URL, user);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', );
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

    updateUserProfilePicture(userId: number, profilePicture: string) {
      this.http.patch<any>(`${API_URL}${userId}/profilePicture`, profilePicture).subscribe(user => {
        this.currentUser.avatar = user.avatar;
        this.userConnectedSource.next(this.currentUser);
      });
    }
}
