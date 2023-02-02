var inputs = document.querySelectorAll("input");
inputs.forEach((input)=>{
  input.addEventListener('change', function(){
    let body = document.querySelector('body');
    if(input.type === 'color') {
      body.style.setProperty(`--${input.name}`, `${input.value}`)
    } else {
      body.style.setProperty(`--${input.name}`, `${input.value}px`)
    }
  })
})