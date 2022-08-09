import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfopageComponent } from './product-infopage.component';

describe('ProductInfopageComponent', () => {
  let component: ProductInfopageComponent;
  let fixture: ComponentFixture<ProductInfopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
