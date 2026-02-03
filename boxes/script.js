const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    desc: "Apple flagship smartphone with A17 chip",
    price: 1299,
    img: "https://my-apple.com.ua/image/catalog/products/iphone/iphone-15-pro-15-pro-max/white-titanium-1.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    desc: "Powerful Android phone with amazing camera",
    price: 1199,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFlMr8YaxWg9h5C8fUmYy2c--J2FuKvxT3g&s",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    desc: "Lightweight laptop with Apple M3 chip",
    price: 1499,
    img: "https://joybox.uz/wp-content/uploads/2024/07/planshet-xiaomi-redmi-pad-pro-6128gb-graphite-seryj.webp",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    desc: "Premium ultrabook for developers",
    price: 1399,
    img: "https://microless.com/cdn/products/ade1952ac8d84e8ad9c42c6d0678f2de-hi.jpg",
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    desc: "Noise cancelling wireless earbuds",
    price: 249,
    img: "https://www.ixbt.com/img/n1/news/2022/8/2/og__eui2mpgzwyaa_overview_large.png",
  },
  {
    id: 6,
    name: "Apple Watch Ultra",
    desc: "Smartwatch for extreme sports",
    price: 799,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrOblafGi2kqpjvL0T7mgaMHkGNodEG4GPQ&s",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    desc: "Best noise cancelling headphones",
    price: 399,
    img: "https://yabloki.ua/media/cache/sylius_shop_product_original/b8/d9/naushniki-sony-mdr-wh1000xm5-over-ear-anc-hi-res-wireless-black_f0c0bb4b-5778-494c-b3ca-824e6ac33036-2.png.webp",
  },
  {
    id: 8,
    name: "iPad Pro 12.9",
    desc: "Powerful tablet for design and work",
    price: 1099,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGeUxBCJPyvgFfmgKiYCy0C11OoLvrI2cVQ&s",
  },
  {
    id: 9,
    name: "Logitech MX Master 3",
    desc: "Wireless mouse for productivity",
    price: 99,
    img: "https://maxcom.uz/storage/product/Ndpb9X55vGoMVKCI1LWwBENn3dxHFVNXAr204xWJ.png",
  },
  {
    id: 10,
    name: "Keychron K6",
    desc: "Mechanical keyboard with RGB",
    price: 129,
    img: "https://enter-office.ru/files/products/besprovodnaya-mehanicheskaya-klaviatura-qmk-keychron-k6-pro-68-klavish-hot-swap-keychron-k-pro-red-switch1.800x600.jpg",
  },
];


const parent = document.getElementById("parent")


  products.forEach(bohoKrisa => {
 

    const div = document.createElement("div")

    div.innerHTML = `
 

<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${bohoKrisa.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${bohoKrisa.name}</h2>
    <p>${bohoKrisa.desc}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



    `

    parent.appendChild(div)
})