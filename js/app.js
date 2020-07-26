new Vue({
    el: '#banner',
    data() {
        return {
            collection_items1: null,
            collection_items2: null,
            loading: true,
            errored: false

        }
    },
    mounted() {
        axios
            .get('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos')
            .then(response =>
                this.collection_items1 = response.data.data.collection_items[0].items
            )
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }

})


// URL da api
const API_URL = 'https://api.instabuy.com.br/apiv3/layout';
axios.get(API_URL, {
        params: {
            subdomain: 'organicos'
        }
    })
    .then(response => {
        for (let produtos in response.data.data.collection_items) {
            app.innerHTML = `
           <h1>ID: ${response.data.data.collection_items[produtos].items} </h1>
           `;
            // console.log(response.data.data.collection_items[produtos].items);
        }
    })

// .then(function (response) {
//     console.log(response.data.data.collection_items[0].items);
// })
// .catch(function (error) {
//     console.log('Erro de requisição:', error);
// })
// .then(function () {
//     // always executed
// });