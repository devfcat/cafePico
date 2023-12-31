const cursor = document.querySelector(".customCursor");
const moveCursor = (event) => {
  const { clientX: x, clientY: y } = event;
  cursor.style.transform = `translate3d(${x + 2}px, ${y}px, 0)`;
};

document.addEventListener("mousemove", moveCursor);
