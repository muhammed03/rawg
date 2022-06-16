import { gridColumns, size } from '../components/styles/custom.styled';

function getColumnCount(deviceWidth) {
  let columnCount;

  if (deviceWidth < size.tablet) {
    columnCount = gridColumns.mobile;
  } else if (deviceWidth >= size.tablet && deviceWidth < size.laptop) {
    columnCount = gridColumns.tablet;
  } else if (deviceWidth >= size.laptop && deviceWidth < size.laptopL) {
    columnCount = gridColumns.laptop;
  } else {
    columnCount = gridColumns.laptopL;
  }

  return columnCount;
}

function splitArrayIntoChunksOfLen(arr, len, columnCount) {
  let chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  if (chunks.length > columnCount) {
    const lastChunk = chunks.slice(-1)[0];
    chunks.pop();
    for (let chunk of lastChunk) {
      let index = 0;
      chunks[index].push(chunk);
      index++;
    }
  }

  return chunks;
}

function getDeviceWidth(windowWidth, screenWidth) {
  return windowWidth > 0 ? windowWidth : screenWidth;
}

export { getColumnCount, splitArrayIntoChunksOfLen, getDeviceWidth };
