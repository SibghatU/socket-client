import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data:any[]=[];
  private hubConnection!: signalR.HubConnection;
    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('http://localhost:6001/socket')
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    
    public addTransferChartDataListener = () => {
      this.hubConnection.on('dataRecieved', (data) => {
        this.data.push(data);
      });
    }
}