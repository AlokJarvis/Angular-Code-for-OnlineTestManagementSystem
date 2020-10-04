import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { TestEntity } from '../test-entity.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  constructor(private adminservice:AdminService) { }
status=false
testId:number
test:TestEntity=new TestEntity();
  tid:any
  obj:any;
  submitted=false;
  
  ngOnInit(): void {
    this.status=false
    this.submitted=false;
  }
  private searchTests() {
    this.adminservice.getTest(this.testId)
    .subscribe(data =>{if(data!=''){eval('this.test='+data)};this.status=true},error=>{alert("ID does'nt exist");window.location.reload()});
}
onSubmit() { 
  this.searchTests();
} 


  OnlineTestform=new FormGroup({
    testTitle:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),  
    testDuration:new FormControl('',[Validators.required]),  
    testTotalMarks:new FormControl('',[Validators.required ]),
    testMarksScored : new FormControl('',[Validators.required ]),
    startTime: new FormControl('',[Validators.required]),
    endTime: new FormControl('',[Validators.required ])
  });
  saveTest(saveTest){  
    this.test=new TestEntity();      
    this.test.testTitle=this.TestTitle.value;  
    this.test.testDuration=this.TestDuration.value;  
    this.test.testTotalMarks=this.TestTotalMarks.value; 
    this.test.testMarksScored=this.TestMarksScored.value;
    this.test.startTime=this.StartTime.value;
    this.test.endTime=this.EndTime.value;
    this.submitted = true;  
    this.save();  
  }  
  save() {
    console.log(this.testId+""+this.test)
    this.adminservice.updateTest(this.testId,this.test)  
      .subscribe(data =>{ this.obj=data;console.log("bdhAI")}, error => console.log(error)); 
    this.test = new TestEntity();  
  }
  
  get TestTitle(){  
    return this.OnlineTestform.get('testTitle');  
  }  
  
  get TestDuration(){  
    return this.OnlineTestform.get('testDuration');  
  }  
  
  get TestTotalMarks(){  
    return this.OnlineTestform.get('testTotalMarks');  
  }  
  get TestMarksScored(){  
    return this.OnlineTestform.get('testMarksScored');  
  }  
  get StartTime(){  
    return this.OnlineTestform.get('startTime');  
  }  
  get EndTime(){  
    return this.OnlineTestform.get('endTime');  
  }  
  addTestForm(){  
    this.submitted=false;  
    this.OnlineTestform.reset();  
  }  

}
