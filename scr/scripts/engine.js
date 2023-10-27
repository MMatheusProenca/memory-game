const emojis = [
   '🦊',
   '🦊',
   '🐻',
   '🐻',
   '🐯',
   '🐯',
   '🦁',
   '🦁',
   '🐮',
   '🐮',
   '🐼',
   '🐼',
   '🐶',
   '🐶',
   '🐵',
   '🐵'
]

const shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1))

let openEmojis = [
]

function createCard(){
   shuffleEmojis.forEach((emoji)=>{
      let card = document.createElement('div')
      card.innerHTML = emoji
      card.className = 'card'
      card.onclick = turnAroundCard
      document.getElementById('container-game').appendChild(card)
   })
}

function turnAroundCard(){
   if(openEmojis.length < 2){
      this.classList.add('cardOpen')
      openEmojis.push(this)
   }
   if(openEmojis.length == 2){
      setTimeout(checkCard, 500)
   }
}
function checkCard(){
   if(openEmojis[0].innerHTML === openEmojis[1].innerHTML){
      openEmojis[0].classList.add('match')
      openEmojis[1].classList.add('match')
   }else{
      openEmojis[0].classList.remove('cardOpen')
      openEmojis[1].classList.remove('cardOpen')
   }
   openEmojis = []
   if(document.querySelectorAll('.match').length === emojis.length){
      document.getElementsByClassName('victory')[0].classList.remove('displayNone')
   }
}
createCard()
