import { formatDate } from '@angular/common';
import { OnInit } from '@angular/core';


export class SearchSetup implements OnInit
{
  public beginDollars: number[] = [0, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 70000, 90000, 100000];
  public endDollars: number[] = [5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 70000, 90000, 100000, 500000];
  public beginYears: number[] = [];
  public endYears: number[] = [];

  private currentYear: number = parseInt( formatDate( Date.now(), 'yyyy', 'en-US' ) );

  constructor() { } 

  ngOnInit() {
    console.log( "Year is" + this.currentYear );

    for ( let i = 0; i < this.currentYear; i++ )
    {
      this.beginYears[i] = ( i + 2000 );
    }
    for ( let i = 0; i < this.currentYear + 1; i++ )
    {
      this.endYears[i] = ( i + 2001 );
    }
  };

  }

  

