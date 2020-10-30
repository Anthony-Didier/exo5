import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/Cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];
  displayedColumns: string[] = ["nom", "age", "race", "vivant", "delete"];

  constructor(private catService: CatService) {
      this.catService.getAll().subscribe(data => {
          this.cats = data;
          console.log(this.cats);
      });
   }

  supprimer(id:number) {
    this.catService.delete(id).then(() => {
        this.cats = this.cats.filter(cat => cat.id!=id);
    });
  }

  ngOnInit(): void {
  }

}
