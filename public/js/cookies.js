window.addEventListener("DOMContentLoaded", (event) => {
 let date = new Date
  console.log(date.getDate())
});
window.onload = () =>{
  console.log("hello world")
}
console.log("goodbye cruel world")
let setCookie = (name, value) =>{
  document.cookie = `${name}=${value}`;
}

setCookie("monster_name ", "cookie")
setCookie("favorite_cookie ", "snickerdoodle")

// window.alert(document.cookie);

let getCookie = () => {
  return document.cookie.split('; ');
}

let getCookieValue = name => {
  let cookies = getCookie();
  let result = cookies.filter(el => {
    return (el.includes(name + '='));
  });
  if (result === []) {
    return null;
  } else {
    let cookie = result[0];
    return cookie.slice(cookie.indexOf('=') + 1);
  }
}

window.alert(getCookieValue('monster_name'));
