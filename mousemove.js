const cursor = document.querySelector(".customCursor");
const moveCursor = (event) => {
  const { clientX: x, clientY: y } = event;
  cursor.style.transform = `translate3d(${x}px, ${y + 5}px, 0)`;
};

document.addEventListener("mousemove", moveCursor);
