import {Component} from '@angular/core';
import {TaskComponent} from "./features/task/components/task/task.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TaskComponent]
})
export class AppComponent {
  title = 'task-manager';
}
