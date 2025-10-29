const indicator = document.querySelector('.indicators'),
  electronConfig = document.querySelector('electron-config'),
  hydrocarbon = document.querySelector('.hydrocarbons'),
  alkaline = document.querySelector('.alkalines'),
  solubility = document.querySelector('.solubility');

const indicatorBtn = document.getElementById('indicator'),
  electronConfigBtn = document.getElementById('electron-configuration'),
  hydroCarbonBtn = document.getElementById('hydrocarbon'),
  alkalineBtn = document.getElementById('alkaline'),
  solubilityBtn = document.getElementById('solubility');
const title = document.getElementById('title');

solubilityBtn.addEventListener('click', () => {
  title.textContent = 'Solubility Table';
  document.body.classList.remove('show-electron-configuration');
  document.body.classList.remove('show-hydrocarbon');
  document.body.classList.remove('show-alkaline');
  document.body.classList.remove('show-indicator');
  document.body.classList.add('show-solubility');
});

indicatorBtn.addEventListener('click', () => {
  title.textContent = 'Indicators';
  document.body.classList.remove('show-solubility');
  document.body.classList.remove('show-electron-configuration');
  document.body.classList.remove('show-hydrocarbon');
  document.body.classList.remove('show-alkaline');
  document.body.classList.add('show-indicator');
});

electronConfigBtn.addEventListener('click', () => {
  title.textContent = 'Electron Configuration';
  document.body.classList.remove('show-solubility');
  document.body.classList.remove('show-indicator');
  document.body.classList.remove('show-hydrocarbon');
  document.body.classList.remove('show-alkaline');
  document.body.classList.add('show-electron-configuration');
});

hydroCarbonBtn.addEventListener('click', () => {
  title.textContent = 'Hydrocarbons';
  document.body.classList.remove('show-solubility');
  document.body.classList.remove('show-indicator');
  document.body.classList.remove('show-electron-configuration');
  document.body.classList.remove('show-alkaline');
  document.body.classList.add('show-hydrocarbon');
});

alkalineBtn.addEventListener('click', () => {
  title.textContent = 'Properties of Alkalines';
  document.body.classList.remove('show-solubility');
  document.body.classList.remove('show-electron-configuration');
  document.body.classList.remove('show-hydrocarbon');
  document.body.classList.remove('show-indicator');
  document.body.classList.add('show-alkaline');
});

const litmus = document.querySelector('.litmus'),
  pheno = document.querySelector('.pheno'),
  methyl = document.querySelector('.methyl'),
  universal = document.querySelector('.universal');

litmus.style.display = 'inline-block';
indicator.style.background =
  'linear-gradient(45deg, dodgerblue, var(--body-color), var(--body-color), var(--body-color), dodgerblue';
document.querySelector('.litmus-btn').onclick = () => {
  pheno.style.display = 'none';
  methyl.style.display = 'none';
  universal.style.display = 'none';
  litmus.style.display = 'inline-block';
  indicator.style.background =
    'linear-gradient(45deg, dodgerblue, var(--body-color), var(--body-color), var(--body-color), dodgerblue';
};
document.querySelector('.pheno-btn').onclick = () => {
  litmus.style.display = 'none';
  methyl.style.display = 'none';
  universal.style.display = 'none';
  pheno.style.display = 'inline-block';
  indicator.style.background =
    'linear-gradient(45deg, yellow, var(--body-color), var(--body-color), var(--body-color), yellow';
};
document.querySelector('.methyl-btn').onclick = () => {
  litmus.style.display = 'none';
  pheno.style.display = 'none';
  universal.style.display = 'none';
  methyl.style.display = 'inline-block';
  indicator.style.background =
    'linear-gradient(45deg, tomato, var(--body-color), var(--body-color), var(--body-color), tomato';
};
document.querySelector('.universal-btn').onclick = () => {
  litmus.style.display = 'none';
  pheno.style.display = 'none';
  methyl.style.display = 'none';
  universal.style.display = 'inline-block';
  indicator.style.background =
    'linear-gradient(45deg, rgb(30, 230, 144), var(--body-color), var(--body-color), var(--body-color), rgb(30, 230, 144)';
};

let all = document.querySelectorAll('.solubility .box'),
  solubles = document.querySelectorAll('.solubility .s'),
  insolubles = document.querySelectorAll('.solubility .i'),
  semiSolubles = document.querySelectorAll('.solubility .si'),
  decomposeByWater = document.querySelectorAll('.solubility .dw');

solubles.forEach((soluble) => {
  soluble.setAttribute('title', 'Soluble');
  soluble.textContent = 'S';
});
insolubles.forEach((insoluble) => {
  insoluble.setAttribute('title', 'Insoluble');
  insoluble.textContent = 'I';
});
semiSolubles.forEach((semiSoluble) => {
  semiSoluble.setAttribute('title', 'Slightly Soluble');
  semiSoluble.textContent = 'S';
});
decomposeByWater.forEach((waterDecomposed) => {
  waterDecomposed.setAttribute('title', 'Decomposed by water');
  waterDecomposed.textContent = '-';
});

solubility.addEventListener('click', (e) => {
  if (e.target.classList.contains('solubility')) {
    all.forEach((box) => {
      box.style.opacity = '1';
    });
  } else {
    solubles.forEach((soluble) => {
      soluble.addEventListener('click', () => {
        all.forEach((box) => {
          box.style.opacity = '0.375';
        });
        solubles.forEach((soluble) => {
          soluble.style.opacity = '1';
        });
      });
    });
    semiSolubles.forEach((semiSoluble) => {
      semiSoluble.addEventListener('click', () => {
        all.forEach((box) => {
          box.style.opacity = '0.375';
        });
        semiSolubles.forEach((semiSoluble) => {
          semiSoluble.style.opacity = '1';
        });
      });
    });
    insolubles.forEach((insoluble) => {
      insoluble.addEventListener('click', () => {
        all.forEach((box) => {
          box.style.opacity = '0.375';
        });
        insolubles.forEach((soluble) => {
          soluble.style.opacity = '1';
        });
      });
    });
    decomposeByWater.forEach((waterDecomposed) => {
      waterDecomposed.addEventListener('click', () => {
        all.forEach((box) => {
          box.style.opacity = '0.375';
        });
        decomposeByWater.forEach((soluble) => {
          soluble.style.opacity = '1';
        });
      });
    });
    document.getElementById('all').onclick = () => {
      all.forEach((box) => {
        box.style.opacity = '1';
      });
    };
  }
});
