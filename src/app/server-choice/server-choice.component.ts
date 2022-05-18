import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-server-choice',
  templateUrl: './server-choice.component.html',
  styleUrls: ['./server-choice.component.scss']
})
export class ServerChoiceComponent implements OnInit {
  serverPlayer: string = '';
  canShowSpinner: boolean = true;
  canShowDesGif: boolean = false;
  canShowDesImg: boolean = false;

  @Output()
  selectedServerPlayer: EventEmitter<string> = new EventEmitter<string>();

  constructor(private utilService: UtilService) { 
    this.serverPlayer = '';
    setTimeout(() => {
      this.canShowSpinner = false;
      this.canShowDesGif = true;
      this.canShowDesImg = false;
      setTimeout(() => {
        this.canShowSpinner = false;
        this.canShowDesGif = false;
        this.canShowDesImg = true;
        this.serverPlayer = this.selectServerPlayer();
        this.selectedServerPlayer.emit(this.serverPlayer);
      }, 2000); 
    }, 3000);
  }

  ngOnInit(): void {
  }

  selectServerPlayer(): string {
    const rndNumber: number = this.utilService.getRandomNumber(100);
    return rndNumber % 2 == 0 ? 'Joueur 1' : 'Joueur 2';
  }

}
