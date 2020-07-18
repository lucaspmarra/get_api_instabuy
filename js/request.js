const API_URL = 'https://api.instabuy.com.br/apiv3/layout?subdomain=organicos';
// url da api a ser consultada
const bannerElement = document.querySelector('.banner');
const showData = document.querySelector('.show-data');

async function getBanners() {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log('Nome: ' + json.data.banners[0, 1].title
        , 'com a ID: ' + json.data.banners[0, 1].id);
    // item 1
    console.log('Nome: ' + json.data.banners[1].title
        , 'com a ID: ' + json.data.banners[1].id);
    // item 2
    console.log('A ' + json.data.collection_items[0].title
        , 'vende: ' + json.data.collection_items[0].items[0].name
        , 'por R$: ' + json.data.collection_items[0].items[0].prices[0].price);
    // item 3
    console.log('Nome: ' + json.data.collection_items[1].title);
}

getBanners();
// showData.addEventListener('click', getBanners);
