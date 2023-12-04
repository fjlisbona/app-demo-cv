import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { es,en } from 'src/assets/i18n/*.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workingExperience: any;
  learningTraining: any;

  constructor(private translate: TranslateService) {
    // Configura el idioma inicial
    this.translate.setDefaultLang('es');


  }
  changeLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'es' : 'en'; // Alternar entre inglés y español
    this.translate.use(newLang);
  }
  displayTraduction(){
    (this.translate.currentLang==='es')?es.workingExperience():es.workExperience();
    (this.translate.currentLang==='en')?en.learningTraining():en.learningTraining();
  }

  title = 'Francisco Javier Lisbona Roldán';

}


