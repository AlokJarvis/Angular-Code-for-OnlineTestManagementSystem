import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { TestEntity } from '../test-entity.model';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  constructor(private adminservice:AdminService) { }
  test:TestEntity=new TestEntity();
  tid:any
  obj:any;
  submitted=false;
  ngOnInit() {
    this.submitted=false;
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
    console.log(this.test.testTitle)
    console.log(this.test.testDuration)
    console.log(this.test.testTotalMarks)
    console.log(this.test.testMarksScored)
    console.log(this.test.startTime)
    console.log(this.test.endTime)
    this.adminservice.addTest(this.test)  
      .subscribe(data => this.obj=data, error => console.log(error)); 
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
