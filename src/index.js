const close = document.getElementById('closebtn');
const menu = document.getElementById('drop_menu');
const menudown = document.getElementById('menudown');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-chevron-circle-up');
    menudown.classList.toggle('show');
}
);

close.addEventListener('click',()=>{
   const banner = document.querySelector('.banner');
   banner.style.display = "none";
})

const cities = ["Alberta","Kingston","Portmore","Alberta","Kingston","Portmore","Alberta","Kingston",
"Portmore","Alberta","Kingston","Portmore"];

const list = document.getElementById('list');


for(let i = 0; i < cities.length; i++){
    const div = document.createElement('li');
    div.innerHTML = `<a href ="#">${cities[i]}</a>`;
    list.appendChild(div);
}




