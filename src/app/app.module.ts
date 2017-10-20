import { CompletadosComponent } from '../pages/completados/completados.component';
import { PendientesPipe } from './pipes/pendientes.pipe';
import { DetalleComponent } from '../pages/detalle/detalle.component';
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { ListaDeseosService } from './services/lista-deseos.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
 
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    AgregarComponent,
    PlaceHolderPipe,
    PendientesPipe,
    DetalleComponent,
    CompletadosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    CompletadosComponent,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService

  ]
})
export class AppModule {}
