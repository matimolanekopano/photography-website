import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { LoveComponent } from './love/love.component';
import { MdComponent } from './md/md.component';
import { PictureDisplayComponent } from './picture-display/picture-display.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'birthdays', component: BirthdaysComponent },
    { path: 'love', component: LoveComponent },
    { path: 'md', component: MdComponent },
    { path: 'picture', component: PictureDisplayComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pricing', component: PricingComponent }
];
