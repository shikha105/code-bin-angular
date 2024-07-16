import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredDemoComponent } from './deferred-demo.component';

describe('DeferredDemoComponent', () => {
  let component: DeferredDemoComponent;
  let fixture: ComponentFixture<DeferredDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
