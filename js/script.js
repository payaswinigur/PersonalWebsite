window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollProgress = Math.min(
    Math.pow(scrollTop / docHeight, 0.9),
    1
  );

  document.documentElement.style.setProperty(
    "--darkness",
    scrollProgress
  );
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollProgress = Math.min(
    Math.pow(scrollTop / docHeight, 0.15),
    1
  );

  document.documentElement.style.setProperty(
    "--darkness",
    scrollProgress
  );
});

