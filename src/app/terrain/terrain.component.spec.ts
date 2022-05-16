import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainComponent } from './terrain.component';

describe('TerrainComponent', () => {
  let component: TerrainComponent;
  let fixture: ComponentFixture<TerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tennis court has green background', () => {
    const TERRAIN_BACKGROUND_COLOR = 'green';

    const element: HTMLElement = fixture.nativeElement;
    const elementTerrain = element.querySelector('div');

    expect(elementTerrain?.style.backgroundColor).toBe(TERRAIN_BACKGROUND_COLOR);
  });

  it('should tennis court block has blue background', () => {
    const BLOCK_BACKGROUND_COLOR = "blue";
    const element: HTMLElement = fixture.nativeElement;
    const oneBlock: HTMLElement | null = element.querySelector('.block');

    expect(oneBlock?.style.backgroundColor).toBe(BLOCK_BACKGROUND_COLOR);
  });

  it('should tennis court has 8 blocks', () => {
    const element: HTMLElement = fixture.nativeElement;
    const blocks = element.querySelectorAll('.block'); 
    expect(Array.from(blocks).length).toBe(8);
    
  });

});
