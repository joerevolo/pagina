function mostrar(){
    let xop = parseInt(document.getElementById('op').value);
    let xpre=0;
    switch (xop){
        case 1:
            xpre =80.00;
            document.getElementById('img').src="img/productos/reloj.jpg";
            break;
        case 2:
            xpre =200.00;
            document.getElementById('img').src="img/productos/bolsas.jpg";
            break
        case 3:
            xpre= 250.00;
            document.getElementById('img').src="img/productos/zapatillas.jpg";
            break
    }
    document.getElementById('txtPre').value=xpre.toFixed(2);
    calcular();
}
function calcular(){
    let xprecio = parseInt(document.getElementById('txtPre').value);
    let xcantidad = parseInt(document.getElementById('txtCan').value);
    xs= xprecio * xcantidad 
    document.getElementById('txtImp').value=xs.toFixed(2);
    //color
    document.getElementById('txtImp').style.backgroundColor=""
    document.getElementById('txtCan').style.backgroundColor=""
    document.getElementById('txtPre').style.backgroundColor=""
}
function nuevo(){
    document.getElementById('txtImp').value=''
    document.getElementById('txtCan').value=''
}
