import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  readData: any;

  constructor(private service: AdminService,) { }

  ngOnInit(): void {
    this.getAllData();
   
    
  }



  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      this.readData = res.data;    
  });}

 
  //get deleted

  deleteId(enrollment:any, semester:any){
    if (confirm("Do you want to delete this result!")){
    this.service.deleteData(enrollment,semester ).subscribe((res)=>{
      alert("Deleted Succesfully")
      this.getAllData();
     });
    }else{

    }
  }


}
