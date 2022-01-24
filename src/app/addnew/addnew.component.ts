import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  getParamsem: any;
  getParamenroll: any;

  constructor(private service: AdminService,private router :ActivatedRoute ) { }

  ngOnInit(): void {
    this.getParamenroll = this.router.snapshot.paramMap.get('enroll');
    this.getParamsem = this.router.snapshot.paramMap.get('semester');
    if (this.getParamenroll ) {
      this.service.getSingleData(this.getParamenroll,this.getParamsem).subscribe((res) => {
        this.userForm.patchValue({
          enroll: res.data[0].enrollment,
          name: res.data[0].name,
          dob: res.data[0].dob,
          semester: res.data[0].semester,
          branch: res.data[0].branch,
          cn1: res.data[0].cn1,
          cn2: res.data[0].cn2,
          cn3: res.data[0].cn3,
          cn4: res.data[0].cn4,
          cn5: res.data[0].cn5,
          cn6: res.data[0].cn6,
          cn7: res.data[0].cn7,
          cn8: res.data[0].cn8,
          cn9: res.data[0].cn9,
          m1: res.data[0].m1,
          m2: res.data[0].m2,
          m3: res.data[0].m3,
          m4: res.data[0].m4,
          m5: res.data[0].m5,
          m6: res.data[0].m6,
          m7: res.data[0].m7,
          m8: res.data[0].m8,
          m9: res.data[0].m9,
        });

      });
    }
  }
  userForm = new FormGroup({
    'enroll': new FormControl('', Validators.required),
    'name': new FormControl('', Validators.required),
    'dob': new FormControl('', Validators.required),
    'semester': new FormControl('', Validators.required),
    'branch': new FormControl('', Validators.required),
    'cn1': new FormControl('', Validators.required),
    'cn2': new FormControl('', Validators.required),
    'cn3': new FormControl('', Validators.required),
    'cn4': new FormControl('', Validators.required),
    'cn5': new FormControl('', Validators.required),
    'cn6': new FormControl('', Validators.required),
    'cn7': new FormControl('', Validators.required),
    'cn8': new FormControl('', Validators.required),
    'cn9': new FormControl('', Validators.required),
    'm1': new FormControl('', Validators.required),
    'm2': new FormControl('', Validators.required),
    'm3': new FormControl('', Validators.required),
    'm4': new FormControl('', Validators.required),
    'm5': new FormControl('', Validators.required),
    'm6': new FormControl('', Validators.required),
    'm7': new FormControl('', Validators.required),
    'm8': new FormControl('', Validators.required),
    'm9': new FormControl('', Validators.required),
  });



  userSubmit() {
    if (this.userForm.valid) {
     
      console.log(this.userForm.value);
      this.service.addData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        
      });
      alert("Add successfully");

    }
    else {
      alert( 'All fields are required !!');

      
    }
  }


  //updatedata
userUpdate() {
  console.log(this.userForm.value, 'updatedform');
  if (this.userForm.valid) {
    this.service.updateData(this.userForm.value, this.getParamenroll ,this.getParamsem).subscribe((res) => {
      console.log(res, 'resupdated');
});
  } 
}
}
