const API_URL = 'https://api.instabuy.com.br/apiv3/layout?subdomain=organicos';
// url da api a ser consultada
fetch(API_URL)
    .then(response => response.json())
    .then(api_data => {
        const lista_produtos = api_data.data.collection_items
        // retorna lista de produtos do array
        document.getElementById('lista_produtos').innerHTML =
            `${lista_produtos.map(produto => (
            produto.items.map(item =>(
                `<div class="uk-card uk-card-small uk-card-default uk-card-hover uk-card-body uk-card-body-rounded">
                
                <div key=${item.id}></div>
                <p class="uk-text-center">${item.name}</p>
                <img class="uk-border-circle" src=${`https://assets.instabuy.com.br/ib.item.image.large/l-${item.images[0]}`}
                    alt=${item.name} />
                    
                <p class="uk-text-center">Por apenas: R$ ${item.prices[0].price}</p>
                </br>
                <div>
                <button class="uk-button uk-button-danger uk-position-bottom-center">Comprar</button>
                </div>
                
                
            </div>`
            )).join('')
        )).join('')}`

    })