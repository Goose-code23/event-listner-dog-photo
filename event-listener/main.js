let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  console.log(event.target.style.display ='none')
  console.log(text.innerHTML.timeStamp);
}

share.addEventListener('click', sharePhoto);