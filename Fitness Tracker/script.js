const darkMode = document.getElementById("darkMode")
const workoutForm= document.getElementById("workoutForm")
const workoutList = document.getElementById("workout-List")
const workoutBtn = document.getElementById ('addWorkout')
const workoutInput = document.getElementById("workout")
const durationInput = document.getElementById("duration")


isDark = false


darkMode.addEventListener( "click", function(){

if (isDark) {
        // switch back to blue
        workoutForm.style.backgroundColor = "rgb(37, 48, 216)";
        isDark = false;
}

else{
 workoutForm.style.backgroundColor = "#000000";
        isDark = true;
    }

})

workoutBtn.addEventListener("click", function(e){
 e.preventDefault()
    workoutList.innerHTML += 
    `<div class="workout-List">
        <span>${workoutInput.value} - ${durationInput.value} minutes</span>
        <button type="button" class="delete-btn">Delete</button>
    </div>
    `;
    console.log(workoutInput.value, durationInput.value)
    console.log(workoutList)
    workouts.style.backgroundColor= "rgb(150, 150, 236)"
})

workoutList.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove()
    }

 
})
