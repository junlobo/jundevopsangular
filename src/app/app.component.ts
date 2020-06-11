import { Component } from '@angular/core';
import { IPServiceService } from './ipservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jundev';

  ip:string;

  constructor(private ipservice: IPServiceService) {
    this.GetIP();
  }

  GetIP() {
    this.ipservice.getIPAddress().subscribe((res: any) => {
      this.ip = res.ip;
    });
  }


}
