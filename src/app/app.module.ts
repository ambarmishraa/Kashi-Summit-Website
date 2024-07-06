import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HamaraKashiComponent } from './hamara-kashi/hamara-kashi.component';
import { KashiSummitComponent } from './kashi-summit/kashi-summit.component';
import { EventComponent } from './event/event.component';
import { IteneraryComponent } from './itenerary/itenerary.component';
import { FooterComponent } from './footer/footer.component';
import { OurSponserComponent } from './our-sponser/our-sponser.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AvailabilityComponent } from './availability/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HamaraKashiComponent,
    KashiSummitComponent,
    EventComponent,
    IteneraryComponent,
    FooterComponent,
    OurSponserComponent,
    OurTeamComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
