import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [AngularFirestoreModule, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
