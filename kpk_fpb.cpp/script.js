function fpb(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function kpk(a, b) {
    return Math.abs(a * b) / fpb(a, b);
}

function calculate() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    if (num1 <= 0 || num2 <= 0) {
        alert("Masukkan bilangan positif.");
        return;
    }

    const hasil_fpb = fpb(num1, num2);
    const hasil_kpk = kpk(num1, num2);

    document.getElementById("result").innerHTML = 
        `FPB dari ${num1} dan ${num2} adalah: ${hasil_fpb} <br>` +
        `KPK dari ${num1} dan ${num2} adalah: ${hasil_kpk}`;
}
