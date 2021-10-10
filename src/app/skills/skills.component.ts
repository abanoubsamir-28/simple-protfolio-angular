import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsFocus: string[] = ["UI/UX Design", "Responsive Design", "Web Design", "Mobile App Design"];
  userProgress = [{
    name: "HTML",
    width: "width:25%"
  },
  {
    name: "CSS",
    width: "width:50%"
  },
  {
    name: "JAVASCRIPT",
    width: "width:90%"
  } ,   {
    name: "TYPESCRIPT",
    width: "width:90%"
  },  {
    name: "RESPONSIVE",
    width: "width:80%"
  },  {
    name: "MOBILE DESIGN",
    width: "width:50%"
  },  {
    name: "ADOBE XD",
    width: "width:60%"
  },  {
    name: "FIGMA",
    width: "width:75%"
  }
];


  test: string = "width:1%";
  constructor() {
  }

  ngOnInit(): void {
  }

}
