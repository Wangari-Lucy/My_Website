class calendarDay{
    constructor(month,day,year){
        this.month=month;
        this.day=day;
        this.year=year;
    }
    toString(){
        return `${this.year}-${this.month}-${this.day}`;
    }
}

let day1=new calendarDay(1,1,2023);
console.log(day1.toString());
 
let val1=10;
let val2=val1++;
console.log(`val1: ${val1} val8: ${val2}`);
let val3=10;
let val4=++val3;
console.log(`val3: ${val3} val4: ${val4}`);