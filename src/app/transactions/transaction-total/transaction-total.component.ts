import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transaction-total',
  templateUrl: './transaction-total.component.html',
  styleUrls: ['./transaction-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionTotalComponent implements OnInit {

  @Input() total: number;
  @Output() OnSaveMonthly = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.OnSaveMonthly.emit();
  }
}
