import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Chart from 'chart.js/auto';
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
  @ViewChild('MyChart') chart!: ElementRef<HTMLCanvasElement>;

   myChart!: Chart<"bar", string[], string>;

   ngAfterViewInit(): void {
    this.createChart();
   }
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
  createChart(){
    let ctx: CanvasRenderingContext2D = this.chart.nativeElement.getContext('2d')!;

    // Ahora puedes trabajar con canvasElement según tus necesidades
    this.myChart = new Chart(ctx, {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Accenture','Lucatic','GrupoAL',
								 'Tourdiez Travel', 'DXC Tecnology','Serbatic (Mutua Madrileña)', ],
	       datasets: [
          {
            label: "Java",
            data: ['542','576', '572', '479', '392',
								 '574'],
            backgroundColor: 'blue'
          },
          {
            label: "Spring Boot",
            data: ['542', '542', '0', '327',
									  '538', '541'],
            backgroundColor: 'green'
          },
          {
            label: "Python",
            data: ['0', '0', '0', '542', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'orange'
          },
          {
            label: "Oracle-MySQL-Db2-Mongo",
            data: ['542', '542', '536', '542', '538', '541'],
            backgroundColor: 'darkred'
          },
          {
            label: "JSF",
            data: ['0', '0', '542', '0', '0',
									 '0'],
            backgroundColor: 'aquamarine'
          },
          {
            label: "Git/Subversion",
            data: ['542', '542', '542', '542', '542',
									  '542'],
            backgroundColor: 'red'
          },

          {
            label: "JS",
            data: ['0', '0', '0', '0', '0',
									 '542'],
            backgroundColor: 'yellow'
          }


        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
   this.myChart.update();
  }
  title = 'Francisco Javier Lisbona Roldán';

}


