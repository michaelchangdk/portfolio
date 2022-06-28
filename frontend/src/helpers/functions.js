// Used in featured projects
export const tagsFeaturing = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      string += ` & ${array[i]}`;
    } else if (i === array.length - 2) {
      string += `${array[i]}`;
    } else if (i !== array.length - 1 && i !== 0) {
      string += `${array[i]}, `;
    } else if (i === 0) {
      string += `${array[i]} feat. `;
    }
  }
  return string;
};
