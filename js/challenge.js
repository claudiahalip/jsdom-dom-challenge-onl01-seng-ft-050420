// 1.identify all the elements which need to add an event listener to
let counterDisplay = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");


// 2. seconds counter when the DOM is load up 
let secondsTimer = setInterval(countSeconds, 1000);
function countSeconds() {
  let seconds = parseInt(counterDisplay.innerText);
  seconds++;
  counterDisplay.innerHTML = seconds;
};

//3. decrese the number of the secondTimer
minus.addEventListener("click", counterDown);

function counterDown() {
  let seconds = parseInt(counterDisplay.innerText);
  seconds--;
  counterDisplay.innerHTML = seconds;
};

//4.increse the number of the secondTimer
plus.addEventListener("click", countSeconds)

//5.pause everything exept pause button

pause.addEventListener("click", pauseCounter);
function pauseCounter() {
  if (pause.innerText ==="pause") {
    minus.disabled 
    plus.disabled 
    heart.disabled 
    clearInterval(secondsTimer)
    pause.innerText = "resume" }
  else  
    {let secondsTimer = setInterval(countSeconds, 1000);
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    pause.innerText = 'pause'}
};


//6.add likes texts
heart.addEventListener("click", addHeart);
ulLikes = document.getElementsByClassName("likes");

function addHeart() {

};


///7.submit the comment
const submitForm = document.getElementById('comment-form')
const divList = document.getElementById('list')

submitForm.addEventListener("submit", submitComment);

function submitComment(e) {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input')
    const newComment = document.createElement('li')

    newComment.innerHTML = commentInput.value 

    divList.appendChild(newComment)
    event.target.reset();
}

