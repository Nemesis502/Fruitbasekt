import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefriutComponent } from './singlefriut/singlefriut.component';
import { FruitlistdataService } from '../fruitlistdata.service';


@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefriutComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);


  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}
