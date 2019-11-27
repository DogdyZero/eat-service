import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() posicao:number;
  @Output() posicaoChange = new EventEmitter();
  constructor() { }

  changePosition(id:number){
    this.posicao=id;
    this.posicaoChange.emit(this.posicao)
  }
  ngOnInit() {
  }

}
