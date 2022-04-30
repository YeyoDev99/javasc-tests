// polystation cupon discount
console.group("polyStation-discount")

function cuponDiscountCalculation (cupon){
    if (cupon === "primera-compra"){
        const discount = 20
        const price = 15000
        const discountValue = discount * price / 100
        const totalPrice = price - discountValue
        return totalPrice
    }
    else if (cupon === "doble-compra"){
        const discount = 10
        const price = 15000
        const discountValue = discount * price / 100
        const totalPrice = price - discountValue
        return totalPrice
    }
    else if (cupon === "premio-bolos"){
        const discount = 70
        const price = 15000
        const discountValue = discount * price / 100
        const totalPrice = price - discountValue
        return totalPrice
    }
    else if (cupon === "premio-baile"){
        const discount = 90
        const price = 15000
        const discountValue = discount * price / 100
        const totalPrice = price - discountValue
        return totalPrice
    }
    else {
        return "15000 (cupon de descuento no valido)"
    }
}

function cuponDiscount(){
    const cuponInput = document.getElementById("polystationCupon")
    const cuponValue = cuponInput.value
    const cuponCalculation =  cuponDiscountCalculation (cuponValue)
    const popDiscount = document.getElementById("popDiscount")
    popDiscount.innerText = "el precio total incluyendo el descuento es de " + "$" + cuponCalculation
}
console.groupEnd