import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './welcome.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports:      [ BrowserModule,
  	 HttpModule, FormsModule , 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'product/:id', component: ProductDetailComponent }
    ]),
    
   ],
  providers: [ ProductService ],
  declarations: [ AppComponent, WelcomeComponent, ProductListComponent, ProductFilterPipe, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
