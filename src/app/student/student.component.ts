import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentName: string | null = '';

constructor(protected activatedRoute: ActivatedRoute){

}
  ngOnInit(): void {
this.activatedRoute.paramMap.pipe(delay(1000)).subscribe((params: ParamMap) =>{
// apres la reception d'une valeur

  this.studentName = params.get('studentName');

console.log('retrive data');
});

console.log(this.studentName);

    throw new Error('Method not implemented.');
  }



}
