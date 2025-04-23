import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBlindExampleComponent } from './event-blind-example.component';

describe('EventBlindExampleComponent', () => {
  let component: EventBlindExampleComponent;
  let fixture: ComponentFixture<EventBlindExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBlindExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBlindExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
