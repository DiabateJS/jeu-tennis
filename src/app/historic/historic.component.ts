import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  @Input()
  serverPlayer: string = '';
  constructor() { 
    this.serverPlayer = '';
  }

  ngOnInit(): void {
  }

}
