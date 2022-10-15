import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile (file: any) {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>('http://localhost:8085/file', formData);
  }
}
