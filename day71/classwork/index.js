const salary = {
    hour: 200,
    day: 600,
    current: 0,
    
    bonus: function(){
        this.hour += 100;
        console.log(this.hour, "$");

        
    if(this.hour === this.day){
    console.lof("congrats")
}
    }
}