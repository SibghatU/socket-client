import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrService } from 'src/services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-web';
  constructor(public signalRService: SignalrService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   

  }
}
