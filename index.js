const dodger = document.getElementById('dodger')

function moveDodger(event){
  const keycode = event.which
  if (keycode=== 37){
    // left
    dodger.style.left = '380px'
    
    dodger.style.left = oldLeft + '10px'
  }else if (keycode===39){
    // right
  }else if (keycode ===38){
    // up 
  }else if (keycode ===40){
    // down 
  }

}

document.addEventListener('keydown', moveDodger)
