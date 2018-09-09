import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ]
})
export class CustomMaterialModule { }
