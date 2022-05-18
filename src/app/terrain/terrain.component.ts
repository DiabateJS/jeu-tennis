import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {
  serverPlayer: string = '';
  constructor(private utilService: UtilService) { 
    this.serverPlayer = '';
  }

  ngOnInit(): void {
  }

  getServerPlayer($event: any){
    this.serverPlayer = $event;
  }

}
