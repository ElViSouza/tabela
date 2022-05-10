import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPropioComponent } from './meu-propio.component';

describe('MeuPropioComponent', () => {
  let component: MeuPropioComponent;
  let fixture: ComponentFixture<MeuPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
