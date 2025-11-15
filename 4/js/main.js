// Исходные данные
const DESCRIPTIONS = [
  'Закат над морем.',
  'Мой лучший день!',
  'Случайное фото :)',
  'Красота природы.',
  'Поймал классный момент!',
  'Любимый кадр.',
  'Жизнь прекрасна!',
  'Настроение — супер!',
  'Удачный ракурс.',
  'Моя путешествие продолжается.',
];

const COMMENT_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAMES = [
  'Артём',
  'Марина',
  'Сергей',
  'Кира',
  'Елена',
  'Юрий',
  'Оля',
  'Максим',
];

const PHOTO_COUNT = 25;


// Вспомогательные функции
// Случайное целое число от a до b включительно
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Случайный элемент массива
const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Генераторы комментариев
// Генерация текста комментария из 1 или 2 предложений
const createCommentMessage = () => {
  const sentenceCount = getRandomInteger(1, 2);
  const message = [];
  for (let i = 0; i < sentenceCount; i++) {
    message.push(getRandomArrayElement(COMMENT_SENTENCES));
  }
  return message.join(' ');
};

// Генератор уникальных ID через замыкание
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateCommentId = createIdGenerator();

// Создание одного комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createCommentMessage(),
  name: getRandomArrayElement(COMMENT_NAMES),
});

// Создание массива комментариев для фото
const createComments = () =>
  Array.from({ length: getRandomInteger(0, 30) }, createComment);


// Генератор описания фотографии

const createPhoto = (_, index) => {
  const id = index + 1; // уникальный ID 1–25

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComments(),
  };
};

// Итог: массив из 25 фото
//const photos = Array.from({ length: PHOTO_COUNT }, createPhoto);
Array.from({ length: PHOTO_COUNT }, createPhoto);
// console.log(photos);
