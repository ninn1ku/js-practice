# SOLID — Принципы объектно-ориентированного проектирования

> **SOLID** — это аббревиатура из пяти фундаментальных принципов проектирования ПО, предложенных Робертом Мартином («Дядя Боб»). Они помогают создавать гибкий, читаемый и поддерживаемый код.

---

## Содержание

- [S — Single Responsibility Principle](#s--single-responsibility-principle)
- [O — Open/Closed Principle](#o--openclosed-principle)
- [L — Liskov Substitution Principle](#l--liskov-substitution-principle)
- [I — Interface Segregation Principle](#i--interface-segregation-principle)
- [D — Dependency Inversion Principle](#d--dependency-inversion-principle)
- [Итого](#итого)

---

## S — Single Responsibility Principle

### Принцип единственной ответственности

> **«У класса должна быть только одна причина для изменения»**

Каждый класс (или модуль) должен отвечать за одну конкретную задачу. Если класс делает слишком много — его сложно тестировать, изменять и переиспользовать.

### ❌ Нарушение

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `${this.name} <${this.email}>`;
  }

  saveToDatabase() {
    // логика сохранения — не дело User
    db.save(this);
  }

  sendWelcomeEmail() {
    // логика отправки почты — не дело User
    mailer.send(this.email, 'Welcome!');
  }
}
```

### ✅ Правильно

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    db.save(user);
  }
}

class UserMailer {
  sendWelcome(user) {
    mailer.send(user.email, 'Welcome!');
  }
}
```

---

## O — Open/Closed Principle

### Принцип открытости/закрытости

> **«Программные сущности должны быть открыты для расширения, но закрыты для изменения»**

Новую функциональность добавляют не правкой существующего кода, а его расширением (через наследование, интерфейсы, композицию).

### ❌ Нарушение

```js
class DiscountCalculator {
  calculate(userType, price) {
    if (userType === 'vip') return price * 0.8;
    if (userType === 'student') return price * 0.9;
    // каждый новый тип — правка этого метода
    return price;
  }
}
```

### ✅ Правильно

```js
class VipDiscount {
  apply(price) { return price * 0.8; }
}

class StudentDiscount {
  apply(price) { return price * 0.9; }
}

class NoDiscount {
  apply(price) { return price; }
}

class DiscountCalculator {
  calculate(discount, price) {
    return discount.apply(price);
  }
}

// Использование
const calculator = new DiscountCalculator();
console.log(calculator.calculate(new VipDiscount(), 100)); // 80
console.log(calculator.calculate(new StudentDiscount(), 100)); // 90
```

---

## L — Liskov Substitution Principle

### Принцип подстановки Лисков

> **«Объекты подкласса должны быть заменимы объектами суперкласса без нарушения корректности программы»**

Если код работает с базовым классом, он должен корректно работать и с любым его потомком — без сюрпризов и исключений.

### ❌ Нарушение

```js
class Bird {
  fly() {
    return "I'm flying!";
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!"); // нарушает контракт Bird
  }
}

function makeBirdFly(bird) {
  console.log(bird.fly()); // упадёт для Penguin
}
```

### ✅ Правильно

```js
class Bird {
  move() {}
}

class FlyingBird extends Bird {
  move() { return 'Flying!'; }
}

class SwimmingBird extends Bird {
  move() { return 'Swimming!'; }
}

class Eagle extends FlyingBird {}
class Penguin extends SwimmingBird {}

function makeMove(bird) {
  console.log(bird.move()); // работает для любого Bird
}

makeMove(new Eagle());   // Flying!
makeMove(new Penguin()); // Swimming!
```

---

## I — Interface Segregation Principle

### Принцип разделения интерфейсов

> **«Клиенты не должны зависеть от методов, которые они не используют»**

Лучше много маленьких специализированных интерфейсов, чем один «толстый». Классы не должны реализовывать методы, которые им не нужны.

> В JS нет встроенных интерфейсов, но принцип применяется через миксины и композицию.

### ❌ Нарушение

```js
// «Толстый» базовый класс — все методы в одном месте
class Worker {
  work() { throw new Error('Not implemented'); }
  eat()  { throw new Error('Not implemented'); }  // роботы не едят
  sleep(){ throw new Error('Not implemented'); }  // роботы не спят
}

class Robot extends Worker {
  work() { return 'Working'; }
  eat()  { throw new Error("Robots don't eat"); }  // вынужден «реализовывать»
  sleep(){ throw new Error("Robots don't sleep"); }
}
```

### ✅ Правильно

```js
// Маленькие миксины вместо одного большого класса
const Workable = (Base) => class extends Base {
  work() { return 'Working'; }
};

const Eatable = (Base) => class extends Base {
  eat() { return 'Eating'; }
};

const Sleepable = (Base) => class extends Base {
  sleep() { return 'Sleeping'; }
};

class Entity {}

// Человек умеет всё
class Human extends Sleepable(Eatable(Workable(Entity))) {}

// Робот умеет только работать
class Robot extends Workable(Entity) {}

const human = new Human();
console.log(human.work());  // Working
console.log(human.eat());   // Eating
console.log(human.sleep()); // Sleeping

const robot = new Robot();
console.log(robot.work());  // Working
// robot.eat() — метода нет, и это правильно
```

---

## D — Dependency Inversion Principle

### Принцип инверсии зависимостей

> **«Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба должны зависеть от абстракций»**

Высокоуровневая логика не должна знать о конкретных реализациях — только об интерфейсах. Это позволяет легко подменять реализации (для тестов, смены БД и т.д.).

### ❌ Нарушение

```js
class MySQLDatabase {
  save(data) {
    console.log(`Saving to MySQL: ${JSON.stringify(data)}`);
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase(); // жёсткая зависимость — не заменить без правки класса
  }

  createUser(data) {
    this.db.save(data);
  }
}
```

### ✅ Правильно

```js
// «Интерфейс» — любой объект с методом save()
class MySQLDatabase {
  save(data) { console.log(`MySQL: ${JSON.stringify(data)}`); }
}

class MongoDatabase {
  save(data) { console.log(`Mongo: ${JSON.stringify(data)}`); }
}

class InMemoryDatabase {
  constructor() { this.store = []; }
  save(data) { this.store.push(data); }
}

class UserService {
  constructor(db) { // зависим от абстракции, а не от конкретики
    this.db = db;
  }

  createUser(data) {
    this.db.save(data);
  }
}

// Легко подменять реализацию
const prodService = new UserService(new MySQLDatabase());
const testService = new UserService(new InMemoryDatabase());

prodService.createUser({ name: 'Alice' }); // MySQL: {"name":"Alice"}
testService.createUser({ name: 'Bob' });   // сохранится в памяти
```

---

## Итого

| Принцип | Ключевая идея |
|--------|--------------|
| **S** — Single Responsibility | Один класс = одна ответственность |
| **O** — Open/Closed | Расширяй, не изменяй |
| **L** — Liskov Substitution | Наследник не должен ломать поведение родителя |
| **I** — Interface Segregation | Много маленьких интерфейсов лучше одного большого |
| **D** — Dependency Inversion | Зависеть от абстракций, не от конкретики |

### Зачем это нужно?

- 🔧 **Поддерживаемость** — легче вносить изменения
- 🧪 **Тестируемость** — проще писать юнит-тесты
- ♻️ **Переиспользование** — компоненты не завязаны друг на друга
- 📖 **Читаемость** — код говорит сам за себя
- 🚀 **Масштабируемость** — система растёт без хаоса

---

> 📚 **Источники для углублённого изучения:**
> - Robert C. Martin — *«Clean Code»*
> - Robert C. Martin — *«Clean Architecture»*
> - [SOLID на refactoring.guru](https://refactoring.guru/ru/design-patterns)
