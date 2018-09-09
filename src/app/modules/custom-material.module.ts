import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule
    ]
})
export class CustomMaterialModule { }
