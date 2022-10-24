export function Calcular() {
  let weight = parseFloat(document.getElementById("weight").value);
  let hight = parseFloat(document.getElementById("hight").value);
  let form = document.getElementById("form");

  let spanWeight = document.getElementById("spanW");
  let spanHight = document.getElementById("spanH");
  let spanImc = document.getElementById("spanImc");

  spanWeight.innerHTML = weight;
  spanHight.innerHTML = hight.toFixed(2);

  let result = weight / (hight * hight);
  form.reset()

  if (result <= 18.4) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", usted está bajo de peso, acuda a un nutricionista.";
  } else if (result >= 18.5 && result <= 24.9) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", Felicidades usted tiene un peso saludable.";
  } else if (result >= 25.0 && result <= 29.9) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", usted está en sobrepeso considere acudir a un nutricionista.";
  } else if (result >= 30.0 && result <= 34.9) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", usted tiene obesidad clase 1, Acuda a un nutricionista.";
  } else if (result >= 35.0 && result <= 39.9) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", usted tiene obesidad clase 2, Acuda a un nutricionista.";
  } else if (result >= 40.0) {
    spanImc.innerHTML =
      "Su IMC es de: " +
      result.toFixed(1) +
      ", usted tiene obesidad clase 3. Acuda a un nutricionista.";
  } else {
    Toastify({
      text: "Ha ocurrido un error",
      duration: 2000,
      newWindow: false,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(90deg, #42afa1, #78d4a8)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

    spanImc.innerHTML = "";
    spanHight.innerHTML = "";
    spanWeight.innerHTML = "";
  }

}
