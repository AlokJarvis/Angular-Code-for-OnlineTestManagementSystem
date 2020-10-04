import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Admin } from './models/admin.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient) { }

  private loginUrl = 'http://localhost:8088/onlinetestmanagementsystem/admins';
  
  public loginAdmin(admin :Admin):Observable<any>{
    return this.http.post<any>(this.loginUrl,admin)
    
}
addTest(test:Object): Observable<Object>
  {
  
  return this.http.post("http://localhost:8088/onlinetestmanagementsystem/add",test); 
  }
  updateTest(testId:number,test:Object):Observable<Object>{
    return this.http.put(`http://localhost:8088/onlinetestmanagementsystem/update/${testId}`,test);
  }
  getTest(testId:number):Observable<Object>{
    return this.http.get("http://localhost:8088/onlinetestmanagementsystem/getTest/"+testId,{ responseType: 'text' });   
  }
  deleteTest(testId: number): Observable<any> {  
    return this.http.get("http://localhost:8088/onlinetestmanagementsystem/removeTest/"+testId, { responseType: 'text' });  
  }  


  







}