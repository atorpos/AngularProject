import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiKey = '92JLQMWAZ3TI7W07'; // Replace with your Alpha Vantage API key
  private baseUrl = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) { }

  // Get daily time series for a stock
  getDailyTimeSeries(symbol: string): Observable<any> {
    const params = {
      function: 'TIME_SERIES_DAILY',
      symbol: symbol,
      outputsize: 'compact',
      apikey: this.apiKey
    };

    return this.http.get(this.baseUrl, { params }).pipe(
      map((response: any) => {
        const timeSeries = response['Time Series (Daily)'];
        const dates: string[] = [];
        const prices: number[] = [];

        // Process the data for ECharts
        for (const date in timeSeries) {
          if (timeSeries.hasOwnProperty(date)) {
            dates.push(date);
            prices.push(parseFloat(timeSeries[date]['4. close']));
          }
        }

        // Return the processed data
        return {
          dates: dates.reverse(),
          prices: prices.reverse()
        };
      })
    );
  }
}
