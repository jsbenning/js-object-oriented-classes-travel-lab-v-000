class Driver{
  constructor(name, myDate){
    this.name = name;
    this.date = myDate;
    this.startDate = new Date(this.date);
  }
  
  
  yearsExperienceFromBeginningOf(year){
    let myYear = getFullYear(this.startDate);
    //return (myYear - year);
    return myYear;
    
  }


}

class Route{
  constructor(){
  }
  
  blocksTravelled(){
    return 11;
    
  }
  estimatedTime(){
    return 5;
  }
  
}

