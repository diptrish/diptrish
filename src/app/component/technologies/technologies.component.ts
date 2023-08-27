import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

  iconWithNameList=[
    {
      name:'CSS',
      icon:'assets/img/css.png',
      alt:'css-logo'
    },
    {
      name:'Spring Boot',
      icon:'assets/img/spring-boot.png',
      alt:'spring-logo'
    },
    {
      name:'Java',
      icon:'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png',
      alt:'java-logo'
    },
    {
      name:'JavaScript',
      icon:'https://img.icons8.com/fluency/48/javascript.png',
      alt:'javascript-logo'
    },
    {
      name:'Node Js',
      icon:'https://img.icons8.com/fluency/48/node-js.png',
      alt:'nodejs-logo'
    },
    {
      name:'React Js',
      icon:'https://img.icons8.com/bubbles/50/react.png',
      alt:'react-logo'
    },
    {
      name:'Angular',
      icon:'https://img.icons8.com/fluency/48/angularjs.png',
      alt:'angularjs-logo'
    },
    {
      name:'HTML',
      icon:'https://img.icons8.com/fluency/48/html-5.png',
      alt:'html-logo'
    },
    {
      name:'AWS',
      icon:'https://img.icons8.com/color/48/amazon-web-services.png',
      alt:'aws-logo'
    },
    {
      name:'Python',
      icon:'https://img.icons8.com/color/48/python--v1.png',
      alt:'python-logo'
    }
  ]

}
