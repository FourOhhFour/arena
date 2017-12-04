import { FirebaseApp } from 'angularfire2/firebase.app.module';

//base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//services
import { AuthService } from './auth.service';
import { FirebaseService } from './firebase.service';

//components
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { SportComponent } from './sport/sport.component';
import { ResultsComponent } from './results/results.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { IndividualSportComponent } from './individual-sport/individual-sport.component';
import { ThreadComponent } from './thread/thread.component';
import { CommentComponent } from './comment/comment.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { UserSportSelectionComponent } from './user-sport-selection/user-sport-selection.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { FixtureComponent } from './fixture/fixture.component';

//routing
import { RouterModule, Routes } from '@angular/router';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'sport', component: IndividualSportComponent },
  { path: 'sport/:id', component: SportComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    FeedComponent,
    SportComponent,
    ResultsComponent,
    FixturesComponent,
    IndividualSportComponent,
    ThreadComponent,
    CommentComponent,
    UserPageComponent,
    UserBioComponent,
    UserSportSelectionComponent,
    RegisterComponent,
    ResultComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
