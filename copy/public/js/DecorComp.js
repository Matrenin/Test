Vue.component("decor", {
    data() {
        return {
            cartUrl: "/getBasket.json",
            imgCatalog: "https://via.placeholder.com/200x150"
        }
    },
    template: `
        <div class="decor">
            <div class="decor__item" v-for="item of $refs.cart.cartItems" :key="item.id_product">
                <div class="decor__item-left">
                    <img :src="imgCatalog" alt="some img">
                    <div class="decor-desc">
                        <p>{{ item.product_name }}</p>
                        <p>{{ item.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    `
});