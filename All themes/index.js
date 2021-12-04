function select(e) {
  var name = e.target.value;
}
var name = select();
function input(e) {
  var valu = e.target.value;
}
var check = input();
function but(bir, ikki) {
  var result = `<h1>Assalomu Alaykum mening ismim ${ikki} men ${bir} deyman!</h1>`;
  document.body.innerHTML = result;
}
but(name, check);
 