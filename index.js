class Driver{
  constructor(name, myDate){
    this.name = name;
    this.date = myDate;
  }
  
  startDate(myDate){
    let dateObj = new Date(this.date);
    //let myYear = dateObj.getFullYear();
    //return myYear;
    return dateObj;
  }
  
  yearsExperienceFromBeginningOf(year){
    
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

