document.getElementById('submitbtn').addEventListener('click', function(){
const fields = ['firstname','lastname','email'];
let allValid = true;

fields.forEach(field =>{
    const input = document.getElementById(field);
    const existingerror = input.nextSibling;

    if (input.value.trim() == ""){
        if (!existingerror || !existingerror.classList.contains('error')){
            const errorspan = document.createElement('span');
            errorspan.classList.add('error');
            errorspan.textContent = `${field} is required`;
            input.insertAdjacentElement("afterend",errorspan);
        }
        allValid = false;
    }else{
        if (existingerror && existingerror.classList.contains('error')){
            existingerror.remove();
        }
    }
});
if (allValid){
    createTable();
}else{
    document.getElementById('tablecontainer').innerHTML="";
}

});

document.getElementById('cancelbtn').addEventListener('click',function(){
    const form = document.getElementById('userform');
    form.reset();
    document.querySelectorAll('.error').forEach(errorspan => errorspan.remove());
    document.getElementById('tablecontainer').innerHTML='';
});

function createTable(){
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkboxes = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(element => element.value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const comment = document.getElementById('comment').value;
    const dropdown = document.getElementById('dropdown').value;

    const tableHTML =`
        <table border="1">
            <tr><th>First Name</th><td>${firstname}</td></tr>
            <tr><th>Last Name</th><td>${lastname}</td></tr>
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Checkbox</th><td>${checkboxes.join(': ')}</td></tr>
            <tr><th>gender</th><td>${gender}</td></tr>
            <tr><th>comment</th><td>${comment}</td></tr>
            <tr><th>dropdown</th><td>${dropdown}</td></tr>
        </table>
    
    `;
    document.getElementById('tablecontainer').innerHTML=tableHTML;
}