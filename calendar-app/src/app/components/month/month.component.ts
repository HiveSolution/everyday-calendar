import { Component, OnInit, Input } from '@angular/core';
import { IMonth } from 'src/app/core/interfaces/month.interface';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent implements OnInit {
  @Input()
  public month: IMonth;

  public currentState;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.currentState = this.storageService.getItem(this.month.title);
    if (!this.currentState) {
      this.currentState = {};
    }
  }

  public generateDayArray(length: number) {
    return Array.from({ length: length }, (v, i) => i + 1);
  }

  public toggleCompletion(month: string, day: number) {
    let monthData = this.storageService.getItem(month);
    if (!monthData) {
      monthData = {};
    }
    monthData[day.toString()] = monthData[day.toString()] ? !monthData[day.toString()] : true;
    this.currentState[day.toString()] = monthData[day.toString()];
    this.storageService.setItem(month, monthData);
  }
}
