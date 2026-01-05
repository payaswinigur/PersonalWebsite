document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const darkness = Math.min(scrollTop / docHeight, 1);

    document.body.style.setProperty("--darkness", darkness);
  });
  