class Search extends Component {
  constructor() {
    super();
    this._onChange = null;
  }

  get template() {
    return `<input type="text" name="search" placeholder="Search">
      <button type="submit" class="visually-hidden">Search</button>`.trim();
  }
  // Таким образом убирать слушатель события нет смысла. Если и убирать, то по
  // более логическому событию. Например, по событию submit.
  removeEventListener() {
    this._element
      .removeEventListener(`keydown`, this._onSearchChange);
  }
  // Ниже определены два метода, которые между собой не связаны, но по задумке должны
  // обрабатывать изменения в строке поиска. Усложнение кода вводом ненужного метода
  // setEventListener.
  _onSearchChange(event) {
    if (typeof this._onChange === `function`) {
      this._onChange(event.target.value);
    }
  }
  set onChange(fn) {
    this._onChange = fn;
  }

  setEventListener() {
    this._element
      .addEventListener(`keyup`, this._onSearchChange);
  }

}
// Не реализован поиск по списку, событие ввода ломает страницу (в теге form
// прописан атрибут action="/")
