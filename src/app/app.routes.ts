import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { LoveComponent } from './love/love.component';
import { MdComponent } from './md/md.component';
import { PictureDisplayComponent } from './picture-display/picture-display.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { RatladiWeddingComponent } from './ratladi-wedding/ratladi-wedding.component';
import { TaiBirthdayComponent } from './tai-birthday/tai-birthday.component';
import { OmoBirthdayComponent } from './omo-birthday/omo-birthday.component';
import { KhanyaMdComponent } from './khanya-md/khanya-md.component';
import { PertuniaBirthdayComponent } from './pertunia-birthday/pertunia-birthday.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'birthdays', component: BirthdaysComponent },
    { path: 'love', component: LoveComponent },
    { path: 'md', component: MdComponent },
    { path: 'picture', component: PictureDisplayComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pricing', component: PricingComponent }, 
    { path: 'ratladi', component: RatladiWeddingComponent},
    { path: 'tai', component: TaiBirthdayComponent },
    { path: 'omo', component: OmoBirthdayComponent },
    { path: 'khanya', component: KhanyaMdComponent },
    { path: 'pertunia', component: PertuniaBirthdayComponent },
];
