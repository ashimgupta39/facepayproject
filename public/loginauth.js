const uid = document.getElementById('uid').value
const btn = document.getElementById('btn')
const inps = document.getElementsByTagName('input')
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const rootref = firebase.database().ref();
    const query_user = rootref.child('users').child(uid);
    
    query_user.on("value", (snapshot)=>{
        const pass=snapshot.val().password;
        console.log(pass);
        const passwd=inps[1].value;
        if (pass == passwd){
            alert("Login successful");
        }
    }, (errorObject)=> {
        console.log("The read failed: " + errorObject.code);
    });
});
