import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from "@angular/forms";
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from "ng2-charts";
import { GraficoDoughnutComponent } from '../components/grafico-doughnut/grafico-doughnut.component';

@NgModule({
   declarations:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDoughnutComponent
    
   ],
   exports:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
   ],
   imports:[
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
   ]
})

export class PagesModule {};