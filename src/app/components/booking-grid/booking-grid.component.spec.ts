import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { BookingGridComponent } from './booking-grid.component';

describe('BookingGridComponent', () => {
  let component: BookingGridComponent;
  let fixture: ComponentFixture<BookingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ BookingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
