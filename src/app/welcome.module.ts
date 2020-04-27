
    import { NgModule } from "@angular/core";
    import{MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatListModule,MatCardModule} from '@angular/material';
@NgModule({
    imports:[MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatListModule,MatCardModule],
    exports:[MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatListModule,MatCardModule]

})
export class WelcomeModule{};