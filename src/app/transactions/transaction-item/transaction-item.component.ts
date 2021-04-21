import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction;

  constructor() {
  }

  ngOnInit(): void {

  }

}
