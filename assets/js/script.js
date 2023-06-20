let email = 'joao@hcode.com.br';

email = 'glaucio@hcode.com.br'

console.log(email);
console.log('O seu e-mail é: ' +email);
console.log(`O seu e-mail é: ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!')

});

document.getElementById('form-login').addEventListener('click', e =>{
    console.log('O mouse está sobre o formulário.');
});

document.querySelector('#form-login').addEventListener('mouseleave', e =>{

    console.log('O mouse está fora do formulário')

});

document.querySelector('#form-login').addEventListener('submit', e=>{
   
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    }

    console.log(json);

    let stringJSON = JSON.stringify(josn);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);
    
    console.log(jsonParse);

});
