import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

//  url = `http://localhost:3000/cats`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cat[]> {
      return this.http.get<Cat[]>(`http://localhost:3000/cats`);
    }

  getById(id: number) {
      return this.http.get(`http://localhost:3000/cats/${id}`);
  }

  create(cat: Cat): Observable<Cat> {
      return this.http.post<Cat>(`http://localhost:3000/cats`, cat);
    }

  update(cat: Cat): Observable<Cat> {
      return this.http.put<Cat>(`http://localhost:3000/cats`, cat);
    }

    delete(id: number): Promise<any> {
        return fetch(`http://localhost:3000/cats/${id}`, {
            method: "DELETE"
        })
    }
}
