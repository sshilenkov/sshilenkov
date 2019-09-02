window.onload = () => {
	const FORM_WRAPPER = document.querySelector(`.column_type_input`);// нужно использовать camelCase
	const ratingArray = [];
	let countedRating = 20;


	// Код ниже (заканчивая строкой 25) должен инкапсулироваться в классе Search
  const renderSearch = (allItemsData) => {
    PageEnum.SiteWrapper.SEARCH.innerHTML = ``;

    const searchComponent = new Search();

    PageEnum.SiteWrapper.SEARCH.appendChild(searchComponent.render());
		// Бесполезный код, который не отрабатывает при событии ввода в поиске.
		// Проблемы в классе Search - непонятное разделение события onChange
    searchComponent.onChange = (value) => {
      const filteredItems = allItemsData.filter((currentItem) => currentItem._names.includes(value));
      PageEnum.SiteWrapper.rating.innerHTML = ``;
      if (value === ``) {
        ratingRender(countedRating, allItemsData);
      } else {
        ratingUpdate(filteredItems);
      }
    };
  };

  const ratingRender = (ratingAmount, ratingArray) => {
    for (let i = 0; i < ratingAmount; i++) {
      ratingArray[i] = new PersonRating(returnRandomData());
    }
    ratingUpdate(ratingArray);
  };

  const ratingUpdate = (ratingArray) => {
    ratingArray.forEach((item) => {
      PageEnum.SiteWrapper.rating.appendChild(item.render());
    });
    if (ratingArray.length === 0) {
      PageEnum.SiteWrapper.rating.innerHTML = `Rating list is empty`
    }
  };
	// Логика работы формы должна быть инкапсулирована в класс Form
	const renderForm = () => {
		const formComponent = new Form();
		FORM_WRAPPER.appendChild(formComponent.render());

		formComponent.onSubmit = (evt) => {
			evt.preventDefault();
			const name = document.querySelector(`input[name=name]`).value;
			// Селектор radio buttons не работает правильно, он всегда возвращает значение первого
			// найденного элемента ('yes' в нашем случае). Правильно написать селектор так:
			// .querySelector(`input[name=something]:checked`)
			const cat = document.querySelector(`input[name=cat]`).value;
			const rest = document.querySelector(`input[name=rest]`).value;
			const money = document.querySelector(`input[name=money]`).value;
			// Код ниже должен быть инкапсулирован в классе Person. Передавать в Person
			// нужно, например, объект, в котором хранится вся информция из формы.
			const Man = new Person(name); // С большой буквы именуют классы, но не переменные
			if (cat === 'yes') {
				Man.hasCat();
			}
			if (rest === 'yes') {
				Man.hasRest();
			}
			if (money === 'yes') {
				Man.hasMoney();
			}
			Man.isSunny()
				.then((happiness) => {
					Man._valueElement.innerHTML = name;
					if (happiness === 4) {
						Man._iconElement.innerHTML = '😆';
					} else if (happiness === 3 || happiness === 2) {
						Man._iconElement.innerHTML = '😐';
					} else {
						Man._iconElement.innerHTML = '☹️';
					}
				});
		}
	};

	renderForm();
  renderSearch(ratingArray);
	ratingRender(countedRating, ratingArray);
};

/* Проблемы кода
 - Неправильное именование переменных - принято называть переменные "верблюжейНотацией".
 	 Приемлимые случаи использования капса в именах переменных - https://learn.javascript.ru/variables#konstanty-v-verhnem-registre
 - Использование utils усложняет чтение кода, логичнее было бы записать DOM-узлы в переменные
 	 в текущем файле и объявить здесь методы. Либо можно было создать класс Mock, например,
	 который бы объявлял переменные и методы для использования в других модулях.
 - Усложнение кода путем прописывания логики, которой нет в классе (setEventListener в Component, например).
 - Искусственное разделение разметки. Нет необходимости в данном задании вставлять
 	 разметку средствами JS. Это усложняет чтение кода. Было уместнее стразу писать
	 HTML в файле index.html.
 - Оставлять в коде console.log() - плохая практика.
 - Не работает поиск по рейтингу.
 - Некорректно работает форма, всегда возвращает один и тот же результат.
 - Проблемы со стилями - не виден текст input radio, рейтинг "выталкивает" форму из черного блока.
 - Для fetch нужно прописать catch, чтобы сообщать пользователю о проблемах с сервером.
*/
