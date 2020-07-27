new Vue({
    el: '#banner',
    data() {
        return {
            collection_items: [],
            loading: true,
            errored: false

        }
    },
    mounted() {
        axios
            .get('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos')
            .then((response) => {
                    const {
                        data
                    } = response.data;
                    const {
                        collection_items
                    } = data;
                    this.collection_items = collection_items;
                }

            )
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        $formatCurrencyBrazil(value) {
          const val = (value / 1).toFixed(2).replace(".", ",");
          return `R$ ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        },
      },

})