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

const list = document.getElementById('list');

const getCity = async() =>{
    const city =  await fetch('cities.json');
    const data = await city.json();
    data.forEach(e =>{
        const div = document.createElement('li');
        div.innerHTML = `<a href ="#">${e.city}</a>`;
        list.appendChild(div);
    })
}

getCity();


const card = document.getElementById("card");
const getImage = async() =>{
    const iData = await fetch('data.json'); 
    const data = await iData.json();
    data.forEach(e => {
        const div = document.getElementById("card");
        div.innerHTML += `<div class="col-5">
                        <div class="card-title">
                            <p>${e.service}</p>
                            <a href="#"><i class="fa fa-star fa-xs"></i>${e.rating}</a>
                        </div>
                    <img src="${e.image}" class = "card__img" alt="${e.imagetext}">
                        <div class="card-button">
                        <a href="${e.link}">From ${e.price} / Book Now</a>
                        </div>
                        </div>`   
    });
}

getImage();
const row = document.querySelector('.row-3')
const getInfo = async() =>{
    const data = await fetch('pictures.json');
    const pdata = await data.json();

    pdata.forEach(e =>{
        row.innerHTML += `
        <div class="col-7">
        <div class="card-content">
            <img src="${e.image}" class="col-7__img" alt="">
            <p>${e.imgcaption}</p>
        </div>
    </div>`
    })
}

getInfo();

    


