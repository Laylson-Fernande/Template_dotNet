import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class User_rowComponent implements OnInit {
  private _users: any;
  private _filterList: string = '';

  public get users(): any {
    return this.filterList ? this.filterUsers(this.filterList) : this._users;
  }

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
  }

  filterUsers(filterBy: string): any {
    filterBy = filterBy.toLowerCase();
    return this._users.filter(
      (user: { name: string; username: string }) => user.name.toLowerCase().indexOf(filterBy) !== -1 || user.username.toLowerCase().indexOf(filterBy) !== -1
    );
  }

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.http.get('https://localhost:5001/users').subscribe({
      next: (response) => this._users = response,
      error: (err) => console.error(err),
      complete: () => console.info('complete')
    }
    );
  }
}
