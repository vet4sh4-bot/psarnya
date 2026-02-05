const buttons = document.querySelectorAll(".menu-btn");
let awakened = false;

// Появление кнопок по одной
buttons.forEach((btn, index) => {
  setTimeout(() => {
    btn.classList.add("show");
  }, 800 + index * 700);
});

// Логика кликов
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    // Если не "Очнуться" — ничего не происходит
    if (!awakened && index !== 0) {
      return;
    }

    // "Очнуться" — первая сцена
    if (index === 0) {
      awakened = true;
      console.log("Старт первой сцены");
      // здесь позже будет переход
    }

  });
});
