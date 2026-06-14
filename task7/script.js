const globalVar = 'Глобальная переменная';

function showScope() {
  const localVar = 'Локальная переменная';

  console.log(globalVar);
  console.log(localVar);
}

showScope();

console.log(globalVar);

try {
  console.log(localVar);
} catch (e) {
  console.log('Ерор локальная переменная недоступна снаружи функции');
}