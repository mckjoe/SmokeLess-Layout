import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpeningComponent } from './opening/opening.component';
import { AboutComponent } from './about/about.component';
import { HealthComponent } from './health/health.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { RegisterQuestionsComponent } from './register-questions/register-questions.component';
import { ShareComponent } from './share/share.component';
import { ShareDetailComponent } from './share-detail/share-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StatsComponent } from './stats/stats.component';
import { TimeComponent } from './time/time.component';

const appRoutes: Routes = [
{
  path: '',
  component: OpeningComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'health',
  component: HealthComponent
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'opening',
  component: OpeningComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'register-questions',
  component: RegisterQuestionsComponent
},
{
  path: 'share',
  component: ShareComponent
},
{
  path: 'share-detail',
  component: ShareDetailComponent
},
{
  path: 'sign-in',
  component: SignInComponent
},
{
  path: 'stats',
  component: StatsComponent
},
{
  path: 'time',
  component: TimeComponent 
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
