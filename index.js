const closebtn = document.querySelector('#close-btn');
const menubtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector("aside");
const themeToggler = document.querySelector(".theme-toggler");

menubtn.addEventListener("click", () => {
    sideMenu.style.display = "block"
})


closebtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})


themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

orders.map(order => {
    const tr = document.createElement('tr');
    const trContent = `   
            <td class="elite">${order.productName}</td>
            <td class="elite">${order.productNumber}</td>
            <td class="elite">${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
   
   
        `

    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})
