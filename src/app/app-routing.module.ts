import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';

import { SelectPlanComponent } from './select-plan/select-plan.component';

const routes: Routes = [
  
  {path: 'personalInfo', component: PersonalInfoComponent},
  {path: 'pickAddOns', component: PickAddonsComponent},
  {path: 'selectPlan', component: SelectPlanComponent},
  {path: 'finishingUp', component: FinishingUpComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
