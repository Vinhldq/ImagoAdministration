import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthnoprofileComponent } from './authnoprofile.component';

describe('AuthnoprofileComponent', () => {
  let component: AuthnoprofileComponent;
  let fixture: ComponentFixture<AuthnoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthnoprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthnoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
