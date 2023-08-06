const output = document.querySelector("#value");
const decrBtn = document.querySelector('button[data-action="decrement"]')
const incrBtn = document.querySelector('button[data-action="increment"]')


let counterValue = 0;

incrBtn.addEventListener('click', onIncrBtnClick)
function onIncrBtnClick(event) {
    counterValue += 1;
    output.textContent = counterValue;
}

decrBtn.addEventListener('click', onDecrBtnClick)
function onDecrBtnClick(event) {
    counterValue -= 1;
    output.textContent = counterValue;
}






