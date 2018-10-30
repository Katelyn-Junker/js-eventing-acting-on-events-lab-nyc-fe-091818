const dodger = document.getElementById('dodger')

let dodgerPosition = 0

// dodger.style.right = '180px'

function moveDodger(event){
  console.log(event.which)
}

dodger.addEventListener('keydown', moveDodger)
