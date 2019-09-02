class Component {
	constructor() {
		if (new.target === Component) {
			throw new Error(`Can't instantiate Component, only concrete one.`);
		}
	}

	get template() {
		throw new Error(`You have to define template.`);
	}

	static createElement(template) {
		const createNewTag = document.createElement(`div`);
		createNewTag.innerHTML = template;
		return createNewTag.firstChild;
	}

	render() {
		this._element = Component.createElement(this.template);
		this.setEventListener(); // Усложнение кода
		return this._element;
	}
	removeItem() {
		this.removeEventListener(); // Усложнение кода
		this._element.remove();
		this._element = null;
	}

	setEventListener() {}		//Бесполезный метод
	removeEventListener() {}//Бесполезный метод

}
