import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2PositionsManagerComponent } from './player2-positions-manager.component';

describe('Player2PositionsManagerComponent', () => {
  let component: Player2PositionsManagerComponent;
  let fixture: ComponentFixture<Player2PositionsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player2PositionsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Player2PositionsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
