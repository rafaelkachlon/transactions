import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-transaction-total',
  templateUrl: './transaction-total.component.html',
  styleUrls: ['./transaction-total.component.scss']
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
