const input = document.getElementById('Input');
const buttonOk = document.getElementById('ButtonOk');

// Функция нахождения всех возможных ходов конём
function horseSteps(value) {
  const chessboard = [
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
    ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
    ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
    ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
  ];
  let x; let y;
  let result = '';

  // ищем индексы исходного положения на шахматной доске
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      if (chessboard[i][j] === value) {
        x = j; y = i;
        break;
      }
    }
  }

  const topLeft = (y - 2) >= 0 && (x - 1) >= 0;
  const topRight = (y - 2) >= 0 && (x + 1) <= 7;

  const leftTop = (x - 2) >= 0 && (y - 1) >= 0;
  const leftBottom = (x - 2) >= 0 && (y + 1) <= 7;

  const rightTop = (x + 2) <= 7 && (y - 1) >= 0;
  const rightBottom = (x + 2) <= 7 && (y + 1) <= 7;

  const bottomLeft = (y + 2) <= 7 && (x - 1) >= 0;
  const bottomRight = (y + 2) <= 7 && (x + 1) <= 7;

  if (topLeft) result += `${chessboard[y - 2][x - 1]} `;
  if (topRight) result += `${chessboard[y - 2][x + 1]} `;

  if (rightTop) result += `${chessboard[y - 1][x + 2]} `;
  if (rightBottom) result += `${chessboard[y + 1][x + 2]} `;

  if (bottomRight) result += `${chessboard[y + 2][x + 1]} `;
  if (bottomLeft) result += `${chessboard[y + 2][x - 1]} `;

  if (leftTop) result += `${chessboard[y - 1][x - 2]} `;
  if (leftBottom) result += `${chessboard[y + 1][x - 2]} `;

  return result;
}

// Функция-обработчик события клика на кнопку
function clickHandler() {
  const valueInput = input.value;
  const result = horseSteps(valueInput);

  alert(`Возможные варианты хода:\n\n${result}`);
}

// Добавляем обработчик события вызванного на клик по кнопке
buttonOk.addEventListener('click', clickHandler);
