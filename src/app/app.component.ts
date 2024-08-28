import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public notification = () => {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        this.popupNotif();
      } else {
        console.log('Permission denied');
      }
    })
  }

  public popupNotif = () => {
    const notification = new Notification('New notification', {
      body: 'This a default notification message'
    });

    notification.onclick = () => {
      console.log('Notification clicked!');
    }
  }
}
