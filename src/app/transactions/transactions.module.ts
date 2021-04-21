import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionsListComponent} from './transactions-list/transactions-list.component';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';
import {TransactionItemComponent} from './transaction-item/transaction-item.component';
import {ToastModule} from 'primeng/toast';

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent
  }
];

@NgModule({
  declarations: [TransactionsListComponent, TransactionItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToolbarModule,
    ToastModule
  ]
})
export class TransactionsModule {
}
