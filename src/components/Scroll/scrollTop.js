export const scrollTop = () => {
  setTimeout(
    () =>
      window.scrollTo({
        top: window.pageYOffset + document.documentElement.clientHeight,
        behavior: "smooth",
        block: "end",
      }),
    1000
  );
};
