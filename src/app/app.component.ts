import { Component, ViewChild } from '@angular/core';
import { ParchildComponent } from './parchild/parchild.component';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datareceive;
  datareceive2;
  datareceive3;
  datareceive4;
  rollNumber = 'onetwothree';
  serialNumber = 'fourfivesix';
  codeNumber = 'seveneightnine';
  title = 'inteactionsc2c';
  message;
  dataTransferred;
  serviceresult;
  kailu;

  @ViewChild(ParchildComponent) chasmi;
  // @ViewChild(ParchildComponent) kritinaga;

  constructor(private dataservice: SampleService) {

  }
  ngOnInit() { 
    this.dataservice.sampleApi().subscribe(data => {
      this.serviceresult = data;
      console.log('servie result',this.serviceresult);
    });

    this.dataservice.data.subscribe(chasmi => {this.dataTransferred = chasmi})

  
  }

  ngAfterViewInit() {
    this.datareceive3 = this.chasmi.data2;
    // this.datareceive4 = this.chasmi.data3;
    debugger

  }

  receiveMessage($event){
    this.datareceive = $event;
   }

  receivedraft(chasmi){
    this.datareceive2 = chasmi;
   }
}
00