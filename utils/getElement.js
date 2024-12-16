const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("...");
};

// default 내보내기
export default getElement;
