const dodger = document.getElementById('dodger')

function moveDodger(event){
  const keycode = event.which
  if (keycode=== 37){
    // left
  }else if (keycode===39){
    // right
  }else if (keycode ===38){
    // up 
  }else if (keycode ===40){
    // down 
  }

}

dodger.addEventListener('keydown', moveDodger)
