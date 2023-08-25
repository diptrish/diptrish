import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFactsComponent } from './company-facts.component';

describe('CompanyFactsComponent', () => {
  let component: CompanyFactsComponent;
  let fixture: ComponentFixture<CompanyFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyFactsComponent]
    });
    fixture = TestBed.createComponent(CompanyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
