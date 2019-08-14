import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule,
  MatFormFieldModule, MatInputModule, MatCardModule,
  MatSnackBarModule, MatListModule, MatGridListModule,
  MatSliderModule, MatSelectModule, MatTabsModule,
  MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BodyComponent } from './components/body/body.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { GoComponent } from './pages/go/go.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BodyComponent,
    ConvertComponent,
    GoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,

    FontAwesomeModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatCardModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
