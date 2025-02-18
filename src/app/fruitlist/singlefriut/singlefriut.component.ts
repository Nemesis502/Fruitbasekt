import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefriut',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefriut.component.html',
  styleUrl: './singlefriut.component.scss'
})
export class SinglefriutComponent {
  @Input() fruit = {
    name: "Apfel",
    img: "apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
  };

  inputData = "";

  @Output()fruitname = new EventEmitter<string>();

  SendInputData(){
    this.fruitname.emit(this.inputData);
    this.inputData = "";
  }
}
