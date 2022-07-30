function go_back(details){
    location.href = `index.html`;
}
let button = document.getElementById(`logout`);
let cookies_value = Cookies.get(`token`);
if(cookies_value !== undefined){
button[`style`][`display`] = `grid`;
} else {
    alert(`you must login first, redirecting you to home page`);
    setTimeout(go_back,2000)
}

