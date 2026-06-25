# Ответы на экзаменационные вопросы по веб-разработке

---

## 1. Как работает веб: что делают браузер, клиент и сервер?

**Клиент** — это программа (обычно браузер), которая отправляет запросы и отображает результат.

**Сервер** — компьютер (или программа на нём), который принимает запросы и возвращает ответы: HTML-страницы, JSON, файлы и т.д.

**Браузер** — частный случай клиента. Он умеет: парсить HTML, применять CSS, выполнять JavaScript, рисовать страницу на экране.

**Как это работает пошагово:**
1. Пользователь вводит адрес (URL) в браузер.
2. Браузер делает **DNS-запрос** — узнаёт IP-адрес сервера по доменному имени.
3. Браузер устанавливает **TCP-соединение** с сервером (и TLS-рукопожатие для HTTPS).
4. Браузер отправляет **HTTP-запрос** (`GET /index.html HTTP/1.1`).
5. Сервер обрабатывает запрос и возвращает **HTTP-ответ** (статус-код + тело: HTML, JSON и т.д.).
6. Браузер парсит HTML, находит ссылки на CSS/JS/картинки, делает дополнительные запросы за каждым ресурсом.
7. Браузер строит DOM и CSSOM, объединяет их в **Render Tree**, делает Layout и Paint — отрисовывает страницу.

**HTTP** (HyperText Transfer Protocol) — протокол общения клиента и сервера. Запрос содержит метод (GET, POST, PUT, DELETE), заголовки, тело. Ответ содержит статус-код (200 OK, 404 Not Found, 500 Server Error), заголовки, тело.

---

## 2. Какую роль выполняют HTML, CSS и JavaScript во фронтенде?

- **HTML** (HyperText Markup Language) — **структура и содержание** страницы. Описывает, что есть на странице: заголовки, абзацы, кнопки, формы, ссылки.
- **CSS** (Cascading Style Sheets) — **внешний вид** страницы. Описывает, как элементы выглядят: цвета, шрифты, отступы, расположение.
- **JavaScript** — **поведение и интерактивность** страницы. Позволяет реагировать на действия пользователя, изменять DOM, делать запросы к серверу без перезагрузки страницы.

Аналогия: HTML — это скелет, CSS — кожа и одежда, JavaScript — мышцы и нервная система.

---

## 3. Что такое HTML-элемент, тег и атрибут?

**Тег** — это синтаксическая конструкция в угловых скобках: `<p>`, `<div>`, `</p>`. Теги бывают открывающими (`<p>`) и закрывающими (`</p>`).

**Элемент** — это пара открывающего и закрывающего тега вместе с содержимым: `<p>Текст</p>`. Бывают и самозакрывающиеся элементы: `<img />`, `<input />`, `<br />`.

**Атрибут** — дополнительная информация об элементе, записывается внутри открывающего тега:
```html
<a href="https://example.com" target="_blank">Ссылка</a>
```
Здесь `href` и `target` — атрибуты, `"https://example.com"` и `"_blank"` — их значения.

Атрибуты бывают:
- **Глобальные** — работают на любом элементе: `id`, `class`, `style`, `data-*`, `hidden`.
- **Специфичные** — только для определённых элементов: `href` у `<a>`, `src` у `<img>`, `type` у `<input>`.
- **Булевы** — само наличие атрибута означает `true`: `disabled`, `checked`, `required`.

---

## 4. Чем отличаются блочные и строчные элементы?

| Характеристика | Блочные (block) | Строчные (inline) |
|---|---|---|
| Начало | С новой строки | Продолжают текущую строку |
| Ширина | 100% ширины родителя | По содержимому |
| Margin/Padding | Все стороны | Только горизонтальные (vertical margin не работает) |
| Высота/Ширина | Можно задать | Нельзя задать |
| Вложенность | Могут содержать блочные и строчные | Только строчные |

**Блочные элементы:** `<div>`, `<p>`, `<h1>–<h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<form>`, `<table>`.

**Строчные элементы:** `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<label>`, `<button>`.

> **Важно:** это поведение по умолчанию. CSS-свойство `display` позволяет его изменить.

---

## 5. Из каких основных элементов состоит форма и как работает отправка формы?

```html
<form action="/submit" method="POST">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <select name="role">
    <option value="user">Пользователь</option>
    <option value="admin">Администратор</option>
  </select>

  <textarea name="message" rows="4"></textarea>

  <input type="checkbox" name="agree" id="agree" />
  <label for="agree">Согласен</label>

  <input type="radio" name="gender" value="male" /> Мужской
  <input type="radio" name="gender" value="female" /> Женский

  <button type="submit">Отправить</button>
</form>
```

**Ключевые элементы:**
- `<form>` — контейнер формы. `action` — куда отправить, `method` — GET или POST.
- `<input>` — поле ввода. Тип задаётся атрибутом `type`: `text`, `email`, `password`, `number`, `checkbox`, `radio`, `file`, `hidden`, `submit`.
- `<label>` — подпись к полю. Атрибут `for` связывает её с `id` поля.
- `<select>` + `<option>` — выпадающий список.
- `<textarea>` — многострочное поле.
- `<button type="submit">` — кнопка отправки.

**Как работает отправка:**
1. Пользователь нажимает кнопку submit.
2. Браузер собирает все поля с атрибутом `name` в форме.
3. Если метод **GET** — данные добавляются в URL: `/submit?name=Ivan&email=ivan@mail.ru`. Подходит для поиска.
4. Если метод **POST** — данные отправляются в теле запроса. Подходит для чувствительных данных.
5. Браузер **перезагружает страницу** (если не вызван `event.preventDefault()`).

---

## 6. Что такое CSS-селектор, класс, id, каскад и специфичность?

**Селектор** — шаблон, который определяет, к каким элементам применяется CSS-правило.

```css
p { color: red; }           /* Тег */
.title { font-size: 24px; } /* Класс */
#header { background: blue; } /* ID */
a:hover { color: green; }   /* Псевдокласс */
div > p { margin: 0; }      /* Дочерний комбинатор */
```

**Класс** (`class`) — атрибут, который можно задать нескольким элементам. Один элемент может иметь несколько классов: `class="btn btn-primary large"`. В CSS выбирается через `.название`.

**ID** (`id`) — уникальный идентификатор элемента на странице. Должен встречаться только один раз. В CSS выбирается через `#название`. Также используется для якорей (`<a href="#section1">`) и связки `<label for="id">`.

**Каскад** — механизм разрешения конфликтов, когда несколько правил претендуют на один элемент. Браузер определяет победителя по трём факторам (в порядке приоритета):
1. **Происхождение и важность** (`!important` → стили автора → браузерные стили).
2. **Специфичность** — «вес» селектора.
3. **Порядок** — при равной специфичности побеждает то правило, которое идёт позже.

**Специфичность** вычисляется по формуле `(a, b, c)`:
- `a` — количество ID-селекторов.
- `b` — количество классов, псевдоклассов, атрибутов.
- `c` — количество тегов и псевдоэлементов.

| Селектор | Специфичность |
|---|---|
| `*` | (0,0,0) |
| `p` | (0,0,1) |
| `.btn` | (0,1,0) |
| `#header` | (1,0,0) |
| `#header .btn p` | (1,1,1) |
| `style=""` (инлайн) | (1,0,0,0) — всегда выше |

`!important` — перебивает любую специфичность (использовать осторожно).

---

## 7. Что такое box model?

**Box model** (блочная модель) — способ, которым браузер представляет каждый элемент как прямоугольник, состоящий из 4 областей (снаружи внутрь):

```
┌─────────────────────────────────┐
│           MARGIN                │  ← внешний отступ (прозрачный)
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │  ← рамка
│  │  ┌─────────────────────┐  │  │
│  │  │       PADDING       │  │  │  ← внутренний отступ
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │  ← содержимое (width × height)
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

- **`width` / `height`** — размер области **содержимого** (по умолчанию, `box-sizing: content-box`).
- **`padding`** — внутренний отступ между содержимым и границей. Входит в фоновый цвет элемента.
- **`border`** — рамка вокруг padding. Имеет толщину, стиль, цвет.
- **`margin`** — внешний отступ. Прозрачен, фон сквозь него не виден. **Схлопывается** по вертикали у соседних элементов (большее значение побеждает).

**`box-sizing: border-box`** — меняет поведение: `width` включает в себя padding и border. Это гораздо удобнее, поэтому часто пишут:
```css
*, *::before, *::after { box-sizing: border-box; }
```

---

## 8. Чем отличаются значения display?

- **`block`** — блочный элемент. Занимает всю ширину, начинается с новой строки.
- **`inline`** — строчный. Не создаёт перенос, не реагирует на `width`/`height`, вертикальный `margin` не работает.
- **`inline-block`** — гибрид: стоит в строке, но реагирует на `width`, `height` и все `margin`.
- **`flex`** — включает Flexbox для дочерних элементов. Одноосное выравнивание.
- **`grid`** — включает Grid Layout. Двухосная сетка (строки и колонки).
- **`none`** — элемент полностью скрыт и удалён из потока документа (не занимает места). Отличие от `visibility: hidden`: при `visibility: hidden` место сохраняется.

---

## 9. Как работает Flexbox?

Flexbox — модель компоновки для одноосного выравнивания элементов.

```css
.container {
  display: flex;
  flex-direction: row; /* главная ось: горизонталь (по умолчанию) */
}
```

**Главная ось (main axis)** — направление, в котором расставляются flex-элементы. Задаётся `flex-direction`: `row` (горизонталь), `column` (вертикаль), `row-reverse`, `column-reverse`.

**Поперечная ось (cross axis)** — перпендикулярна главной.

**Ключевые свойства контейнера:**
- `justify-content` — выравнивание вдоль **главной оси**: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
- `align-items` — выравнивание вдоль **поперечной оси**: `flex-start`, `flex-end`, `center`, `stretch` (по умолчанию), `baseline`.
- `flex-wrap` — перенос элементов на новую строку: `nowrap` (по умолчанию), `wrap`, `wrap-reverse`.
- `gap` — отступ между элементами (работает и по главной, и по поперечной оси).
- `align-content` — выравнивание строк при `flex-wrap: wrap`.

**Свойства дочерних элементов:**
- `flex-grow` — как сильно элемент растёт, занимая свободное место.
- `flex-shrink` — как сильно элемент сжимается при нехватке места.
- `flex-basis` — базовый размер элемента до распределения свободного места.
- `align-self` — переопределяет `align-items` для конкретного элемента.
- `order` — порядок отображения.

---

## 10. Как работает position в CSS?

Свойство `position` определяет схему позиционирования элемента.

- **`static`** (по умолчанию) — элемент в нормальном потоке документа. Свойства `top`, `right`, `bottom`, `left` **не работают**.

- **`relative`** — элемент остаётся в потоке, но смещается относительно **своего исходного места** с помощью `top/right/bottom/left`. Освобождённое место сохраняется. Важно: создаёт **новый контекст позиционирования** для дочерних `absolute` элементов.

- **`absolute`** — элемент **выбывает из потока** (не занимает места). Позиционируется относительно **ближайшего предка с `position` ≠ `static`**. Если такого нет — относительно `<html>`.

- **`fixed`** — выбывает из потока. Позиционируется относительно **viewport** (окна браузера). Не прокручивается вместе со страницей. Используется для навбаров, кнопок «наверх».

- **`sticky`** — гибрид `relative` и `fixed`. Ведёт себя как `relative`, пока не достигнет заданного порога прокрутки, после чего «прилипает» как `fixed`. Требует указания хотя бы одного из `top/bottom/left/right`.

**Свойства `top`, `right`, `bottom`, `left`** — задают смещение относительно опорной точки (зависит от типа позиционирования).

**Родительский элемент** становится опорой для `absolute`-дочерних только если у него установлен `position: relative` (или `absolute`/`fixed`/`sticky`).

---

## 11. Псевдоклассы, псевдоэлементы и CSS-переменные

### Псевдоклассы
Выбирают элементы в **определённом состоянии**. Пишутся через одно двоеточие:

```css
a:hover { color: red; }          /* при наведении мыши */
input:focus { outline: 2px solid blue; } /* при фокусе */
li:first-child { font-weight: bold; } /* первый дочерний элемент */
li:last-child { }
li:nth-child(2n) { }             /* чётные */
input:disabled { opacity: 0.5; }
input:checked { }
p:not(.special) { }              /* отрицание */
```

### Псевдоэлементы
Создают **виртуальные элементы** или выбирают часть содержимого. Пишутся через два двоеточия:

```css
p::before { content: "→ "; }   /* вставляет контент перед элементом */
p::after { content: " ←"; }    /* вставляет контент после элемента */
p::first-line { font-weight: bold; } /* первая строка */
p::first-letter { font-size: 2em; } /* первая буква */
::selection { background: yellow; } /* выделенный текст */
```

> `::before` и `::after` — не реальные DOM-элементы, но могут стилизоваться как блочные.

### CSS-переменные (Custom Properties)
Позволяют хранить значения и переиспользовать их:

```css
:root {
  --primary-color: #3498db;
  --font-size-base: 16px;
}

button {
  background: var(--primary-color);
  font-size: var(--font-size-base);
}
```

Преимущества: легко менять тему, уменьшается дублирование, доступны в JavaScript (`element.style.getPropertyValue('--primary-color')`). Переменные **наследуются** и могут быть переопределены в дочерних элементах.

---

## 12. Типы данных JavaScript и отличия let / const / var

### Типы данных

**Примитивы** (передаются по значению):
- `number` — числа: `42`, `3.14`, `NaN`, `Infinity`.
- `string` — строки: `"hello"`, `'world'`, `` `template` ``.
- `boolean` — `true` / `false`.
- `null` — намеренное отсутствие значения.
- `undefined` — переменная объявлена, но значение не присвоено.
- `symbol` — уникальный идентификатор.
- `bigint` — большие целые числа: `9007199254740991n`.

**Объекты** (передаются по ссылке):
- `object` — `{}`, `[]`, `null` (исторически `typeof null === 'object'`).
- `function` — тоже объект, но `typeof function(){}` возвращает `'function'`.

### let, const, var

| | `var` | `let` | `const` |
|---|---|---|---|
| Область видимости | Функция | Блок `{}` | Блок `{}` |
| Hoisting (поднятие) | Да, значение `undefined` | Да, но в TDZ | Да, но в TDZ |
| Переобъявление | Да | Нет | Нет |
| Переприсваивание | Да | Да | Нет |

**Temporal Dead Zone (TDZ)** — период между началом блока и строкой объявления переменной, в котором обращение к `let`/`const` выбрасывает `ReferenceError`.

**Hoisting (поднятие)** — механизм, при котором объявления переменных и функций «поднимаются» в начало своей области видимости на этапе компиляции.

`const` не означает «константный объект»: свойства объекта можно менять. `const` запрещает только переприсваивание самой переменной.

---

## 13. Какие циклы есть в JavaScript?

```javascript
// for — когда известно количество итераций
for (let i = 0; i < 5; i++) { console.log(i); }

// while — пока условие истинно
let i = 0;
while (i < 5) { console.log(i); i++; }

// do...while — выполнится хотя бы один раз
do { console.log(i); i++; } while (i < 5);

// for...of — перебор итерируемых объектов (массив, строка, Set, Map)
for (const item of ['a', 'b', 'c']) { console.log(item); }

// for...in — перебор ключей объекта (включая прототип! Используй осторожно)
for (const key in { a: 1, b: 2 }) { console.log(key); }

// forEach — метод массива, колбэк для каждого элемента (нет break/continue)
[1, 2, 3].forEach((item, index) => console.log(index, item));
```

**Когда что использовать:**
- `for` — классика, когда нужен счётчик или шаг не равный 1.
- `while` — когда заранее неизвестно количество итераций.
- `for...of` — предпочтительный способ перебора массивов и других итерируемых объектов.
- `for...in` — для объектов, но лучше использовать `Object.keys()`.
- `forEach` — когда не нужен `break` и хочется функционального стиля.

---

## 14. Объект, вложенность, деструктуризация, шаблонные строки

### Объект
```javascript
const user = {
  name: 'Ivan',
  age: 25,
  address: {          // вложенность
    city: 'Moscow',
    zip: '101000'
  }
};

// Доступ к вложенным свойствам
console.log(user.address.city);       // 'Moscow'
console.log(user['address']['city']); // то же самое
```

### Деструктуризация
Позволяет «распаковать» значения из объектов и массивов:

```javascript
// Объект
const { name, age, address: { city } } = user;
console.log(name); // 'Ivan'
console.log(city); // 'Moscow'

// С переименованием и значением по умолчанию
const { name: userName = 'Anonymous' } = user;

// Массив
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// В параметрах функции
function greet({ name, age }) {
  return `${name}, ${age} лет`;
}
```

### Шаблонные строки (Template Literals)
```javascript
const name = 'Ivan';
const age = 25;
const greeting = `Привет, ${name}! Тебе ${age * 2} лет через ${age} лет.`;

// Многострочные строки
const html = `
  <div class="user">
    <p>${name}</p>
  </div>
`;
```

---

## 15. Синхронный и асинхронный код

**Синхронный код** выполняется строка за строкой. Каждая следующая строка ждёт завершения предыдущей. Если операция занимает много времени — страница «замерзает».

```javascript
console.log('1');
console.log('2'); // ждёт завершения предыдущего
console.log('3');
// Вывод: 1, 2, 3
```

**Асинхронный код** позволяет запустить долгую операцию (запрос к серверу, таймер, чтение файла) и продолжить выполнение остального кода, не дожидаясь её завершения.

```javascript
console.log('1');
setTimeout(() => console.log('2'), 1000); // асинхронно
console.log('3');
// Вывод: 1, 3, 2
```

JavaScript — **однопоточный** язык. Он не может реально делать несколько вещей одновременно. Асинхронность достигается через **Event Loop**, механизм который позволяет браузеру/Node.js обрабатывать колбэки, когда основной поток свободен.

---

## 16. Что такое Event Loop?

**Event Loop** (цикл событий) — механизм, который позволяет JavaScript выполнять асинхронные операции, несмотря на то что он однопоточный.

Суть: Event Loop постоянно проверяет — если **стек вызовов** пуст, он берёт следующую задачу из очереди и помещает её в стек.

Это позволяет браузеру обрабатывать клики, таймеры, запросы — не блокируя основной поток.

```
Стек вызовов       Web APIs         Очередь задач
┌──────────┐      ┌──────────┐      ┌──────────┐
│ main()   │  →   │setTimeout│  →   │ callback │
│          │      │  fetch   │      │ callback │
└──────────┘      └──────────┘      └──────────┘
        ↑                                  │
        └──────────── Event Loop ──────────┘
```

---

## 17. Стек вызовов, очередь задач и микрозадачи

### Стек вызовов (Call Stack)
Структура данных (LIFO — последний вошёл, первый вышел), в которой хранятся выполняемые функции. Когда функция вызывается — она добавляется на вершину стека. Когда завершается — удаляется. Если стек переполняется — `RangeError: Maximum call stack size exceeded` (бесконечная рекурсия).

### Очередь задач (Task Queue / Macrotask Queue)
Сюда попадают колбэки от:
- `setTimeout` / `setInterval`
- Обработчиков DOM-событий (`click`, `input`...)
- `XMLHttpRequest` (старый способ AJAX)

### Очередь микрозадач (Microtask Queue)
Имеет **более высокий приоритет**, чем Task Queue. Сюда попадают:
- Колбэки `.then()`, `.catch()`, `.finally()` у промисов
- `queueMicrotask()`
- `MutationObserver`

Event Loop **полностью опустошает** Microtask Queue перед тем, как взять следующую задачу из Task Queue.

---

## 18. Порядок выполнения: синхронный код, microtasks, macrotasks

```javascript
console.log('1');                          // синхронный

setTimeout(() => console.log('2'), 0);    // macrotask

Promise.resolve().then(() => console.log('3')); // microtask

console.log('4');                          // синхронный

// Вывод: 1, 4, 3, 2
```

**Алгоритм Event Loop:**
1. Выполнить весь синхронный код (Call Stack).
2. Опустошить **Microtask Queue** (все промисы, queueMicrotask).
3. Взять **одну** задачу из **Macrotask Queue**.
4. Снова опустошить **Microtask Queue**.
5. Перерисовать страницу (если нужно).
6. Повторить с шага 3.

---

## 19. Что такое Promise?

**Promise** (промис) — объект, представляющий результат асинхронной операции, который будет доступен в будущем (или ошибку, если операция не удалась).

```javascript
const promise = new Promise((resolve, reject) => {
  // Асинхронная операция
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Данные получены'); // успех
    } else {
      reject(new Error('Ошибка'));  // провал
    }
  }, 1000);
});
```

### Состояния промиса
- **`pending`** (ожидание) — начальное состояние, операция ещё выполняется.
- **`fulfilled`** (выполнен) — операция завершилась успешно, вызван `resolve(value)`.
- **`rejected`** (отклонён) — операция завершилась с ошибкой, вызван `reject(reason)`.

Промис может перейти из `pending` только один раз — либо в `fulfilled`, либо в `rejected`. После этого его состояние не меняется (**иммутабельность**).

---

## 20. Работа с промисами: .then(), .catch(), .finally()

```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) throw new Error('HTTP error');
    return response.json(); // возвращает новый промис
  })
  .then(data => {
    console.log(data); // получаем данные
    return data;
  })
  .catch(error => {
    console.error('Ошибка:', error); // перехватывает любую ошибку выше
  })
  .finally(() => {
    console.log('Операция завершена'); // выполняется всегда
  });
```

- **`.then(onFulfilled, onRejected)`** — вызывается при успехе. Возвращает новый промис, что позволяет **цепочку** (chaining).
- **`.catch(onRejected)`** — сокращение для `.then(null, onRejected)`. Перехватывает ошибки из всей цепочки выше.
- **`.finally(callback)`** — выполняется **в любом случае**. Не получает значения промиса. Удобен для скрытия загрузчика.

**Полезные статические методы:**
- `Promise.all([p1, p2])` — ждёт все промисы. Если хоть один упал — упадёт весь.
- `Promise.allSettled([p1, p2])` — ждёт все, возвращает массив результатов (fulfilled или rejected).
- `Promise.race([p1, p2])` — возвращает первый завершившийся.
- `Promise.any([p1, p2])` — возвращает первый **успешный**.

---

## 21. Что такое async/await и как он связан с Promise?

`async/await` — **синтаксический сахар** над промисами. Под капотом это те же промисы, просто с более читаемым синтаксисом.

```javascript
// С промисами
function getData() {
  return fetch('/api/data')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
}

// То же самое с async/await
async function getData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return data; // функция вернёт промис с этим значением
  } catch (err) {
    console.error(err);
  }
}
```

**Ключевые моменты связи async/await и Promise:**
- `async`-функция **всегда возвращает промис**. `return 42` превратится в `Promise.resolve(42)`.
- `await` можно использовать только внутри `async`-функции.
- `await` **приостанавливает выполнение текущей async-функции** и ждёт, пока промис не завершится. Остальной код (вне функции) при этом не блокируется.
- `await` перехватывает значение из `resolve()` и выбрасывает исключение при `reject()`.
- Ошибки обрабатываются через `try/catch` вместо `.catch()`.

```javascript
// await «разворачивает» промис
const data = await Promise.resolve(42); // data === 42
```

---

## 22. Что такое DOM?

**DOM** (Document Object Model) — программный интерфейс (API), который представляет HTML-документ в виде **дерева объектов**, доступных для чтения и изменения через JavaScript.

**Отличие DOM от HTML-файла:**
- HTML-файл — это текст (строка байтов).
- DOM — это живая структура объектов в памяти браузера, созданная **после парсинга** HTML.
- DOM может отличаться от исходного HTML: браузер исправляет ошибки (добавляет `<tbody>` в таблицу), JavaScript может изменить DOM после загрузки.

**Структура DOM-дерева:**
```
document
└── html
    ├── head
    │   └── title
    │       └── "Моя страница"
    └── body
        ├── h1
        │   └── "Заголовок"
        └── p
            └── "Текст"
```

Каждый узел — объект с методами и свойствами. Типы узлов: `Element`, `Text`, `Comment`, `Document`.

---

## 23. Работа с DOM через JavaScript

```javascript
// Поиск элементов
const el = document.querySelector('.btn');        // первый совпадающий
const els = document.querySelectorAll('li');      // все совпадающие (NodeList)
const byId = document.getElementById('header');   // по id

// Изменение
el.textContent = 'Новый текст';
el.style.color = 'red';
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('open');
el.setAttribute('data-id', '42');

// Создание
const div = document.createElement('div');
div.textContent = 'Я новый элемент';
div.classList.add('card');

// Добавление в DOM
document.body.appendChild(div);          // в конец body
document.body.prepend(div);              // в начало
el.before(div);                          // перед el
el.after(div);                           // после el
el.insertAdjacentElement('afterend', div); // гибкий вариант

// Удаление
el.remove();
el.parentNode.removeChild(el); // старый способ
```

---

## 24. textContent vs innerHTML

```javascript
const el = document.querySelector('p');

// textContent — только текст, без HTML
el.textContent = '<strong>Привет</strong>';
// Отобразит буквально: <strong>Привет</strong> (теги как текст)

// innerHTML — интерпретирует HTML
el.innerHTML = '<strong>Привет</strong>';
// Отобразит жирный текст: Привет
```

**Почему innerHTML опасен:**
Если вставлять в `innerHTML` пользовательские данные без очистки — это уязвимость **XSS** (Cross-Site Scripting):

```javascript
// ОПАСНО! Если name = '<img src=x onerror="alert(document.cookie)">'
el.innerHTML = `Привет, ${name}!`; // Выполнит произвольный JS!

// БЕЗОПАСНО
el.textContent = `Привет, ${name}!`;
```

Используй `innerHTML` только с доверенным содержимым или предварительно санируй данные (DOMPurify).

---

## 25. DOM-события и addEventListener()

**Событие** — сигнал о том, что что-то произошло: клик, нажатие клавиши, загрузка страницы, движение мыши.

```javascript
const btn = document.querySelector('button');

// Добавление обработчика
btn.addEventListener('click', function(event) {
  console.log('Кнопка нажата!', event);
});

// Стрелочная функция
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});

// Удаление обработчика (нужна именованная функция)
function handler(e) { console.log(e); }
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);
```

Преимущества `addEventListener` перед `onclick`:
- Можно добавить несколько обработчиков на одно событие.
- Можно управлять фазой (capture/bubble).
- Можно удалить обработчик.

---

## 26. Объект Event

Объект `event` (или `e`) автоматически передаётся в обработчик события. Содержит информацию о событии:

```javascript
el.addEventListener('click', (e) => {
  e.type;          // 'click' — тип события
  e.target;        // элемент, на котором произошло событие (где кликнули)
  e.currentTarget; // элемент, к которому привязан обработчик
  e.timeStamp;     // время события в миллисекундах

  // Для событий мыши
  e.clientX;       // координаты курсора относительно viewport
  e.clientY;
  e.pageX;         // координаты относительно всей страницы
  e.button;        // 0 — левая, 1 — средняя, 2 — правая кнопка

  // Для событий клавиатуры
  e.key;           // 'Enter', 'ArrowUp', 'a', etc.
  e.code;          // 'KeyA', 'Space' — физическая клавиша
  e.ctrlKey;       // зажат ли Ctrl
  e.shiftKey;
  e.altKey;

  // Методы
  e.preventDefault();   // отменить действие по умолчанию
  e.stopPropagation();  // остановить всплытие
});
```

---

## 27. События click, input, change, submit

| Событие | Когда срабатывает | Когда использовать |
|---|---|---|
| `click` | При клике мышью (или Enter на кнопке) | Кнопки, ссылки, переключатели |
| `input` | При каждом изменении значения поля | Живой поиск, валидация в реальном времени |
| `change` | После потери фокуса, если значение изменилось (или при выборе для `select`, `checkbox`) | Подтверждение выбора, когда реакция нужна не мгновенно |
| `submit` | При отправке формы (кнопка submit или Enter в поле) | Обработка данных формы перед отправкой |

```javascript
input.addEventListener('input', (e) => {
  console.log(e.target.value); // текущее значение при каждом вводе
});

input.addEventListener('change', (e) => {
  console.log('Финальное значение:', e.target.value);
});
```

---

## 28. preventDefault() при submit

**`preventDefault()`** — отменяет **действие браузера по умолчанию** для данного события.

Для события `submit` действие по умолчанию — **перезагрузить страницу** и отправить данные на сервер через HTTP (как указано в `action` формы).

```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменяем перезагрузку

  // Теперь обрабатываем форму сами через JS
  const data = new FormData(form);
  fetch('/api/submit', { method: 'POST', body: data });
});
```

**Если не вызвать `preventDefault()`:**
- Страница перезагрузится.
- Если форма GET — данные появятся в URL.
- Если форма POST — браузер сделает POST-запрос и перейдёт на страницу `action`.
- Весь JavaScript после отправки не выполнится.

Также `preventDefault()` используют для:
- `<a href="...">` — чтобы не переходить по ссылке.
- `contextmenu` — чтобы не показывать контекстное меню браузера.
- `keydown` — чтобы заблокировать определённые клавиши.

---

## 29. Всплытие событий (Event Bubbling)

**Всплытие** — механизм, при котором событие, произошедшее на элементе, **последовательно распространяется вверх** по DOM-дереву, вызывая обработчики на каждом родительском элементе.

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Клик</button>
  </div>
</div>
```

```javascript
document.getElementById('btn').addEventListener('click', () => console.log('button'));
document.getElementById('inner').addEventListener('click', () => console.log('inner'));
document.getElementById('outer').addEventListener('click', () => console.log('outer'));
document.addEventListener('click', () => console.log('document'));

// При клике на кнопку вывод будет:
// button → inner → outer → document
```

**Фазы события:**
1. **Capturing (погружение)** — событие идёт от корня (`document`) вниз к цели.
2. **Target** — событие достигло целевого элемента.
3. **Bubbling (всплытие)** — событие поднимается от цели вверх к корню.

По умолчанию `addEventListener` работает на фазе **всплытия**. Чтобы поймать на фазе capturing: `el.addEventListener('click', handler, true)`.

Не все события всплывают: `focus`, `blur`, `load`, `scroll` — не всплывают (или всплывают иначе).

---

## 30. stopPropagation()

**`stopPropagation()`** — метод объекта события, который **останавливает дальнейшее всплытие** события по DOM-дереву.

```javascript
document.getElementById('inner').addEventListener('click', (e) => {
  e.stopPropagation(); // Событие не дойдёт до outer и document
  console.log('inner');
});
```

**`stopImmediatePropagation()`** — дополнительно прекращает вызов остальных обработчиков **на текущем элементе**.

**Когда использовать:**
- Модальное окно: клик внутри не должен закрывать его.
- Кнопка «удалить» внутри карточки: не должна вызывать клик по карточке.

**Когда НЕ использовать:** злоупотребление `stopPropagation()` ломает делегирование событий и усложняет отладку. Часто лучше проверить `e.target`.

---

## 31. Делегирование событий

**Делегирование событий** — паттерн, при котором обработчик события вешается **не на каждый дочерний элемент**, а на их **общего предка**, используя механизм всплытия.

**Зачем:**
- Экономия памяти (один обработчик вместо сотен).
- Работает для элементов, которые **ещё не существуют** в DOM на момент привязки обработчика.

```javascript
// Плохо: отдельный обработчик на каждую кнопку
document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', handleDelete);
});

// Хорошо: один обработчик на контейнер (делегирование)
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    handleDelete(e);
  }
});
```

**Связь с всплытием:** делегирование работает **только благодаря всплытию**. Клик на дочернем элементе всплывает до родителя, где его перехватывает обработчик. Если всплытие остановить (`stopPropagation()`), делегирование сломается.

---

## 32. Обработка кликов по динамически созданным элементам

```javascript
const list = document.getElementById('list');

// Добавляем элементы динамически
function addItem(text) {
  const li = document.createElement('li');
  li.innerHTML = `${text} <button class="delete" data-id="${Date.now()}">×</button>`;
  list.appendChild(li);
}

// Обработчик на контейнере — работает для всех элементов, в том числе добавленных позже
list.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('.delete'); // ищем ближайший .delete
  if (!deleteBtn) return;

  const id = deleteBtn.dataset.id;
  console.log('Удаляем:', id);
  deleteBtn.closest('li').remove();
});

addItem('Элемент 1');
addItem('Элемент 2'); // обработчик сработает и для него
```

---

## 33. Метод closest()

**`closest(selector)`** — метод элемента, который ищет **ближайшего предка** (включая сам элемент), соответствующего селектору. Возвращает элемент или `null`.

```html
<ul id="list">
  <li class="item" data-id="42">
    Текст
    <div class="controls">
      <button class="edit">Редактировать</button>
      <button class="delete">Удалить</button>
    </div>
  </li>
</ul>
```

```javascript
list.addEventListener('click', (e) => {
  // e.target — именно та кнопка, на которую кликнули
  // Но нам нужен родительский <li> с data-id
  const li = e.target.closest('.item');
  if (!li) return;

  const id = li.dataset.id; // '42'

  if (e.target.closest('.delete')) {
    console.log('Удаляем', id);
  }
  if (e.target.closest('.edit')) {
    console.log('Редактируем', id);
  }
});
```

`closest()` — незаменим при делегировании с вложенной разметкой, когда элемент внутри кнопки (`<span>`, иконка) может оказаться `e.target`.

---

## 34. data-* атрибуты при работе с событиями

**`data-*` атрибуты** — пользовательские HTML-атрибуты для хранения произвольных данных, связанных с элементом.

```html
<button class="delete" data-id="42" data-type="post">Удалить</button>
```

```javascript
btn.addEventListener('click', (e) => {
  const id = e.target.dataset.id;     // '42' (строка!)
  const type = e.target.dataset.type; // 'post'

  console.log(`Удаляем ${type} с id=${id}`);
});
```

**Зачем нужны при делегировании:**
- Позволяют хранить идентификатор записи прямо в разметке.
- Не нужно создавать замыкания или Map для хранения данных.
- Данные доступны через `element.dataset.имяАтрибута` (camelCase: `data-user-id` → `dataset.userId`).

```javascript
// Установка через JS
el.dataset.userId = '123';
// Удаление
delete el.dataset.userId;
```

---

## 35. DOMContentLoaded

**`DOMContentLoaded`** — событие, которое срабатывает, когда браузер **полностью разобрал HTML и построил DOM**, но ещё не загрузил картинки, стили и другие ресурсы.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // DOM готов, можно безопасно обращаться к элементам
  const btn = document.querySelector('#myButton');
  btn.addEventListener('click', handler);
});
```

**Почему нельзя всегда обращаться к DOM в начале скрипта:**

Если `<script>` находится в `<head>`, то в момент его выполнения HTML ещё не до конца спарсился. Обращение к элементам вернёт `null`.

```html
<head>
  <script>
    // DOM ещё не готов!
    const btn = document.querySelector('#btn'); // null
    btn.addEventListener('click', ...); // TypeError!
  </script>
</head>
<body>
  <button id="btn">Кнопка</button>
</body>
```

**Решения:**
1. Поставить `<script>` в конец `<body>`.
2. Использовать атрибут `defer` у тега `<script>` — скрипт загружается параллельно, выполняется после парсинга HTML.
3. Обернуть код в `DOMContentLoaded`.

```html
<script src="app.js" defer></script>
```

`window.onload` — срабатывает позже: после загрузки **всех** ресурсов (картинок, стилей).

---

## 36. Debounce

**Debounce** — техника, при которой выполнение функции **откладывается на заданное время** после последнего вызова. Если функция вызывается снова до истечения таймера — таймер сбрасывается.

```javascript
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const input = document.querySelector('input');

const search = debounce((e) => {
  console.log('Запрос к API:', e.target.value);
  // fetch(`/api/search?q=${e.target.value}`)
}, 500);

input.addEventListener('input', search);
// Запрос отправится только через 500мс после того,
// как пользователь перестанет печатать
```

**Зачем нужен:**
- `input` — без debounce запрос к API отправляется при каждом нажатии клавиши.
- `scroll` — без debounce обработчик срабатывает десятки раз в секунду.
- `resize` — то же самое.

**Отличие от Throttle:**
- **Debounce** — ждёт паузы и выполняется **один раз в конце** серии вызовов.
- **Throttle** — выполняется **не чаще одного раза за интервал**, даже если вызовы продолжаются.

```javascript
// Throttle — для scroll, когда нужна реакция во время прокрутки
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```
