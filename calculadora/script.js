function insert(num) {
    document.form.viewCalc.value = document.form.viewCalc.value + num
}

function equal() {
    exp = document.form.viewCalc.value
    if (exp) {
        document.form.viewCalc.value = eval(exp)
    }
}

function clearAll() {
    document.form.viewCalc.value = "";
}

function back() {
    let exp = document.form.viewCalc.value
    document.form.viewCalc.value = exp.substring(0, exp.length - 1)
}