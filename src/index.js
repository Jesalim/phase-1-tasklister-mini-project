document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('form').addEventListener('submit', (e)=>
  {
    e.preventDefault();
  
  const todo = e.target.fname.value;
  const p = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = 'x';
  p.textContent = todo;
  let n = document.querySelector('ul').append(p,btn);
  btn.addEventListener('click', ()=>
  {
    p.remove()
    btn.remove()
  })
  })
 

});
