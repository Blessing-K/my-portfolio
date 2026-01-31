export function initScrollReveal() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  const revealed = new Set();

  const parseDelay = (value) => {
    if (!value) return 0;
    value = value.trim();
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 0;
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          if (revealed.has(el)) return;
          const style = getComputedStyle(el);
          const delay = parseDelay(style.getPropertyValue("--delay"));
          setTimeout(() => el.classList.add("active"), delay);
          revealed.add(el);
        }
      });
    },
    { threshold: 0.12 },
  );

  const els = document.querySelectorAll(".reveal");
  els.forEach((el) => io.observe(el));

  return () => {
    els.forEach((el) => io.unobserve(el));
    io.disconnect();
  };
}
