import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { TitlebarComponent } from '../shared/components/titlebar/titlebar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CoreComponent, TitlebarComponent , FooterComponent , SidebarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ]
})
export class CoreModule { }
