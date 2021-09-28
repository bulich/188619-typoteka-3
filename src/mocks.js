'use strict';

const passwordUtils = require(`./service/lib/password`);

const mockCategories = [
  `За жизнь`,
  `Программирование`,
  `Железо`,
  `Лайфхаки`
];

const mockUsers = [
  {
    name: `Иван`,
    surname: `Иванов`,
    email: `ivanov@example.com`,
    passwordHash: passwordUtils.hashSync(`ivanov`),
    avatar: `avatar01.jpg`
  },
  {
    name: `Пётр`,
    surname: `Петров`,
    email: `petrov@example.com`,
    passwordHash: passwordUtils.hashSync(`petrov`),
    avatar: `avatar02.jpg`
  }
];

const mockData = [
  {
    user: `ivanov@example.com`,
    title: `Топ лайфхаки для тебя`,
    announce:
      `Он написал больше 30 хитов. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Программировать не настолько сложно, как об этом говорят. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
    fullText:
      `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Достичь успеха помогут ежедневные повторения. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Ёлки — это не просто красивое дерево. Это прочная древесина. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Это один из лучших рок-музыкантов. Согласно официальной версии, принятой в настоящее время, город был основан более 1000 лет назад. Простые ежедневные упражнения помогут достичь успеха. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Первая большая ёлка была установлена только в 1938 году. Как начать действовать? Для начала просто соберитесь. Он написал больше 30 хитов.`,
    categories: [`За жизнь`],
    date: Date.now(),
    comments: [
      {
        user: `petrov@example.com`,
        text: `Планируете записать видосик на эту тему?`,
      },
    ],
  },
  {
    user: `ivanov@example.com`,
    title: `Рецепт домашней пиццы`,
    announce:
      `Программировать не настолько сложно, как об этом говорят. Ёлки — это не просто красивое дерево. Это прочная древесина. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Согласно официальной версии, принятой в настоящее время, город был основан более 1000 лет назад. Вкуснейшая домашняя пицца на тонком бездрожжевом тесте. Готовится тесто для пиццы без дрожжей очень быстро.`,
    fullText:
      `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Достичь успеха помогут ежедневные повторения. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Золотое сечение — соотношение двух величин, гармоническая пропорция. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Программировать не настолько сложно, как об этом говорят. Ёлки — это не просто красивое дерево. Это прочная древесина. Как начать действовать? Для начала просто соберитесь. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Вкуснейшая домашняя пицца на тонком бездрожжевом тесте. Готовится тесто для пиццы без дрожжей очень быстро. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
    date: Date.now(),
    categories: [
      `Программирование`,
      `Железо`,
    ],
    comments: [
      {
        user: `ivanov@example.com`,
        text: `Это где ж такие красоты? Планируете записать видосик на эту тему? Плюсую, но слишком много буквы!`,
      },
      {
        user: `petrov@example.com`,
        text: `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Мне кажется или я уже читал это где-то?`,
      },
      {
        user: `ivanov@example.com`,
        text: `Хочу такую же футболку :-)`,
      },
      {
        user: `petrov@example.com`,
        text: `Планируете записать видосик на эту тему? Согласен с автором!`,
      },
      {
        user: `ivanov@example.com`,
        text: `Это где ж такие красоты?`,
      },
    ],
  },
  {
    user: `ivanov@example.com`,
    title: `Ёлки. История деревьев`,
    announce:
      `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Он написал больше 30 хитов. У нас есть лайфхак для тех, кто любит отдыхать на свежем воздухе! Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
    fullText:
      `Как начать действовать? Для начала просто соберитесь. Достичь успеха помогут ежедневные повторения. Ёлки — это не просто красивое дерево. Это прочная древесина. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Из под его пера вышло 8 платиновых альбомов. Это один из лучших рок-музыкантов. У нас есть лайфхак для тех, кто любит отдыхать на свежем воздухе! Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Первая большая ёлка была установлена только в 1938 году. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Золотое сечение — соотношение двух величин, гармоническая пропорция. Простые ежедневные упражнения помогут достичь успеха. Вкуснейшая домашняя пицца на тонком бездрожжевом тесте. Готовится тесто для пиццы без дрожжей очень быстро. Он написал больше 30 хитов.`,
    date: Date.now(),
    categories: [
      `За жизнь`,
    ],
    comments: [
      {
        user: `petrov@example.com`,
        text: `Совсем немного...`,
      },
      {
        user: `ivanov@example.com`,
        text: `Согласен с автором!`,
      },
    ],
  },
  {
    user: `ivanov@example.com`,
    title: `Учим HTML и CSS`,
    announce:
      `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Золотое сечение — соотношение двух величин, гармоническая пропорция. Из под его пера вышло 8 платиновых альбомов. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. У нас есть лайфхак для тех, кто любит отдыхать на свежем воздухе!`,
    fullText:
      `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Как начать действовать? Для начала просто соберитесь. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Из под его пера вышло 8 платиновых альбомов. Собрать камни бесконечности легко, если вы прирожденный герой. У нас есть лайфхак для тех, кто любит отдыхать на свежем воздухе! Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Золотое сечение — соотношение двух величин, гармоническая пропорция. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Программировать не настолько сложно, как об этом говорят. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Он написал больше 30 хитов. Вкуснейшая домашняя пицца на тонком бездрожжевом тесте. Готовится тесто для пиццы без дрожжей очень быстро.`,
    date: Date.now(),
    categories: [`Программирование`],
    comments: [
      {
        user: `petrov@example.com`,
        text: `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-)`,
      },
      {
        user: `ivanov@example.com`,
        text: `Плюсую, но слишком много буквы!`,
      },
      {
        user: `petrov@example.com`,
        text: `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Это где ж такие красоты? Планируете записать видосик на эту тему?`,
      },
      {
        user: `ivanov@example.com`,
        text: `Совсем немного... Планируете записать видосик на эту тему? Согласен с автором!`,
      },
    ],
  },
  {
    user: `ivanov@example.com`,
    title: `Учим HTML и CSS`,
    announce:
      `Как начать действовать? Для начала просто соберитесь. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Ёлки — это не просто красивое дерево. Это прочная древесина.`,
    fullText:
      `Ёлки — это не просто красивое дерево. Это прочная древесина. Как начать действовать? Для начала просто соберитесь. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? У нас есть лайфхак для тех, кто любит отдыхать на свежем воздухе! Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Согласно официальной версии, принятой в настоящее время, город был основан более 1000 лет назад. Программировать не настолько сложно, как об этом говорят. Золотое сечение — соотношение двух величин, гармоническая пропорция. Он написал больше 30 хитов. Из под его пера вышло 8 платиновых альбомов. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    date: Date.now(),
    categories: [`За жизнь`],
    comments: [
      {
        user: `petrov@example.com`,
        text: `Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Хочу такую же футболку :-)`,
      },
      {
        user: `ivanov@example.com`,
        text: `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного... Планируете записать видосик на эту тему?`,
      },
      {
        user: `petrov@example.com`,
        text: `Плюсую, но слишком много буквы! Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
      },
    ],
  },
];

module.exports = {
  mockData,
  mockCategories,
  mockUsers
};
