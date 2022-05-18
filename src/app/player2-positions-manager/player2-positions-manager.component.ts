import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player2-positions-manager',
  templateUrl: './player2-positions-manager.component.html',
  styleUrls: ['./player2-positions-manager.component.scss']
})
export class Player2PositionsManagerComponent implements OnInit {

  @Output()
  player2Action: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  actionLeft() {
    this.player2Action.emit("gauche");
  }

  actionRight(){
    this.player2Action.emit("droite");
  }

}
