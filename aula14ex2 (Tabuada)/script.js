function tabuada() {
  let num = document.getElementById("txtn")
  let tab = document.getElementById("seltab")
  //let res = document.getElementById("res")
  let tabuada = ""
  tab.innerHTML = ''

  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
  }
  for (let c = 1; c <= 10; c++) {
    tabuada += `${num.value} x ${c} = ${num.value * c} <br>`
    let item = document.createElement("option")
    item.text = `${num.value} x ${c} = ${num.value * c}`
    item.value = `tab${c}`
    tab.appendChild(item)
  }
  //res.innerHTML = tabuada;
}