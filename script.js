
function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".sidebar li");

  lines.forEach(line => {
    const spans = line.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${0.5+ i * 0.08}s`; 
    });
  });
});

document.querySelectorAll('.waah').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.remove('hover-out');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.add('hover-out'); 
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".about h1");

  lines.forEach(line => {
    const spans = line.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${0.2 +i * 0.08}s`; 
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".about2 h3");

  lines.forEach(line => {
    const spans = line.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${i * 0.03}s`; 
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".card h3");

  lines.forEach(line => {
    const spans = line.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${i * 0.03}s`; 
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".card-info h3");

  lines.forEach(line => {
    const spans = line.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.animationDelay = `${i * 0.03}s`; 
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    " .div3 p, .div4 p,.div2 p, .about2 h3, .aboutbtnp"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.3 });

  targets.forEach(el => {
    el.classList.add("animate-underline");
    observer.observe(el);
  });
});

   window.addEventListener('load', () => {
      const entry = document.getElementById('page-entry-transition');


      setTimeout(() => {
        entry.classList.add('fade-out');
      }, 100);

      setTimeout(() => {
        entry.style.display = 'none';
      }, 100);
    });

document.addEventListener("DOMContentLoaded", () => {
  const transitionEl = document.getElementById("page-exit-transition");

  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        transitionEl.classList.add("active");

        setTimeout(() => {
          window.location.href = link.href;
        }, 800);
      });
    }
  });

  window.addEventListener("beforeunload", () => {
    transitionEl.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll("span");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 } 
  );

  letters.forEach((letter) => observer.observe(letter));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fadein");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
});
