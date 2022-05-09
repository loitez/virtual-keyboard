const body = document.querySelector('body');

let isCapsLock = localStorage.getItem('isCapsLock');

// fill body

body.innerHTML = `
<div class="info">switch keyboard layout: left alt + left shift</div>
<div class="info-2">please make sure that your keyboard layout matches the virtual one</div>
<div id="container">
    <textarea id="write" rows="6" cols="60"></textarea>
    <ul id="keyboard">
    </ul>
</div>
`;

const keyboard = document.querySelector('#keyboard');
const en = `
        <li class="symbol"><span class="off">\`</span><span class="on">~</span></li>
        <li class="symbol"><span class="off">1</span><span class="on">!</span></li>
        <li class="symbol"><span class="off">2</span><span class="on">@</span></li>
        <li class="symbol"><span class="off">3</span><span class="on">#</span></li>
        <li class="symbol"><span class="off">4</span><span class="on">$</span></li>
        <li class="symbol"><span class="off">5</span><span class="on">%</span></li>
        <li class="symbol"><span class="off">6</span><span class="on">^</span></li>
        <li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>
        <li class="symbol"><span class="off">8</span><span class="on">*</span></li>
        <li class="symbol"><span class="off">9</span><span class="on">(</span></li>
        <li class="symbol"><span class="off">0</span><span class="on">)</span></li>
        <li class="symbol"><span class="off">-</span><span class="on">_</span></li>
        <li class="symbol"><span class="off">=</span><span class="on">+</span></li>
        <li class="backspace last-item" data-name="Backspace">backspace</li>
        <li class="tab" data-name="Tab">tab</li>
        <li class="letter">q</li>
        <li class="letter">w</li>
        <li class="letter">e</li>
        <li class="letter">r</li>
        <li class="letter">t</li>
        <li class="letter">y</li>
        <li class="letter">u</li>
        <li class="letter">i</li>
        <li class="letter">o</li>
        <li class="letter">p</li>
        <li class="symbol"><span class="off">[</span><span class="on">{</span></li>
        <li class="symbol"><span class="off">]</span><span class="on">}</span></li>
        <li class="symbol"><span class="off">\\</span><span class="on">|</span></li>
        <li class="delete last-item" data-name="Delete">del</li>
        <li class="capslock" data-name="Caps Lock">caps lock</li>
        <li class="letter">a</li>
        <li class="letter">s</li>
        <li class="letter">d</li>
        <li class="letter">f</li>
        <li class="letter">g</li>
        <li class="letter">h</li>
        <li class="letter">j</li>
        <li class="letter">k</li>
        <li class="letter">l</li>
        <li class="symbol"><span class="off">;</span><span class="on">:</span></li>
        <li class="symbol"><span class="off">'</span><span class="on">&quot;</span></li>
        <li class="enter last-item" data-name="Enter">enter</li>
        <li class="left-shift" data-name="ShiftLeft">shift</li>
        <li class="letter">z</li>
        <li class="letter">x</li>
        <li class="letter">c</li>
        <li class="letter">v</li>
        <li class="letter">b</li>
        <li class="letter">n</li>
        <li class="letter">m</li>
        <li class="symbol"><span class="off">,</span><span class="on">&lt;</span></li>
        <li class="symbol"><span class="off">.</span><span class="on">&gt;</span></li>
        <li class="symbol"><span class="off">/</span><span class="on">?</span></li>
        <li class="arrow up-arrow" data-name="ArrowUp">↑</li>
        <li class="right-shift last-item" data-name="ShiftRight">shift</li>
        <li class="left-control" data-name="ControlLeft">ctrl</li>
        <li class="win" data-name="Meta">win</li>
        <li class="left-alt" data-name="AltLeft">alt</li>
        <li class="space" data-name="Space">&nbsp;</li>
        <li class="right-alt" data-name="AltRight">alt</li>
        <li class="right-control" data-name="ControlRight">ctrl</li>
        <li class="arrow left-arrow" data-name="ArrowLeft">←</li>
        <li class="arrow down-arrow" data-name="ArrowDown">↓</li>
        <li class="arrow right-arrow last-item" data-name="ArrowRight">→</li>
`;

const ru = `
        <li class="letter">ё</li>
        <li class="symbol"><span class="off">1</span><span class="on">!</span></li>
        <li class="symbol"><span class="off">2</span><span class="on">"</span></li>
        <li class="symbol"><span class="off">3</span><span class="on">№</span></li>
        <li class="symbol"><span class="off">4</span><span class="on">;</span></li>
        <li class="symbol"><span class="off">5</span><span class="on">%</span></li>
        <li class="symbol"><span class="off">6</span><span class="on">:</span></li>
        <li class="symbol"><span class="off">7</span><span class="on">?</span></li>
        <li class="symbol"><span class="off">8</span><span class="on">*</span></li>
        <li class="symbol"><span class="off">9</span><span class="on">(</span></li>
        <li class="symbol"><span class="off">0</span><span class="on">)</span></li>
        <li class="symbol"><span class="off">-</span><span class="on">_</span></li>
        <li class="symbol"><span class="off">=</span><span class="on">+</span></li>
        <li class="backspace last-item" data-name="Backspace">backspace</li>
        <li class="tab" data-name="Tab">tab</li>
        <li class="letter">й</li>
        <li class="letter">ц</li>
        <li class="letter">у</li>
        <li class="letter">к</li>
        <li class="letter">е</li>
        <li class="letter">н</li>
        <li class="letter">г</li>
        <li class="letter">ш</li>
        <li class="letter">щ</li>
        <li class="letter">з</li>
        <li class="letter">х</li>
        <li class="letter">ъ</li>
        <li class="symbol"><span class="off">\\</span><span class="on">|</span></li>
        <li class="delete last-item" data-name="Delete">del</li>
        <li class="capslock" data-name="Caps Lock">caps lock</li>
        <li class="letter">ф</li>
        <li class="letter">ы</li>
        <li class="letter">в</li>
        <li class="letter">а</li>
        <li class="letter">п</li>
        <li class="letter">р</li>
        <li class="letter">о</li>
        <li class="letter">л</li>
        <li class="letter">д</li>
        <li class="letter">ж</li>
        <li class="letter">э</li>
        <li class="enter last-item" data-name="Enter">enter</li>
        <li class="left-shift" data-name="ShiftLeft">shift</li>
        <li class="letter">я</li>
        <li class="letter">ч</li>
        <li class="letter">с</li>
        <li class="letter">м</li>
        <li class="letter">и</li>
        <li class="letter">т</li>
        <li class="letter">ь</li>
        <li class="letter">б</li>
        <li class="letter">ю</li>
        <li class="letter">.</li>
        <li class="arrow up-arrow" data-name="ArrowUp">↑</li>
        <li class="right-shift last-item" data-name="ShiftRight">shift</li>
        <li class="left-control" data-name="ControlLeft">ctrl</li>
        <li class="win" data-name="Meta">win</li>
        <li class="left-alt" data-name="AltLeft">alt</li>
        <li class="space" data-name="Space">&nbsp;</li>
        <li class="right-alt" data-name="AltRight">alt</li>
        <li class="right-control" data-name="ControlRight">ctrl</li>
        <li class="arrow left-arrow" data-name="ArrowLeft">←</li>
        <li class="arrow down-arrow" data-name="ArrowDown">↓</li>
        <li class="arrow right-arrow last-item" data-name="ArrowRight">→</li>
`;

if (localStorage.language === 'en') {
    keyboard.innerHTML = `
    ${en}
    `;
} else if (localStorage.language === 'ru') {
    keyboard.innerHTML = `
    ${ru}
    `;
}

const textArea = document.querySelector('#write');

const deleteByDel = () => {
    textArea.textContent = textArea.textContent.substring(0, textArea.selectionStart)
        + textArea.textContent.substring(textArea.selectionEnd + 1);
};

// click

let keys = document.querySelectorAll('li');
const caps = document.querySelector('.capslock');

// toggle text

const toggleTextContent = (item) => {
    if (item.textContent === item.textContent.toUpperCase()) {
        item.textContent = item.textContent.toLowerCase();
    } else {
        item.textContent = item.textContent.toUpperCase();
    }
};
// highlight
const check = (location) => {
    if (event.code.includes(location)) {
        let eventKey;
        if (event.key.includes('Arrow')) {
            eventKey = String(event.key).slice(0, 5).toLowerCase();
        } else {
            eventKey = String(event.key).toLowerCase(); // name of the key
        }
        const selector = String(location).toLowerCase(); // left/right/down/up
        const clicked = document.querySelector(`.${selector}-${eventKey}`);
        clicked.classList.add('active');
        return true;
    }
    return false;
};
let keyAlt = false;
let keyShift = false;

document.addEventListener('keydown', (event) => {
    keys.forEach((item) => {
        if (event.code === item.dataset.name) {
            if (!check('Left') || !check('Right') || !check('Up') || !check('Down')) {
                item.classList.add('active');
            }
        } else if (event.key === item.textContent || event.key === item.dataset.name) {
            item.classList.add('active');
        } else if (item.textContent.includes(event.key)) {
            if (item.classList.contains('symbol')) {
                item.classList.add('active');
            }
        }
    });

    // backspace
    if (event.key === 'Backspace') {
        textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length - 1);
    }
    // enter
    if (event.key === 'Enter') {
        textArea.textContent += '\n';
    }

    // caps
    if (event.getModifierState('CapsLock')) {
        if (event.code.includes('Key')) {
            textArea.textContent += event.key.toUpperCase();
            return;
        }
    }
    if (event.code === 'CapsLock') {
        if (isCapsLock === true) {
            caps.classList.remove('active');
            isCapsLock = false;
        } else {
            caps.classList.add('active');
            isCapsLock = true;
        }
        // caps.classList.toggle('active')
        keys.forEach((item) => {
            if (item.classList.contains('letter')) {
                toggleTextContent(item);
            }
        });
    }

    // alt
    if (event.key === 'Alt') {
        event.preventDefault();
    }

    // tab
    if (event.code === 'Tab') {
        event.preventDefault();
        textArea.textContent += '\t';
    }

    // space
    if (event.code === 'Space') {
        textArea.textContent += ' ';
    }

    // delete
    if (event.code === 'NumpadDecimal') {
        deleteByDel();
    }

    // раскладка
    if (event.code === 'AltLeft') {
        keyAlt = true;
        event.preventDefault();
    } else if (event.code === 'ShiftLeft') {
        keyShift = true;
        event.preventDefault();
    }
    if (keyAlt && keyShift) {
        // смена
        if (localStorage.language === 'ru') {
            keyboard.innerHTML = en;
            localStorage.language = 'en';
            localStorage.setItem('language', 'en');
            localStorage.setItem('isCapsLock', isCapsLock);
            keys = document.querySelectorAll('li');
            clickOnVirtual();
        } else if (localStorage.language === 'en') {
            keyboard.innerHTML = ru;
            localStorage.language = 'ru';
            localStorage.setItem('language', 'ru');
            localStorage.setItem('isCapsLock', isCapsLock);
            keys = document.querySelectorAll('li');
            clickOnVirtual();
        }
    }

    // shift и заполнение textArea
    // textArea.textContent = sessionStorage.text
    if (event.shiftKey) {
        keys.forEach((item) => {
            /* if (!isShift) {
                      if (item.classList.contains('letter')) {
                          toggleTextContent(item)
                          return
                      }
                  } */
            if (event.key.toLowerCase() === item.textContent || item.textContent.includes(event.key)) {
                if (item.classList.contains('letter')) {
                    textArea.textContent += event.key.toUpperCase();
                } else if (item.classList.contains('symbol')) {
                    const element = item.querySelector('span:last-of-type');
                    textArea.textContent += element.textContent;
                }
            }
        });
    } else {
        keys.forEach((item) => {
            if (event.key === item.textContent || item.textContent.includes(event.key)) {
                if (item.classList.contains('symbol') || item.classList.contains('letter')) {
                    textArea.textContent += event.key;
                }
            }
        });
    }

    // sessionStorage.text = textArea.textContent

    // arrows
    if (event.code.includes('Arrow')) {
        keys.forEach((item) => {
            if (item.dataset.name === event.code) {
                textArea.textContent += item.textContent;
            }
        });
    }
});

// remove highlighting
document.addEventListener('keyup', (event) => {
    keyAlt = false;
    keyShift = false;
    keys.forEach((item) => {
        if (!item.classList.contains('capslock') && event.key !== 'Shift') {
            item.classList.remove('active');
        }
    });
    /* if (event.key === 'Shift') {
          keys.forEach((item) => {
              if (item.classList.contains('letter')) {
                  toggleTextContent(item)
              }
          })
          isShift = false;
      } */
});

// key on virtual keyboard
clickOnVirtual();

function clickOnVirtual() {
    keys.forEach((item) => {
        item.addEventListener('click', (event) => {
            // highlighting
            if (!item.classList.contains('capslock')) {
                item.classList.add('active');
                setTimeout(() => {
                    item.classList.remove('active');
                }, 100);
            }
            // caps
            isCapsLock = localStorage.getItem('isCapsLock');
            if (item.classList.contains('capslock')) {
                if (isCapsLock === true) {
                    isCapsLock = false;
                    caps.classList.remove('active');
                } else {
                    caps.classList.add('active');
                    isCapsLock = true;
                }
                // item.classList.toggle('active')
                keys.forEach((element) => {
                    if (element.classList.contains('letter')) {
                        toggleTextContent(element);
                    }
                });
            }
            // заполнение text area
            if (item.classList.contains('letter')) {
                textArea.textContent += item.textContent;
            } else if (item.classList.contains('symbol')) {
                textArea.textContent += item.textContent.substr(0, 1);
            }
            // backspace
            if (item.classList.contains('backspace')) {
                textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length - 1);
            }
            // enter
            if (item.classList.contains('enter')) {
                textArea.textContent += '\n';
            }
            // space
            if (item.classList.contains('space')) {
                textArea.textContent += ' ';
            }
            // tab
            if (item.classList.contains('tab')) {
                event.preventDefault();
                textArea.textContent += '\t';
            }
            // delete
            if (item.classList.contains('delete')) {
                deleteByDel();
            }
        });
    });
}

// курсор убегает после бэкспейс
// textarea.setSelectionRange(cursorStart, cursorEnd)
