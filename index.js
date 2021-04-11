// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
 
  } 

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    //look at what css looks like and why you need to remove the px and turn the string to a number
    const right = parseInt(rightNumbers, 10);
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
   
}
document.addEventListener("keydown", function(e) {
    let makers = "Hello"
console.log(makers)
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key ==="ArrowRight"){
        moveDodgerRight();
    }
  });

