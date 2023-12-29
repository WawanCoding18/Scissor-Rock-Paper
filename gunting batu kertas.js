//computer

function getComputer(){
 const computer = Math.random()

if(computer < 0.34) return 'gunting'
if(computer >= 0.34 && computer < 0.67) return 'batu';
    return 'kertas';
}

//player
function getHasil(computer, player){
     if(player == computer) return 'SERI'
     if(player == 'gunting') return(computer == 'batu') ? 'LOSE' : 'WIN';
     if(player == 'batu') return(computer == 'gunting') ? 'WIN' : 'LOSE';
     if(player == 'kertas') return(computer == 'batu') ? 'WIN' : 'LOSE';
}

//penambahan score jika menang ke player
const scorePlayer = document.querySelector('.score')
const scoreComputer = document.querySelector('.score-computer')
const musicTrue = document.getElementById('sound');
const musicFalse = document.getElementById('sound1');
const randomImage = document.querySelector('.big')
const randomComputer = document.querySelector('.computer')


let score = 0
const maxscore = 10

function getPlayerScore(){
   
    score +=0
    scorePlayer.innerHTML = score +=1
    musicTrue.currentTime = 0
    musicTrue.play()
    if(score == maxscore){
        endGame('Player!')
    }

}

//penambahan score jika menang ke computer

let skor = 0
const maxSkor = 10

function getComputerScore(){

    skor +=0
    scoreComputer.innerHTML = skor +=1
    musicFalse.currentTime = 0
    musicFalse.play()
    if(skor == maxSkor){
        endGame('Computer!')
    }
}

function endGame(menang){
    alert(`Pemenangnya adalah ${menang}`)
    score = 0
    skor = 0
    scorePlayer.innerHTML = ''
    scoreComputer.innerHTML = ''
    receive.innerHTML = ''
    randomImage.src = 'img/random.png';
    randomComputer.src = 'img/random.png';
    
}

function rotate(){
    const imgAi = document.querySelector('.computer')
    const image = ['batu', 'gunting', 'kertas']
    const timeStart = new Date().getTime();
    let z =0
    
  setInterval(function(){
    if(new Date().getTime() - timeStart > 1000){
        clearInterval()
        return;
  }

  imgAi.setAttribute('src', 'img/' + image[z++] + '.png')
  if(z == image.length){
      z= 0
  }
  }, 100)
   
}
//memunculkan gambar random lagi
function Oke(){
    setTimeout(function (){
        randomImage.src = 'img/random.png';
        randomComputer.src = 'img/random.png';
    }, 2000)
}

function reset() {
    const gunting = document.querySelector('.gunting');
    const batu = document.querySelector('.batu');
    const kertas = document.querySelector('.kertas');
    gunting.classList.add('disabled'); // Tambahkan kelas CSS 'disabled'
    batu.classList.add('disabled'); // Tambahkan kelas CSS 'disabled'
    kertas.classList.add('disabled'); // Tambahkan kelas CSS 'disabled'
    
    setTimeout(function () {
        gunting.classList.remove('disabled'); // Hapus kelas CSS 'disabled' setelah 2 detik
        batu.classList.remove('disabled');
        kertas.classList.remove('disabled');
    }, 2000);
}




//statement
const container = document.querySelector('.container')
const imgPlayer = document.querySelectorAll('li img')
const receive = document.querySelector('.area-vs')
const big = document.querySelector('.big')

imgPlayer.forEach(function(select){
      select.addEventListener('click', function(e){
        const selectComputer = getComputer()
        const selectPlayer = select.className
        const result = getHasil(selectComputer, selectPlayer)

        if(e.target.className == 'batu') {
            big.src = e.target.src;
        }

        if(e.target.className == 'gunting') {
            big.src = e.target.src;
        }
        
        if(e.target.className == 'kertas') {
            big.src = e.target.src;
        }

        rotate()
        Oke()
        reset()

        setTimeout(function(){
               const imgComputer = document.querySelector('.computer')

               imgComputer.setAttribute('src', 'img/' + selectComputer + '.png')

               receive.innerHTML = result
               
               if(result.includes('WIN')){
                  getPlayerScore()
               }

               if(result.includes('LOSE')){
                  getComputerScore()
               }
             
               
        }, 1000)
        
      })
})




