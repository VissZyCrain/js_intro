Math.round
let user_input = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Градусы по Цельсию: ${user_input}\nГрадусы по Фаренгейту: ${Math.round((9 / 5) * user_input + 32)}`)
