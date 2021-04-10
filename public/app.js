
const uname = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phoneno = document.getElementById('phoneno');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const img = document.getElementById('img');
const btn = document.getElementById('add-data')


const database = firebase.database();

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    database.ref('/users/'+ username.value).set({
        name:uname.value,
        username:username.value,
        email:email.value,
        password:password.value,
        phoneno:phoneno.value,
        gender: gender.value,
        dob: dob.value,
        img: img.value
    });
});