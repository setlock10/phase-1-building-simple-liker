// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const divModal=document.getElementById('modal');
divModal.classList.add('hidden');

const likes=document.getElementsByClassName('like-glyph');

for (let i=0; i<likes.length;i++){

likes[i].addEventListener('click',(e)=>{
  
  mimicServerCall()
  .then(()=>{
    console.log('sup');

  (likes[i].textContent==FULL_HEART)?(likes[i].textContent=EMPTY_HEART):(likes[i].textContent=FULL_HEART) ;
  likes[i].classList.add('activated-heart');


  })
  .catch((error)=>{
    console.log('error');
    divModal.textContent=error;
    divModal.classList.remove('hidden');
    setTimeout(()=>{divModal.classList.add('hidden');},3000);
    
      });
  


  
})

}


//  mimicServerCall()
//  .then(()=>{})
//  .catch((error)=>{
//     divModal.style.visibility='visible';
//     divModal.textContent=error;
//   });
 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
