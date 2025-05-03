const form = document.querySelector('form')


form.addEventListener('submit',function(e){
e.preventDefault()
const guide = document.querySelector('#guide')
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = 'please enter a valid value'
} else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = 'please enter a valid value'
} else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

   results.innerHTML= `<span>${bmi}</span>`  

   if(bmi < 18.6){
    guide.innerHTML='you are a underweight'
}
if(bmi >18.6 || guide < 24.9){
  guide.innerHTML='you are in a normal range'
}
if(bmi > 24.9){
  guide.innerHTML='you are a overweight'
}
}
})


//digital clock

const clock = document.getElementById('clock')
//you can also use

setInterval(function(){
let date =  new Date();

clock.innerHTML= date.toLocaleTimeString()

},1000)