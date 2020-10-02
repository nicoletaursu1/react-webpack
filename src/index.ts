function add(x: number, y: number) {
  const res= x+y;
  const header = document.createElement("h1");
  header.innerHTML = res.toString();
  document.body.appendChild(header);
}
add(1,2);
