import {  Routes } from '@angular/router';
import { GlavnayaComponent } from './pages/glavnaya/glavnaya.component';
import { KomandaComponent } from './pages/komanda/komanda.component';
import { AcademyManicureComponent } from './pages/academy-manicure/academy-manicure.component';
import { NashiRabotiComponent } from './pages/nashi-raboti/nashi-raboti.component';
import { OkrashivanieComponent } from './pages/uslugi/okrashivanie/okrashivanie.component';
import { FormComponent } from './pages/form/form.component';
import { StrizhkiComponent } from './pages/uslugi/strizhki/strizhki.component';
import { ManicureComponent } from './pages/uslugi/manicure/manicure.component';
import { PedicureComponent } from './pages/uslugi/pedicure/pedicure.component';
import { MassageComponent } from './pages/uslugi/massage/massage.component';
import { MuzhStrizhkiComponent } from './pages/uslugi/muzh-strizhki/muzh-strizhki.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: GlavnayaComponent, pathMatch: 'full' }, // Путь по умолчанию
  { path: 'komanda', component: KomandaComponent,},
  { path: 'academy', component: AcademyManicureComponent,},
  { path: 'nashi-raboti', component: NashiRabotiComponent,},
  { path: 'okrashivanie', component: OkrashivanieComponent,},
  { path: 'strizhki', component: StrizhkiComponent,},
  { path: 'manicure', component: ManicureComponent,},
  { path: 'pedicure', component: PedicureComponent,},
  { path: 'massage', component: MassageComponent,},
  { path: 'muzh-strizhki', component: MuzhStrizhkiComponent,},
  { path: 'form', component: FormComponent,},
  { path: 'privacy-policy', component: PrivacyPolicyComponent,},
  //{ path: 'about', component: AboutComponent },
  //{ path: '**', redirectTo: '' } // Переадресация на главную страницу для несуществующих маршрутов
];

