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

window.alert(document.cookie);
