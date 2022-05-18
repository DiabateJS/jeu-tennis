import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
  serverPlayer: string = '';
  iaPositions: Array<number> = [];
  player2Positions: Array<number> = [];

  constructor(private utilService: UtilService) { 
    this.serverPlayer = '';
    this.iaPositions = [0,0,0,0];
    this.player2Positions = [0,0,0,0];
  }

  ngOnInit(): void {
  }

  getServerPlayer(server: string){
    this.serverPlayer = server;
    //Initialisation de la balle et positions des joueurs
    //Position de l'IA
    const iaDefaultPosition: number = this.utilService.getRandomNumber(4);
    this.iaPositions[iaDefaultPosition - 1] = 1;

    this.player2Positions[1] = 1;

  }

  getPlayer2CurrentPosition(): number {
    return this.player2Positions.findIndex(index => index === 1 );
  }

  goToLeft(){
    const pos = this.getPlayer2CurrentPosition();
    if (pos > 0){
      this.player2Positions[pos] = 0;
      this.player2Positions[pos - 1] = 1;
    }
  }

  goToRight(){
    const pos = this.getPlayer2CurrentPosition();
    if (pos < 4){
      this.player2Positions[pos] = 0;
      this.player2Positions[pos + 1] = 1;
    }
  }

  getPlayer2Action(action: string) {
    if (action === 'gauche'){
      this.goToLeft();
    }
    if (action === 'droite'){
      this.goToRight();
    }
  }

}
