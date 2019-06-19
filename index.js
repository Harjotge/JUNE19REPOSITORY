// factory function
function createCircle(radius){
    return {
       radius,
       draw: function(){
           console.log('draw');
       }
   };   
   }
   const circle = createCircle(1);
   circle.draw();
   
   // Constructor Function
   
   function Circle(radius){
       console.log('this', this);
       this.radius = radius;
       this.draw = function(){
           console.log("draw");
       }
   }
   
   const Circle1 = new Function('radius',`
   this.radius = radius;
   this.draw = function(){
       console.log("draw");
   }
   `)
   const circle1 = new Circle1(1);
   const another = new Circle(1);
   