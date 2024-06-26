import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRootComponent } from './chat-root.component';

describe('ChatRootComponent', () => {
  let component: ChatRootComponent;
  let fixture: ComponentFixture<ChatRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
