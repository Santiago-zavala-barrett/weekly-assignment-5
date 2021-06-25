function circle (diameter){

this.diameter = diameter

  this.area = function ()

   { return Math.PI * this.diameter * this.diameter 
  }
  return Math.PI * this.diameter
};

const c = new circle(8)
console.log('Area =', c.area().toFixed(2))

const circleDiameter = parseInt(prompt('Please enter the diameter of circle:'))
const circumferenceOfCircle = 2 * Math.PI * circleDiameter
console.log('Circumference of circle is: ' + circumferenceOfCircle)
