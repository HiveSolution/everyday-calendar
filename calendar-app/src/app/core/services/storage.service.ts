import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public static PREFIX = 'ec_';
  private _storage: Storage;

  constructor() {
    this._storage = localStorage;
  }

  public setItem(key: string, value: any): void {
    this._storage.setItem(`${StorageService.PREFIX}${key}`, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    this._storage.removeItem(`${StorageService.PREFIX}${key}`);
  }

  public getItem(key: string): any {
    return JSON.parse(this._storage.getItem(`${StorageService.PREFIX}${key}`));
  }
}
