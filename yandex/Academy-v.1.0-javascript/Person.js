class Person extends Component {
    constructor(name) {
        super();
        this.name = name;// Не используется
        this._happiness = 0;
        this._valueElement = document.querySelector(`.column__value-name`);
        this._iconElement = document.querySelector(`.column__value-icon`);
    }
    // Три метода ниже можно объединить в один - cheerUp(), например. Нужно использовать
    // префиксную форму инкремента или += 1, чтобы код правильно отрабатывал.
    hasCat() {
        return this._happiness++;
    }

    hasRest() {
        return this._happiness++;
    }

    hasMoney() {
        return this._happiness++;
    }

    isSunny() {
        const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
        const city = 'Москва';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

        return fetch(url)
            .then(res => res.json())
            .then((res) => { // Не нужно дважды использовать одно имя для названия ответов разных промисов
              console.log(this._happiness); // Оставлять плохая практика
                if (res.main.temp - 273 > 15) {
                    return this._happiness++;
                }
            });
      }
}
