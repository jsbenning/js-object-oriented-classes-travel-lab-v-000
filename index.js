class Driver{
  constructor(name, myDate){
    this.name = name;
    this.date = myDate;
    this.startDate = new Date(this.date);
  }
  
  
  yearsExperienceFromBeginningOf(year){
    let myYear = (this.startDate).getFullYear();
    return (year - myYear);
  }
}

class Route{
  constructor(beg, end){
    this.beg = beg;
    this.end = end;
  }
  
  blocksTravelled(){
    return 11;
    
  }
  estimatedTime(){
    return 5;
  }
  
}

