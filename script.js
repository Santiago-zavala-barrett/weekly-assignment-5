function circle(diameter)
{
    this.diameter = diameter;
  
    this.area = function () 
    {
        return Math.PI * this.diameter * this.diameter;
    };
        return Math.PI*this.diameter;
    };

var c = new circle(6);
console.log('Area =', c.area().toFixed(2));

var circleDiameter = parseInt(prompt("Please enter the diameter of circle:"));
var circumferenceOfCircle = 2 * Math.PI * circleDiameter;
console.log("Circumference of circle is: " + circumferenceOfCircle);