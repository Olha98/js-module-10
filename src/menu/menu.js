import dishesTemplate from '../templates/menuItems.hbs';
import dishes from '../menu.json';
import {
  addToCart
} from '../cart/cart';


export const menuList = {
  dishes,
};

const refs = {
  menRef: document.querySelector('.menu'),
};

const addToOrder = e => {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.btn === 'cartBtn') {
    const id = e.target.closest('[data-id]').dataset.id;
    const dish = menuList.dishes.find(dish => dish.id === id);
    addToCart(dish);
    // createPagination();
  } else return;
};

//!======create page=====
let markup = dishesTemplate(dishes);
// let markup = JSON.parse(dishesTemplate(dishes));
// // console.log(markup)

// //=========pagination==========

// export const pagination = {
//   currentPage: 1,
//   totalProducts: 0,
//   productsPerPage: 2,
//   pagesCount: 0,

// }
// export const productPagination = document.querySelector('.productPagination');



// const createPaginationPage = (pageNumber) => {
//   return `
//   <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`
// }

// const createPaginationMarkup = () => {
//   let markup = '';
//   for (let i = 1; i <= pagination.pagesCount; i += 1) {
//     markup += createPaginationPage(i)
//   }

//   return markup;

// }

// const getActivePage = () => {
//   const pages = document.querySelectorAll('.paginationPageItem');
//   pages[pagination.currentPage - 1].classList.add('activePaginationPageItem')
// }

// const createPagination = () => {
//   pagination.totalProducts = menuList.dishes.length;

//   pagination.pagesCount = Math.ceil(pagination.totalProducts / pagination.productsPerPage)
//   productPagination.innerHTML = createPaginationMarkup();
//   getActivePage();
// }

// function getProducts() {
//   const finish = pagination.productsPerPage * pagination.currentPage;
//   const start = finish - pagination.productsPerPage;
//   const products = markup.slice(start, finish);
//   console.log(products)

//   return products;
// };


// const changePage = (e) => {
//   pagination.currentPage = e.target.dataset.page;
//   services.createProductsMarkup();
//   createPagination();
// }

// createPagination();



const addProductCard = () => {
  // const add = getProducts().insertAdjacentHTML('afterbegin', markup);
  // console.log(add);
  refs.menRef.insertAdjacentHTML('afterbegin', markup);

}

addProductCard();

refs.menRef.addEventListener('click', addToOrder);
