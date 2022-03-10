import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { ContentComponent } from './components/dashboard/content/content.component';
import { FooterComponent } from './components/dashboard/content/footer/footer.component';
import { MainContentComponent } from './components/dashboard/content/main-content/main-content.component';
import { TopbarComponent } from './components/dashboard/content/main-content/topbar/topbar.component';
import { ContentWrapperComponent } from './components/dashboard/content/main-content/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    MainContentComponent,
    TopbarComponent,
    ContentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
