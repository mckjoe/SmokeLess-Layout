import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { OpeningComponent } from './opening/opening.component';
import { RegisterComponent } from './register/register.component';
import { RegisterQuestionsComponent } from './register-questions/register-questions.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { TimeComponent } from './time/time.component';
import { StatsComponent } from './stats/stats.component';
import { HealthComponent } from './health/health.component';
import { ShareComponent } from './share/share.component';
import { ShareDetailComponent } from './share-detail/share-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
    RegisterComponent,
    RegisterQuestionsComponent,
    SignInComponent,
    MainComponent,
    AboutComponent,
    TimeComponent,
    StatsComponent,
    HealthComponent,
    ShareComponent,
    ShareDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
