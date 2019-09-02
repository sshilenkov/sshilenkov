const PageEnum = { // camelCase
  SiteWrapper: { // camelCase
    SEARCH: document.querySelector(`.columns__search-item`), // зачем свойство капсом?
    rating: document.querySelector(`.columns__rating`)
  }
};

//  Файл усложняет чтение кода и понимание логики. Поиск и список вполне можно было
// записать в переменные в файле script.js
