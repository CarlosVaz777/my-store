import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';

 const routesConfi: Routes = [
    {
        path: 'inicio',
        component: NavbarComponent,
        title: 'Inicio',
    },
    {
        path:'products',
        component: ProductsComponent,
        title: 'Productos'
    },
    {
        path: 'faqs',
        component: FaqsComponent,
        title: 'Faqs'
    }
];

export default routesConfi;