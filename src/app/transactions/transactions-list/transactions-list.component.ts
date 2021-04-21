import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../transactions.service';
import {map} from 'rxjs/operators';
import {Transaction, TransactionsModel} from '../../models/transaction.model';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  transactions$: Observable<Transaction[]>;
  total: number;

  constructor(private transactionService: TransactionsService,
              private message: MessageService) {
  }

  ngOnInit(): void {

    this.transactions$ = this.transactionService.getTransactions().pipe(
      map((res: TransactionsModel) => {
        localStorage.setItem('transactions', JSON.stringify(res.transactions));
        this.sumTotalTransactions(res.transactions);
        return res.transactions;
      })
    );
  }

  sumTotalTransactions(transactions: Transaction[]): number {
    const total = transactions.reduce((previousValue, currentValue) => previousValue += currentValue.amount, 0);
    const roundedTotal = Math.round(total * 100) / 100;
    this.total = roundedTotal;
    return roundedTotal;
  }

  saveMonthlyTransactions(): void {
    this.transactionService.saveMonthlyTransactions(this.total)
      .subscribe(() => {
          this.message.add({
            severity: 'success', summary: 'בוצע', detail: 'העסקאות נשמרו בהצלחה'
          });
        },
        () => {
          this.message.add({
            severity: 'error', summary: 'תקלה', detail: 'לא הצלחנו לשמור את העסקאות, אנא נסו שוב'
          });
        });

  }

}
