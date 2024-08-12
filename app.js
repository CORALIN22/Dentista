const info = document.querySelector('.info');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
info.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other contents
    contents.forEach(function (content) {
      content.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});


//Make mobile navigation work
const btnNavEl=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");

btnNavEl.addEventListener('click',function(){
  headerEl.classList.toggle("nav-open");
});




/// Smooth scrolling animation
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } 

    // Close mobile naviagtion
    if (link.classList.contains("navlink"))
              headerEl.classList.toggle("nav-open");
          });
        });

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);