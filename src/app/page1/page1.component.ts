import { Component, OnInit } from '@angular/core';
import { Page1Service } from './page1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private pageService: Page1Service) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.test();
  }

  test = function(){
     this.pageService.test().subscribe((data) => {
       this.testData = data.data;
       this.repos = data.repos;
     });
  }

}
