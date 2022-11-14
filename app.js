setTimeout(() => {
  const div1 = document.querySelector("#first");
  const p1 = document.createElement("p");
  p1.innerText = "Hi";
  div1.append(p1);
}, 1000);

setTimeout(() => {
  const div2 = document.querySelector("#timeout-nesting");
  const p2 = document.createElement("p");
  p2.innerText = "One";
  div2.append(p2);
  setTimeout(() => {
    const p3 = document.createElement("p");
    p3.innerText = "Two";
    div2.append(p3);
  }, 1000);
}, 1000);


let a = 0
let time = setInterval(() =>{a += 1,console.log(a);}, 1000)

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    clearInterval(time)
})