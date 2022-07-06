import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EvhomeComponent } from './evhome.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'app/core/icons/icons.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChargingstationlistComponent } from './chargingstation/chargingstationlist.component';
import { ChargingstationdetailComponent } from './chargingstationdetail/chargingstationdetail.component';
import { ChargingstationinfoComponent } from './chargingstationinfo/chargingstationinfo.component';

const evhomeRoutes: Route[] = [
  {
      path     : '',
      component: EvhomeComponent
  }
];

@NgModule({
  declarations: [
    EvhomeComponent,
    ChargingstationlistComponent,
    ChargingstationdetailComponent,
    ChargingstationinfoComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(evhomeRoutes),
    GridModule,
    InputsModule,
    DropDownsModule,
    FormsModule,
    IconsModule,
    ButtonsModule,
    LabelModule,
    LayoutModule
  ]
})
export class EvhomeModule { }
