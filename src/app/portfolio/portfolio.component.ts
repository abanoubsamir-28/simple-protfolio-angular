import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  designs = ["Mobile Design",
    "Web Design",
    "Logo Design",
    "Web Application Development",
    "Mobile Application Development",
    "PWA Development"];

  constructor() { }

  ngOnInit(): void {
  }

}
