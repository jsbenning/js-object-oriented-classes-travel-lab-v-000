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
    let eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"];
   let myHor = Math.abs((eastWest.indexOf(this.beg.vertical)) - (eastWest.indexOf(this.end.vertical)));
   return myHor + 3;
   //return Math.abs(myHor - Math.abs(this.beg.horizontal - this.end.horizontal));
    
  }
  estimatedTime(){
    return 5;
  }
  
}

