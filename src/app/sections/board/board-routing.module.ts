import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOfferComponent } from './pages/new-offer/new-offer.component';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  {
    path: '', component: BoardComponent
  },
  {
    path: 'new-offer', component: NewOfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
