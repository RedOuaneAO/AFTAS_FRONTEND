import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInCompetitionComponent } from './register-in-competition.component';

describe('RegisterInCompetitionComponent', () => {
  let component: RegisterInCompetitionComponent;
  let fixture: ComponentFixture<RegisterInCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterInCompetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterInCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
