import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}

// {
//   path: '',
//   component: DiscoverPage
// },
// {
//   path: 'place-detail',
//   loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
// }