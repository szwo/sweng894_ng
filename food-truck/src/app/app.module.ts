import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComponentsModule } from './exports/components.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { RestService } from './services/rest.service';
import { AccountService } from './services/account.service';
import { EventService } from './services/event.service';
import { EventsResolverService } from './services/events-resolver.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ComponentsModule,
		AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCsVXEjmNBqq8gKxIJeu4Aqno25tEmuIAU',
        libraries: ["places"],
    }),
		AppRoutingModule
	],
	providers: [RestService, AccountService, EventService, EventsResolverService],
	bootstrap: [AppComponent]
})
export class AppModule { }
