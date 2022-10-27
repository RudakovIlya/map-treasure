'use strict';

// 1) Создание функции для получение рандомного(случайного) значения.

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 2) Создаем объект, который будет рандомно вычислять расположени x y координат.

const target = {

	x: getRandomNum(0, 800),

	y: getRandomNum(0, 800),

}