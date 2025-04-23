import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBlindExampleComponent } from './components/event-blind-example/event-blind-example.component';

export const routes: Routes = [
  {path:'welcome', component: WelcomeComponent},
  {path:'for-directive-example', component: ForDirectiveExampleComponent},
  {path: 'component-input-example', component: ComponentInputExampleComponent},
  {path: 'event-bind-example', component: EventBlindExampleComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
