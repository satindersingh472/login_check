function success_token(response){
Cookies.set(`token`, `${response[`data`][`token`]}`);
location.href = `logout.html`;
}
function failure_token(error){
box[`innerHTML`] = `<h2>Invalid/missing user id or password</h2>`;
}

function submit_function(details){
let email_value = document.getElementById(`email`)[`value`];
let password_value = document.getElementById(`password`)[`value`];

    axios.request({
        url: `https://reqres.in/api/login`,
      method: `POST`,
      data:{
        email: email_value,
        password: password_value
      }
    }).then(success_token).catch(failure_token);
}

let button = document.getElementById(`button`);
button.addEventListener(`click`, submit_function);
let box = document.getElementById(`box`);