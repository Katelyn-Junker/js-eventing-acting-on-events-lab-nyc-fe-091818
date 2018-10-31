const dodger = document.getElementById('dodger')

function moveDodger(event){
  const keycode = event.which
  if (keycode=== 37){
    // left
   let oldLeft =dodger.style.left
   
   if (oldLeft==='0px'){
     return
   }
    console.log(oldLeft)
    
    oldLeft = parseInt(oldLeft, 10)
    
    dodger.style.left = (oldLeft- 10)+ 'px'
    
  }else if (keycode===39){
    // right
  }else if (keycode ===38){
    // up 
  }else if (keycode ===40){
    // down 
  }

}

function moveDodgerRight(event){
  
}

document.addEventListener('keydown', moveDodger)
