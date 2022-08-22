import { animateScroll } from "./animateScroll";

export const scrollToId = (id, duration = 3000) => {
  const initialPosition = window.scrollY;

  const element = document.getElementById(id);

  animateScroll({
    targetPosition: element.offsetTop,
    initialPosition,
    duration,
  });
};
