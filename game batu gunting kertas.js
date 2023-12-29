 //fuction computer
function getpilihanComputer(){
   
  const computer = Math.random()

   if (computer < 0.34) return 'gunting'
   if(computer >= 0.34 && computer< 0.67) return'batu';
    return 'kertas';
}

//fuction hasil
function getHasil(computer, player){
   
    if (player == computer) return 'SERI!'

    if (player == 'gunting') return (computer == 'batu') ? 'LOSE!' : 'WIN!';

    if (player == 'batu') return (computer == 'gunting') ? 'WIN!' : 'LOSE!';

    if (player == 'kertas') return (computer == 'batu') ? 'WIN!' : 'LOSE!';
     
}

//pengaturan score
 //score
 const score = document.querySelector('.score')
 const scoreBot = document.querySelector('.scoreBot')
 const musicTrue = document.getElementById('sound');
 const musicFalse = document.getElementById('sound1');
 const vs = document.querySelector('.VS')
 
// Inisialisasi skor awal
let skor = 0;
const maxSkor = 10;

//nambah point jika player win
function getScore() {
  // Tambahkan satu ke skor
  const maxScore = [ 0,1,2,3,4,5,6,7,8,9,10]
  skor += 0;
  // Tampilkan skor baru
 score.innerHTML = maxScore[skor += 1]
 musicTrue.currentTime= 0
 musicTrue.play()
 if(skor == maxSkor){
     endGame('Player!')
 }
 
}


// Inisialisasi skor awal
let point = 0;
const maxPoin = 10;

//nambah point jika Ai win
function getScoreComputer() {
    const maxPoint = [0,1,2,3,4,5,6,7,8,9,10]
    point += 0;
    scoreBot.innerHTML = maxPoint[point +=1] 
    musicFalse.currentTime= 0
    musicFalse.play()
   if(point == maxPoin){
    endGame('Computer!')
   }
}

//Jika game selesai ampe poin 10 maka akan ke reset dari awal kabeh!
function endGame(winner){
    alert(`Pemenangnya adalah ${winner}`)
    skor = 0
    point = 0
    score.innerHTML = 0
    scoreBot.innerHTML = 0
    vs.innerHTML = '';
}

//tanda ? = true dan tanda : = false


//untuk saat pemilihan Ai nya puter2 biar makin unik
function rotate(pilihan){
    const imgComputer = document.querySelector('.computer')
    const image = ['batu','gunting', 'kertas']
    let i = 0
    const waktuStart = new Date().getTime()
    
    // setInterval untuk fungsi melakukan sesuatu selama berulang2 sesuai ketentuan waktu
    setInterval(function(){
       if(new Date().getTime() - waktuStart > 1000 ){
           clearInterval
           return;
       }

       imgComputer.setAttribute('src', 'myImage/' + image[i++] + '.png')
       if(i == image.length) i = 0

    }, 100)
}

//pengulangan untuk pilihan img gunting batu kertas
const choose = document.querySelectorAll('li img')
console.log(choose)

choose.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){
        const pilihanComputer = getpilihanComputer()
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        //fucntion buat putar2 saat komputer proses suit
        rotate();
        
        //untuk biar keluarn baru skor dan text kata2 win/lose/serinya setelah Ai nya selesai putar2 milih yang mana
        setTimeout(function(){
            const imgComputer = document.querySelector('.computer')
       
        
            //biar komputernya bisa berubah2 gambar sesuai AI nya
       imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')
 
            //menampikan tulisan hasil 
       vs.innerHTML = hasil 

      //menampilkan score jika player menang
      if(hasil.includes('WIN'))
       getScore();

     
      //menampilkan score jika komputer menang
      if(hasil.includes('LOSE'))
       getScoreComputer();

        }, 1000)
    })
})

// 1000 sama aja 1 detik!




// const rock = document.querySelector('.batu')
// const scisor = document.querySelector('.gunting')
// const paper = document.querySelector('.kertas')
// const vs = document.querySelector('.VS')

// //fuction batu
// rock.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = rock.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })
// //fuction gunting
// scisor.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = scisor.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })

// //fuction kertas
// paper.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = paper.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })








 

