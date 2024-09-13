export function checkScreenSize() {
  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    return "tablet";
  } else if (window.innerWidth >= 1366) {
    return "desktop";
  }

  return "mobile";
}

export function handleScreenResize(setScreenSize) {
  const updateScreenSize = () => {
    setScreenSize(checkScreenSize());
  };

  window.addEventListener("resize", updateScreenSize);

  return () => {
    window.removeEventListener("resize", updateScreenSize);
  };
}
