const pass = "coder";
let passOk = false;

function execCalc() {
    const valorUSD = 277;
    const valorEUR = 280;
    let resultCalc;
    let divisaSel;

    pesos = prompt("Ingresá la cantidad de pesos que querés vender:");
    pesos = parseFloat(pesos);
    console.log("pesos: " + pesos);

    while (isNaN(pesos) || pesos == 0) {
        while (isNaN(pesos)) {
            pesos = prompt("Error. Ingresá un número válido:");
            pesos = parseFloat(pesos);
        }
        while (pesos == 0) {
            pesos = prompt("Ingresá un valor mayor que 0:");
            pesos = parseFloat(pesos);
        }
    }

    divisa = prompt("Que divisa querés calcular?:");
    switch (divisa) {
        case "dolar":
        case "Dolar":
        case "dolares":
        case "Dolares":
        case "dólares":
        case "Dólares":
            divisaSel = "dólares";
            resultCalc = pesos / valorUSD;
            break;
        case "euro":
        case "Euro":
        case "euros":
        case "Euros":
            divisaSel = "euros";
            resultCalc = pesos / valorEUR;
            break;
        default:
            alert("No tengo info sobre esa divisa por el momento.");
            return;
    }

    alert("Con " + pesos + " pesos podés comprar " + resultCalc.toFixed(2) + " " + divisaSel);
    return;
}

for (i = 3; i >= 1; i--) {
    userInput = prompt("Hola! Ingresá el password para ejecutar la calculadora:");
    if (pass != userInput) {
        if (i == 1) {
            break;
        }
        alert("Contraseña incorrecta, te quedan " + (i - 1) + " intentos mas");
    } else {
        passOk = true;
        break;
    }
}

if (passOk) {
    alert("Bievenido/a!");
    execCalc();
} else {
    alert("Acceso bloqueado. Intentá mas tarde.");
}
