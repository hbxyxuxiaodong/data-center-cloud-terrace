import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentImportComponent } from './equipment-import.component';

describe('EquipmentImportComponent', () => {
  let component: EquipmentImportComponent;
  let fixture: ComponentFixture<EquipmentImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
