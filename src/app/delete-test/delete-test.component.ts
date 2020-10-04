import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { TestEntity } from '../test-entity.model';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

 
  constructor(private adminservice:AdminService) { }
  test:TestEntity=new TestEntity();
  tid:number;
  status:any
  submitted=false;
  ngOnInit(){
    this.submitted=false;
  }       
  
  delete() {
    this.adminservice.deleteTest(this.tid)
      .subscribe(
        data => {
          this.status = data;        
          if(this.status){
            alert("deleted Successfully")
          }
          else{
            alert("Id not found")
          }
        },
        error => alert("ID not found"))
  }


}
