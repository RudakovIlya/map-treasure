'use strict';

// 1) Создание функции для получение рандомного(случайного) значения.

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 2) Создаем объект, который будет рандомно вычислять расположени x y координат.

const target = {

	x: getRandomNum(0, 800),

	y: getRandomNum(0, 800),

}

// 3) Вешаем обработчик событий на нашу карту (img);

const map = document.querySelector('#map');

const CountClick = document.querySelector('#count');

let countClicks = 0;

const getDistance = (event, target) => {

	const diffX = event.offsetX - target.x;

	const diffY = event.offsetY - target.y;

	return Math.sqrt((diffX * diffX) + (diffY * diffY));

}

const getDistanceHint = (distance) => {
	if (distance < 10) {

		return "Обожжешься!";

	} else if (distance < 20) {

		return "Очень горячо";

	} else if (distance < 40) {

		return "Горячо";

	} else if (distance < 80) {

		return "Тепло";

	} else if (distance < 160) {

		return "Холодно";

	} else if (distance < 320) {

		return "Очень холодно";

	} else if (distance < 620) {

		return "Настолько холодно, что северный полюс покажется райским островом...";

	}
	else {

		return "Замерзнешь!";

	}
};

const startGame = (e) => {

	const level = document.querySelector('#level');

	const levelValue = +level.value;

	const distance = getDistance(e, target);

	const distanceHint = getDistanceHint(distance);

	document.querySelector("#distance").textContent = distanceHint;

	countClicks++;

	CountClick.textContent = `Осталось кликов: ${levelValue - countClicks}`;

	if (distance < 8) {
		alert("Клад найден! Сделано кликов: " + countClicks);
	}
	if (countClicks === levelValue) {

		alert(`GAME OVER! Ты сделал ${countClicks} кликов!`);

		map.removeEventListener('click', startGame);

	}
}



map.addEventListener('click', startGame);