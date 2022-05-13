let api = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
    el: "#app",
    data: {
        userSearch: "",
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        postJson(url, data) {
            return fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(result => result.json())
            .catch(err => console.log(err));
        },
        putJson(url, data) {
            return fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(result => result.json())
            .catch(err => console.log(err));
        },
        deleteJson(url, data) {
            return fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(result => result.json())
            .catch(err => console.log(err));
        },
    },
    mounted() {
        console.log(this);
    },
});