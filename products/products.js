const products = [
    {
        title: "test 1",
        desc: "desc 1",
        cost: 100,
        imagePath: "../img/walnut.png"
    },
    {
        title: "test 2",
        desc: "desc 2",
        cost: 50,
        imagePath: "../img/purple-heart.jpg"
    },
    {
        title: "test 3",
        desc: "desc 3",
        cost: 25,
        imagePath: "../img/walnut.png"
    },
    {
        title: "test 4",
        desc: "desc 4",
        cost: 60,
        imagePath: "../img/purple-heart.jpg"
    },
    {
        title: "test 5",
        desc: "desc 5",
        cost: 100,
        imagePath: "../img/walnut.png"
    },
    {
        title: "test 6",
        desc: "desc 6",
        cost: 50,
        imagePath: "../img/purple-heart.jpg"
    },
]

const cart = []


$(function () {

    products.forEach((product, idx) => {
        const template = document.querySelector("#productTemplate")
        const node = document.importNode(template.content, true)
        node.id = `product-${idx}`
        node.querySelector(".productImage").src = product.imagePath
        node.querySelector(".productTitle").textContent = product.title
        node.querySelector(".productCost").textContent = `$${product.cost}`
        node.querySelector(".productDesc").textContent = product.desc
        node.querySelector(".productButton").addEventListener("click", () => openProductModal(idx))
        document.querySelector("#productsList").appendChild(node)
    })





    function openProductModal(idx) {
        const product = products[idx]
        const modal = document.querySelector("#productModal")
        modal.querySelector(".product-title").textContent = product.title
        modal.querySelector(".product-image").src = product.imagePath
        modal.querySelector(".product-cost").textContent = `$${product.cost}`
        modal.querySelector(".product-desc").textContent = product.desc
        modal.querySelector("#addToCart").addEventListener("click", () => {
            const woodType = modal.querySelector('input[name="woodRadios"]:checked').value
            const stainType = modal.querySelector('input[name="stainRadios"]:checked').value
            addToCart(idx, woodType, stainType)
            $("#productModal").modal("hide")
        })
        $("#productModal").modal("show")
    }
    function addToCart(idx, woodType, stainType) {
        const product = products[idx]
        product.woodType = woodType
        product.stainType = stainType
        cart.push(product)
        alert(`cart has: ${JSON.stringify(cart)}`)
    }
})
