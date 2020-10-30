import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  catForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private catService: CatService,
    private router: Router
    ) { 
    this.catForm = this.formBuilder.group({
      nom:[''],
      age:[''],
      race:[''],
      vivant:['']
    })
}

  ngOnInit(): void {
  }

  onSubmit(){
    this.catService.create(this.catForm.value).subscribe(()=>{
      this.router.navigate(['/'])
    });
  }
}
