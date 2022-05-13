Vue.component("cart", {
    data() {
        return {
            cartUrl: "",
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id === product.id);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson("/api/cart", prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.deleteJson(`/api/cart/${item.id}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${item.id}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    computed: {
        getSumQuantity() {
             let sumQuantity =  this.cartItems.reduce((acc, el) => acc + el.quantity, 0);
             return sumQuantity;
        },
    },
    mounted() {
        this.$parent.getJson("/api/cart")
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
            <button class="cart-btn" @click="showCart = !showCart">Корзина</button>
            <span v-if="cartItems.length !== 0" class="cart-count">{{ getSumQuantity }}</span>
            <div class="cart__box" :class="{hidden: !showCart}">
                <cart-item class="cart-item"
                    v-for="item of cartItems"
                    :key="item.id_product"
                    :product="item"
                    @remove="remove"
                ></cart-item>
                <a href="checkout.html">Оформить</a>
            </div>        
        </div>
    `
});

Vue.component("cart-item", {
    props: ["product"],
    template: `
        <div class="cart-item">
            <div class="cart-left">
                <img src="img" alt="some img">
                <div class="cart__desc">
                    <p class="cart__desc-name">{{ product.product_name }}</p>
                    <p class="cart__desc-quantity">{{ product.quantity }}</p>
                    <p class="cart__desc-price">{{ product.price }}</p>
                </div>
            </div>
            <div class="cart__right">
                <p class="cart__right-price">{{product.price * product.quantity }}</p>
                <button class="cart__right-btn" @click="$emit('remove', product)">&times;</button>
            </div>
        </div>
    `
});
