import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var require: any;
const en = require('./../assets/i18n/en.js');
const es = require('./../assets/i18n/es.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idioma: any;

  constructor(private translate: TranslateService) {
    // Configura el idioma inicial
          //this.translate.setDefaultLang('es');
    this.translate.currentLang='es';

  }
  changeLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = (currentLang === 'en') ? 'es' : 'en'; // Alternar entre inglés y español
    this.translate.currentLang=newLang;
  }
  changeFlag(){
    return this.translate.currentLang;
  }
  displayLearningTraining(){

    return (this.translate.currentLang === 'en') ? en.learningTraining() : es.learningTraining();

  }
  displayWorkingExperience(){
    return (this.translate.currentLang==='en') ?  en.workingExperience() :  es.workingExperience();
  }

  title = 'Francisco Javier Lisbona Roldán';

}


