window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollProgress = Math.min(
    Math.pow(scrollTop / docHeight, 1.3),
    1
  );

  document.documentElement.style.setProperty(
    "--darkness",
    scrollProgress
  );
});
