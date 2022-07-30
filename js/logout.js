let button = document.getElementById(`logout`);
let cookies_value = Cookies.get(`token`);
if(cookies_value !== undefined){
button[`style`][`display`] = `grid`;
}