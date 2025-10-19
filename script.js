const labels = document.querySelectorAll('.form-control label');
labels.forEach(label=>{
  label.innerHTML = label.innerText
    .split('')
    .map((ch,i)=>`<span style="transition-delay:${i*30}ms">${ch}</span>`)
    .join('');
});

const pass = document.getElementById('password');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=>{
  const show = pass.type === 'password';
  pass.type = show ? 'text' : 'password';
  toggle.classList.toggle('is-on', show);
  toggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
});

document.querySelector('.form').addEventListener('submit', (e)=>{
  const email = document.getElementById('email');
  if(!email.checkValidity() || !pass.checkValidity()){
    e.preventDefault();
    e.currentTarget.classList.remove('shake');
    void e.currentTarget.offsetWidth;
    e.currentTarget.classList.add('shake');
  }
});
