import { Component } from '@angular/core';
import { Lunar, BlockLunarDate } from 'lunar-calendar-ts-vi';

@Component({
  selector: 'app-b85',
  templateUrl: './b85.component.html',
  styleUrl: './b85.component.css'
})
export class B85Component {
  public days:number[] = [];
  public months:number[] = [];
  public years:number[] = [];

  public inpDay:number = 0;
  public inpMonth:number = 0;
  public inpYear:number = 0;
  
  public weekDay:string = "";
  public lunarFullDate:string = "";
  public lunarYear:string = "";
  public lunarMonth:string = "";
  public lunarDay:string = ""

  lunarDate!: BlockLunarDate;

  convert() {
    const lunar: Lunar = new Lunar();
    this.lunarDate = lunar.getBlockLunarDate(this.inpYear+"-"+this.inpMonth+"-"+this.inpDay);
    console.log(this.lunarDate);
    this.weekDay = this.lunarDate.solarDayStr
    this.lunarFullDate = this.lunarDate.lunarDate + "/" + this.lunarDate.lunarMonth + "/" + this.lunarDate.lunarYear
    this.lunarYear = this.lunarDate.lunarYearStr
    this.lunarMonth = this.lunarDate.lunarMonthStr
    this.lunarDay = this.lunarDate.lunarDateStr
  }

  constructor() {
    
  }

  ngOnInit() {
    for (let i = 1; i < 32; i++) {
      this.days.push(i);
    }
    for (let i = 1; i < 13; i++) {
      this.months.push(i);
    }
    for (let i = 0; i < 100; i++) {
      this.years.push(2024-i);
    }
  }
}
