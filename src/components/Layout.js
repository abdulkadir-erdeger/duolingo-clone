import { move } from "react-native-redash";

export const MARGIN_TOP = 150;
export const MARGIN_LEFT = 32;
export const NUMBER_OF_LINES = 3;
export const WORD_HEIGHT = 55;
export const SENTENCE_HEIGHT = (NUMBER_OF_LINES - 1) * WORD_HEIGHT;

const isNotInBank = (offset) => {
  "worklet";
  return offset.order.value !== -1;
};

const byOrder = (a, b) => {
  "worklet";
  return a.order.value > b.order.value ? 1 : -1;
};

export const lastOrder = (input) => {
  "worklet";
  return input.filter(isNotInBank).length;
};

export const remove = (input, index) => {
  "worklet";
  const offsets = input
    .filter((_, i) => i !== index)
    .filter(isNotInBank)
    .sort(byOrder);
  offsets.map((offset, i) => (offset.order.value = i));
};

export const reorder = (input, from, to) => {
  "worklet";
  const offsets = input.filter(isNotInBank).sort(byOrder);
  const newOffset = move(offsets, from, to);
  newOffset.map((offset, index) => (offset.order.value = index));
};

export const calculateLayout = (input, containerWidth) => {
  "worklet";
  const offsets = input.filter(isNotInBank).sort(byOrder);
  if (offsets.length === 0) {
    return;
  }
  let lineNumber = 0;
  let lineBreak = 0;
  offsets.forEach((offset, index) => {
    const total = offsets
      .slice(lineBreak, index)
      .reduce((acc, o) => acc + o.width.value, 0);
    if (total + offset.width.value > containerWidth) {
      lineNumber += 1;
      lineBreak = index;
      offset.x.value = 0;
    } else {
      offset.x.value = total;
    }
    offset.y.value = WORD_HEIGHT * lineNumber;
  });
};
