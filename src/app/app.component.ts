import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { calculateInvestmentResults } from '../investment-results';
import {
  type InvestmentResults,
  type InvestmentInput,
} from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData = signal<InvestmentResults[] | undefined>(undefined);
  onCalculateInvestmentResults(data: InvestmentInput) {
    const results = calculateInvestmentResults(data);
    this.resultsData.set(results);
  }
}
