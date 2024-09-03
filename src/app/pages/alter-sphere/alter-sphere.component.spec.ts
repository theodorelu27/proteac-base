import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterSphereComponent } from './alter-sphere.component';

describe('AlterSphereComponent', () => {
  let component: AlterSphereComponent;
  let fixture: ComponentFixture<AlterSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterSphereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
