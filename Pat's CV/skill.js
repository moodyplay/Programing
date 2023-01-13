$(document).ready(() => {
    // Dot Counter
  
    let n = 1;
  
    $("div", ".skill-level").each((i, element) => {
      let hasClass = element.classList.contains("fill");
      if (hasClass) {
        element.classList.add("l" + n, "fadeIn");
      } else {
        element.classList.add("fadeIn");
      }
  
      // Increase counter by 1 if less than 5 & current has fill class.
  
      n = n < 5 && hasClass ? n + 1 : 1;
    });
  });
  