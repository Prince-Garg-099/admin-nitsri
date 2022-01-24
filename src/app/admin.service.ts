import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  apiUrl='http://localhost:3000/user';



  addData(data:any):Observable<any>
{
  console.log(data,'createapi=>');
  return this._http.post(`${this.apiUrl}`,data);
}  


getAllData():Observable<any>
{
    return this._http.get(`${this.apiUrl}`);

}

// delete data
deleteData(enrollment:any,semester:any):Observable<any>
{
  let enroll = enrollment;
  let sem= semester;
  console.log(`${this.apiUrl}/${enroll}/${sem}`)
  return this._http.delete(`${this.apiUrl}/${enroll}/${sem}`);
}

//getsingle data
getSingleData(enroll:any, sem:any):Observable<any>
{
  let enrolls = enroll;
  let sems = sem;
  return this._http.get(`${this.apiUrl}/${enrolls}/${sems}`);
}

//updateData
updateData(data:any,enroll:any, sem:any):Observable<any>
{
  let enrolls = enroll;
  let sems = sem;
  return this._http.put(`${this.apiUrl}/${enrolls}/${sems}`,data);
}


}
