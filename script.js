const bmiText=document.getElementById('bmi');
const descText=document.getElementById('desc');
const form=document.querySelector('form');

form.addEventListener('reset',function(){
    bmiText.textContent=0;
    bmiText.className='';
    descText.textContent='N/A';
    document.body.style.backgroundColor='white';
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight=parseFloat(form.weight.value);
    const height=parseFloat(form.height.value);
    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        alert('Please enter valid weight and height');
        return;
    }
    const HeightInMeters=height/100;//cm->m
    const bmi=weight/Math.pow(HeightInMeters,2);
    const desc=Interpret(bmi);
    bmiText.textContent=bmi.toFixed(2);
    bmiText.className=desc;
    descText.innerHTML=`You are <strong>${desc}</strong>`;
    function Interpret(bmi){
        if(bmi<18.5){
            return 'Underweight';
        }else if(bmi>=18.5 && bmi<=24.9){
            return 'Normal';
        }else if(bmi>=25 && bmi<=29.9){
            return 'Overeight';
        }else {
            return 'Obesity';
        }
    }
    if(bmi<18.5){
        document.body.style.backgroundColor='var(--underweight)';
    }else if(bmi>=18.5 && bmi<=24.9){
        document.body.style.backgroundColor='var(--normal)';
    }else if(bmi>=25 && bmi<=29.9){
        document.body.style.backgroundColor='var(--overweight)';
    }else {
        document.body.style.backgroundColor='var(--obesity)';
    }
    
})