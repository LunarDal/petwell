document.addEventListener('DOMContentLoaded', function () {
    const productList = document.querySelector('.new_prod_list');
    if (!productList) return;

    const prevButton = productList.querySelector('[data-new-direction="prev"]');
    const nextButton = productList.querySelector('[data-new-direction="next"]');

    if (!prevButton || !nextButton) return;

    function getProducts() {
        return Array.from(productList.querySelectorAll('.prod_item'));
    }

    function moveNext() {
        const products = getProducts();
        if (products.length < 2) return;

        productList.insertBefore(products[0], nextButton);
    }

    function movePrev() {
        const products = getProducts();
        if (products.length < 2) return;

        productList.insertBefore(products[products.length - 1], products[0]);
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);

    [prevButton, nextButton].forEach(button => {
        button.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ') return;

            event.preventDefault();
            if (button.dataset.newDirection === 'next') {
                moveNext();
            } else {
                movePrev();
            }
        });
    });
});
