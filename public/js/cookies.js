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

setCookie("monster_name", "cookie")
setCookie("favorite_cookie", "snickerdoodle")
setCookie("monster_name", "elmo")
setCookie("monster=thing; expires","Thu, 01 Jan 2022 00:00:00 GMT")
// window.alert(document.cookie);

let getCookie = () => {
  return document.cookie.split('; ');
}

let getCookieValue = name => {
  let cookies = getCookie();
  let result = cookies.filter(el => {
    let split = el.split("=")
    return (split[0] === name);
  });
  if (result.length === 0) {
    return null;
  } else {
    let cookie = result[0];
    return cookie.slice(cookie.indexOf('=') + 1);
  }
}
let deleteCookie = (name) =>{
let value = getCookieValue(name)
if (value === null){
  return "cookie not found"
} else {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
}
deleteCookie("monster_name")
//window.alert(getCookieValue('name'));
