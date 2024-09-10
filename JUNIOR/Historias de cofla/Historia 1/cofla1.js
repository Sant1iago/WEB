/* Cofla quiere comprar el helado mas caro con la plata que tiene */

dineroCofla = prompt("¿Cuanto dinero tenés Cofla?");
dineroCofla = parseInt(dineroCofla);
vueltoMasCaro = dineroCofla - 2.9;
vueltoAgua = dineroCofla - 1;
vueltoBombon = dineroCofla - 1.8;


if (dineroCofla > 0.6 && dineroCofla <= 1){
    alert("Podes comprar cualquier palito de agua");
    alert("Comprando el palito de agua mas caro su vuelto es: " + vueltoAgua);
} 
else if (dineroCofla > 1 && dineroCofla <= 1.8){
    alert("Podes comprar cualquier palito de agua o uno de los helados bombon"); 
    alert("Comprando el bombon mas caro su vuelto es: " + vueltoBombon)
}
else if(dineroCofla > 1.8 && dineroCofla < 2.9){
    alert("Podes comprar palitos de agua y bombones");
    alert("Comprando el palito de agua mas caro su vuelto será: " + vueltoAgua);
    alert("Sino comprando el bombon mas caro su vuelto será: " + vueltoBombon);
}
else if(dineroCofla >= 2.9){
    alert("Podes comprar cualquier palito de agua, uno de los helados bombon, un potecito de helado de confites o un pote de 1/4");
    alert("Comprando el potecito de helado o el cuarto, su vuelto es: " + vueltoMasCaro);
    alert("Comprando el palito de agua mas caro su vuelto será: " + vueltoAgua);
    alert("Sino comprando el bombon mas caro su vuelto será: " + vueltoBombon);
}
else{
    alert("No tenes plata para comprar nada");
}



