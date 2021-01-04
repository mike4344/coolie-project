window.addEventListener("DOMContentLoaded", (event) => {
 let date = new Date
  console.log(date.getDate())
});
window.onload = () =>{
  console.log("hello world")
}
console.log("goodbye cruel world")


document.cookie = "monster_name=cookie";
document.cookie = "favorite_cookie=snickerdoodle";

window.alert(document.cookie);
