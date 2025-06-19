# ProgressBar — SVG-модуль визуального прогресса

Модуль `ProgressBar` позволяет удобно отображать прогресс в виде SVG-круга с возможностью анимации и скрытия. Он легко подключается и управляется через JavaScript API.

## 📦 Установка

1. Скачайте и подключите файл `progress.js` и `progress.css`:

```html
<link rel="stylesheet" href="css/progress.css" />
<script src="js/progress.js"></script>
```

2. Создайте элемент-контейнер с уникальным `id`:

```html
<div id="progressCircle"></div>
```

3. Инициализируйте прогресс-бар:

```js
const progress = new ProgressBar(document.getElementById('progressCircle'));
```

---

## 🔧 API

### `new ProgressBar(containerElement)`
Создаёт экземпляр прогресс-бара.

- **`containerElement`** — DOM-элемент, куда будет вставлен SVG-прогресс (например, `document.getElementById('progressCircle')`).

---

### `setValue(value: number)`
Устанавливает значение прогресса от 0 до 100.

```js
progress.setValue(75);
```

- **`value`** — число от 0 до 100.
- Значения вне диапазона игнорируются с предупреждением в консоли.
- Нечисловые значения не принимаются.

---

### `setIsAnimating(isAnimating: boolean)`
Включает или отключает анимацию прогресс-бара (например, CSS-анимацию обводки).

```js
progress.setIsAnimating(true);
```

- **`isAnimating`** — булево значение.
- Добавляет/удаляет CSS-класс `.is-animated` на контейнере.

---

### `setIsHidden(isHidden: boolean)`
Показывает или скрывает прогресс-бар.

```js
progress.setIsHidden(true); // скроет элемент
```

- **`isHidden`** — булево значение.
- Добавляет/удаляет CSS-класс `.is-hidden` на контейнере.

---

## 🧩 Совместимость

- Работает в современных браузерах (Chrome, Edge, Safari).
- `:has()` не используется — кроссбраузерно.
- SVG не требует внешних библиотек.
