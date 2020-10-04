import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-get-test',
  templateUrl: './get-test.component.html',
  styleUrls: ['./get-test.component.css']
})
export class GetTestComponent implements OnInit {

  constructor(private adminservice:AdminService) { }
  test:any
  testId:number
    ngOnInit(): void {
    }
    private searchTests() {
      this.adminservice.getTest(this.testId)
      .subscribe(data =>{if(data!=''){eval('this.test='+data)}},error=>{alert("ID does'nt exist");window.location.reload()});
  }
  onSubmit() { 
    this.searchTests();
  } 

}
