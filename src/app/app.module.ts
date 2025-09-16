import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { ViewProducts } from "./view-products/view-products.component";

@NgModule({
    declarations:[
        AppComponent,
        ViewProducts
    ],
    imports:[
        BrowserModule
    ],
    providers:[],
    bootstrap:[AppComponent]

})

export class AppModule{}