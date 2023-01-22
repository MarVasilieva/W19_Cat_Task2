class Cat {
    constructor (breedPet,name,tel,email,radio,foodPet,namePet){
        this.breedPet = breedPet;
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.radio = radio;
        this.foodPet = foodPet;
        this.namePet = namePet;

    }
    }
let model =  new Cat (breedPet,name,tel,email, radio,foodPet,namePet);
document.querySelector('select').addEventListener('change', function(){
    model.breedPet =(this).value;
})
ok.addEventListener('click',() =>{
    event.preventDefault();
const input = document.getElementById('name').value;
const input2 = document.getElementById('tel').value;
const input3 = document.getElementById('email').value;
const radiobutton=document.querySelectorAll('input[name="gender"]');
const checkbox1 = document.querySelector('input[name="food1"]');
const checkbox2= document.querySelector('input[name="food2"]');
const checkbox3 = document.querySelector('input[name="food3"]');
const input4 = document.getElementById('namePet').value;
model.name =input;
model.tel =input2;
model.email=input3;
model.namePet=input4;
if (checkbox1.checked){
    model.foodPet=checkbox1.value;
}
if (checkbox2.checked){
    model.foodPet = checkbox2.value;
}
if (checkbox3.checked){
    model.foodPet= checkbox3.value;
}
for (let rad1 of radio){
    if (rad1.checked) {
    model.radio =rad1.value;
    }
}
console.log(model);
});