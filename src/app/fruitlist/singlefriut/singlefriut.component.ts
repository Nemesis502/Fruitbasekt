import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-singlefriut',
  standalone: true,
  imports: [],
  templateUrl: './singlefriut.component.html',
  styleUrl: './singlefriut.component.scss'
})
export class SinglefriutComponent {
 @Input("testNumber")fruitnumber = 0;
}
