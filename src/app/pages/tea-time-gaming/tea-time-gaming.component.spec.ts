import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTimeGamingComponent } from './tea-time-gaming.component';

describe('TeaTimeGamingComponent', () => {
  let component: TeaTimeGamingComponent;
  let fixture: ComponentFixture<TeaTimeGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaTimeGamingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaTimeGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
