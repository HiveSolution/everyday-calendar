import { Component, OnInit } from '@angular/core';
import { monthBase } from './core/modules/monthBase';
import { IMonth } from './core/interfaces/month.interface';
import { StorageService } from './core/services/storage.service';

import { MDCDialog } from '@material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public months: IMonth[] = monthBase;
  private _dialog;

  /**
   * Getter $task
   * @return {string}
   */
  public get task(): string {
    return this.storageService.getItem('task');
  }

  /**
   * Setter $task
   * @param {string} value
   */
  public set task(value: string) {
    this.storageService.setItem('task', value);
  }

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this._dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
  }

  public toggleDialog() {
    this._dialog.open();
  }
}
