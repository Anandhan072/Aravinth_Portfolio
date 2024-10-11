import logo from "./skills_icons.svg";
import fiserv from "../img/fiserv.svg";
import iEngineering from "../img/iEngineering.svg";

/// My log animi function

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const atagEl = document.querySelector(".atag");
const skills_iconEl = document.querySelector(".skills_icon");
const portfoliosEl = document.querySelector(".portfolios_bio");
const AddWorkEx = document.querySelector(".work_ex");
const allShowEx = document.querySelector(".portfolios_bio");
const closEx = document.querySelector(".ex_close");

let skillsEl = "";
let percentage = 0;
let offsetValue = 0;

const dasharraySett = function (val) {
  const value = offsetValue - (offsetValue / 100) * val;
  atagEl.style.strokeDashoffset = value;
};

const intersection = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        percentage = 0;
        offsetValue = Number.parseFloat(window.getComputedStyle(entry.target).strokeDasharray);

        const clearInt = setInterval(() => {
          if (percentage >= 100) {
            clearInterval(clearInt);
          } else {
            percentage++;
            dasharraySett(percentage);
          }
        }, 40);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

intersection.observe(atagEl);

/// My log animi function

///skills add html tag

/*
                        
<use href="./img/skils_icons.svg#icon-${icons}"></use> 

                    */

const skillsIcon = [
  { language: "sql", name: "SQL", skill: "Intermediate", percentage: "60%" },
  { language: "powerbi", name: "PowerBI", skill: "Beginner", percentage: "50%" },
  { language: "powerauto", name: "Power Automate", skill: "Beginner", percentage: "35%" },
  { language: "html", name: "HTML", skill: "Intermediate", percentage: "60%" },
  { language: "css", name: "CSS", skill: "Beginner", percentage: "35%" },
];

const addSkillEl = function () {
  let htmlEl = ``;
  skillsIcon.forEach((icons) => {
    htmlEl += `<div class="skills skills-${icons.language}">
                <span class="skill-icon">
                    <svg width="80" height="80" fill="none">
                        <use href="${logo}#icon-${icons.language}"></use> 

                    </svg>
                  </span><br>
                  <span class="skill-name">${icons.name}</span>

                  <div class="skills-hover">
                  <p>${icons.skill}
                  </p>
                  <div>
                  <div class="skill-percentage" ;"></div>
                  </div>
                  </div>
              </div> `;
  });

  skills_iconEl.innerHTML = htmlEl;
  skillsEl = document.querySelectorAll(".skills");
};

addSkillEl();
skillsEl.forEach((acc, i) => {
  acc.addEventListener("mouseenter", function (a) {
    let closestSkills = a.target.closest(".skills");
    let skillPercentage = closestSkills.querySelector(".skill-percentage");
    skillPercentage.style.width = skillsIcon[i].percentage;
  });
});

skillsEl.forEach((acc, i) => {
  acc.addEventListener("mouseleave", function (a) {
    let closestSkills = a.target.closest(".skills");
    let skillPercentage = closestSkills.querySelector(".skill-percentage");
    skillPercentage.style.width = "0%";
  });
});

///skills add html tag

///portfolio add html

const portfolio_content = [
  `is the provider to consider if you are looking for a cleaning service...`,
  `Do you want a detailed recipe for cooking? Visit this link for more...`,
];

const portfolioHeadings = [`fiserv`, `iEngineering`];

const portfolio_img = [fiserv, iEngineering];

const exClass = ["ex_fiserv", "ex_iengineering"];

/* <div class="portfolios portfolios_trushine">
    <div class="portfolios_hover hover_trushine">
        <div class="portfolios_links">
            <h2>Atala</h2>
            <span>is the provider to consider if you are looking for a cleaning service....</span><br>
            <a href="./My Project/Zoho.com/zoho.html" target="_blank">See more &#8594;</a>
        </div>
     </div>
                           
</div> */

const addPortFolio = function () {
  let htmlEl = ``;

  portfolioHeadings.forEach((acc, i) => {
    const val = acc.toLocaleLowerCase().split(" ").join("");

    htmlEl += `<div class="portfolios portfolios_${val}">
        <div class="portfolios_hover hover_${val}">
            <div class="portfolios_links">
                <h2>${acc}</h2>
                <span>${portfolio_content[i]}</span><br>
                <button class="experience_aravinth" data-ex="${exClass[i]}">See more &#8594;</button>
            </div>
         </div>

    </div>`;
  });

  portfoliosEl.innerHTML = htmlEl;

  const portfolios_imgadd = document.querySelectorAll(`.portfolios`);
  const aravinth_Exe = document.querySelectorAll(".experience_aravinth");

  portfolios_imgadd.forEach((acc, i) => {
    acc.style.backgroundImage = `url(${portfolio_img[i]})`;
  });

  let exValue;
  aravinth_Exe.forEach((acc, i) => {
    acc.addEventListener("click", function (a) {
      a.preventDefault();
      console.log(a);
      allShowEx.style.display = "none";
      AddWorkEx.style.display = "block";
      exValue = document.querySelector(`.${a.target.dataset.ex}`);
      exValue.style.display = "block";
    });
  });
  closEx.addEventListener("click", function (a) {
    a.preventDefault();
    allShowEx.style.display = "flex";
    AddWorkEx.style.display = "none";
    exValue.style.display = "none";
  });
};

addPortFolio();
// experience find hight

const open_emialEl = document.querySelector(".open_emial");

open_emialEl.addEventListener("click", function (a) {
  a.preventDefault();

  const subject = "Discussing  opportunities";

  const body = "";
  const recipient = "aravintharish@gmail.com";

  // Redirecting to Gmail compose
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`
  );
});

const nav_linkEl = document.querySelector(".nav_link");

nav_linkEl.addEventListener("click", function (a) {
  a.preventDefault();
  if (!a.target.className.includes("alink")) return;
  const value = a.target.dataset.nav;
  const findView = document.getElementById(value);
  findView.scrollIntoView({ behavior: "smooth" });
});
