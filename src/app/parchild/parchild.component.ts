import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleService } from '../services/sample.service';


@Component({
  selector: 'app-parchild',
  templateUrl: './parchild.component.html',
  styleUrls: ['./parchild.component.css']
})
export class ParchildComponent implements OnInit {
  data;
  data2;
  kailu;
  // data3 = "this is valid";
  @Input() collegeroom;
  @Input() secondcollegeroom;
  @Input() thirdcollegeroom;
  @Output() messageEvent = new EventEmitter();
  @Output() labware = new EventEmitter();
  constructor(private dataservice : SampleService) { }


  ngOnInit() {  
    this.data = "this is correct";
    this.data2 = "this is wrong";
    // this.data3 = "this is valid";
    this.messageEvent.emit(this.data);
    this.labware.emit(this.data2);
    this.dataservice.changeMessage('Hiiii....');

    this.dataservice.rawdata().subscribe(d => {
      this.kailu = d;
      console.log("New service data.....",this.kailu); 
    })
  }

  newMessage() {
    this.dataservice.changeMessage("Hello from Sibling");
  }

  

}
