var i, aux;
var Iterations = 0;

function Calculus() {
    document.getElementById('RespuestaEquis').value = "";
    document.getElementById('RespuestaYe').value = "";
    document.getElementById('RespuestaZeta').value = "";
    const Eq1 = document.getElementById('EcuacionUno').value;
    const Eq2 = document.getElementById('EcuacionDos').value;
    const Eq3 = document.getElementById('EcuacionTres').value;
    const CeText = document.getElementById('CEtext').value;
    var ProOne = Eq1.toLowerCase();
    var ProTwo = Eq2.toLowerCase();
    var ProThree = Eq3.toLowerCase();
    aux = 0;
    Iterations = 0;
    CE = 0;
    CE = parseFloat(CeText);
    //ECUACION 1
        //Para x1
        i = 0;
        var aux = ProOne.indexOf('x');
        var x1 = parseFloat(ProOne.substring(0,aux));
        var partEcuation = ProOne.substring(0,aux+1);
        if (partEcuation == '+x' || partEcuation == '-x') {
            if (partEcuation == '-x') {
                x1 = -1;
            } else {
                x1 = 1;
            }
        }
        //Para y1
        i = aux + 1;
        aux = ProOne.indexOf('y');
        var y1 = parseFloat(ProOne.substring(i, aux+1));
        partEcuation = ProOne.substring(i,aux + 1);
        if (partEcuation == '+y' || partEcuation == '-y') {
            if (partEcuation == '-y') {
                y1 = -1;
            } else {
                y1 = 1;
            }
        }
        //Para z1
        i = aux + 1;
        aux = ProOne.indexOf('z');
        var z1 = parseFloat(ProOne.substring(i, aux+1));
        partEcuation = ProOne.substring(i,aux + 1);
        if (partEcuation == '+z' || partEcuation == '-z') {
            if (partEcuation == '-z') {
                z1 = -1;
            } else {
                z1 = 1;
            }
        }
        //Para resultado
        i = aux + 2;
        var extra = Eq1.length;
        var Res1 = parseFloat(ProOne.substring(i, extra+1));
        partEcuation = ProOne.substring(i,extra + 1);
    //ECUACION 2
        //Para x2
        i = 0;
        var aux = ProTwo.indexOf('x');
        var x2 = parseFloat(ProTwo.substring(0,aux));
        var partEcuation = ProTwo.substring(0,aux+1);
        if (partEcuation == '+x' || partEcuation == '-x') {
            if (partEcuation == '-x') {
                x2 = -1;
            } else {
                x2 = 1;
            }
        }
        //Para y2
        i = aux + 1;
        aux = ProTwo.indexOf('y');
        var y2 = parseFloat(ProTwo.substring(i, aux+1));
        partEcuation = ProTwo.substring(i,aux + 1);
        if (partEcuation == '+y' || partEcuation == '-y') {
            if (partEcuation == '-y') {
                y2 = -1;
            } else {
                y2 = 1;
            }
        }
        //Para z2
        i = aux + 1;
        aux = ProTwo.indexOf('z');
        var z2 = parseFloat(ProTwo.substring(i, aux+1));
        partEcuation = ProTwo.substring(i,aux + 1);
        if (partEcuation == '+z' || partEcuation == '-z') {
            if (partEcuation == '-z') {
                z2 = -1;
            } else {
                z2 = 1;
            }
        }
        //Para resultado
        i = aux + 2;
        var extra = Eq1.length;
        var Res2 = parseFloat(ProTwo.substring(i, extra+1));
        partEcuation = ProTwo.substring(i,extra + 1);
        //ECUACION 3
            //Para x3
            i = 0;
            var aux = ProThree.indexOf('x');
            var x3 = parseFloat(ProThree.substring(0,aux));
            var partEcuation = ProThree.substring(0,aux+1);
            if (partEcuation == '+x' || partEcuation == '-x') {
                if (partEcuation == '-x') {
                    x3 = -1;
                } else {
                    x3 = 1;
                }
            }
            //Para y3
            i = aux + 1;
            aux = ProThree.indexOf('y');
            var y3 = parseFloat(ProThree.substring(i, aux+1));
            partEcuation = ProThree.substring(i,aux + 1);
            if (partEcuation == '+y' || partEcuation == '-y') {
                if (partEcuation == '-y') {
                    y3 = -1;
                } else {
                    y3 = 1;
                }
            }
            //Para z3
            i = aux + 1;
            aux = ProThree.indexOf('z');
            var z3 = parseFloat(ProThree.substring(i, aux+1));
            partEcuation = ProThree.substring(i,aux + 1);
            if (partEcuation == '+z' || partEcuation == '-z') {
                if (partEcuation == '-z') {
                    z3 = -1;
                } else {
                    z3 = 1;
                }
            }
            //Para resultado
            i = aux + 2;
            var extra = Eq1.length;
            var Res3 = parseFloat(ProThree.substring(i, extra+1));
            partEcuation = ProThree.substring(i,extra + 1);
            console.log('Valor de x1: ' + x1);
            console.log('Valor de y1: ' + y1);
            console.log('Valor de z1: ' + z1);
            console.log('Resultado: ' + Res1);
            console.log('Valor de x2: ' + x2);
            console.log('Valor de y2: ' + y2);
            console.log('Valor de z2: ' + z2);
            console.log('Resultado: ' + Res2);
            console.log('Valor de x3: ' + x3);
            console.log('Valor de y3: ' + y3);
            console.log('Valor de z3: ' + z3);
            console.log('Resultado: ' + Res3);
            console.log('Checking the stuff');
        //END OF READ
        //Acomodar ecuacion
        if (Math.abs(x1) > Math.abs(x2)) {
            if (Math.abs(x1) > Math.abs(x3)) {
                //Eq1 mayor de todas
                if (Math.abs(y2) > Math.abs(y3)) {
                    //Eq2 mayor a Eq3
                } else {
                    //Eq3 mayor a Eq2, cambiar
                    var xAux = x2;
                    var yAux = y2;
                    var zAux = z2;
                    var resAux = Res2;
                    x2 = x3;
                    y2 = y3;
                    z2 = z3;
                    Res2 = Res3;
                    x3 = xAux;
                    y3 = yAux;
                    z3 = zAux;
                    Res3 = resAux;
                }
            } else {
                //Eq3 > Eq1 > Eq2. Cambiar E3 y E1
                xAux = x1;
                yAux = y1;
                zAux = z1;
                resAux = Res1;
                x1 = x3;
                y1 = y3;
                z1 = z3;
                Res1 = Res3;
                x3 = xAux;
                y3 = yAux;
                z3 = zAux;
                Res3 = resAux;
                if (Math.abs(y2) > Math.abs(y3)) {
                    //Eq2 > Eq3
                } else {
                    //Eq3 > Eq2, cambiamos
                    xAux = x2;
                    yAux = y2;
                    zAux = z2;
                    resAux = Res2;
                    x2 = x3;
                    y2 = y3;
                    z2 = z3;
                    Res2 = Res3;
                    x3 = xAux;
                    y3 = yAux;
                    z3 = zAux;
                    Res3 = resAux;
                }
            }
        } else {
            //E2 > E1, cambiamos
            xAux = x1;
            yAux = y1;
            zAux = z1;
            resAux = Res1;
            x1 = x2;
            y1 = y2;
            z1 = z2;
            Res1 = Res2;
            x2 = xAux;
            y2 = yAux;
            z2 = zAux;
            Res2 = resAux;
            if (Math.abs(x1) > Math.abs(x3)) {
                //E1 > E3
                if (Math.abs(y2) > Math.abs(y3)) {
                    //E2 > E3
                } else {
                    //E3 > E2, cambiamos
                    xAux = x2;
                    yAux = y2;
                    zAux = z2;
                    resAux = Res2;
                    x2 = x3;
                    y2 = y3;
                    z2 = z3;
                    Res2 = Res3;
                    x3 = xAux;
                    y3 = yAux;
                    z3 = zAux;
                    Res3 = resAux;
                }
            } else {
                //E3 > E1
                xAux = x1;
                yAux = y1;
                zAux = z1;
                resAux = Res1;
                x1 = x3;
                y1 = y3;
                z1 = z3;
                Res1 = Res3;
                x3 = xAux;
                y3 = yAux;
                z3 = zAux;
                Res3 = resAux;
                if (Math.abs(y2) > Math.abs(y3)) {
                    //E2 > E3
                } else {
                    //E3 > E2, cambiamos
                    xAux = x2;
                    yAux = y2;
                    zAux = z2;
                    resAux = Res2;
                    x2 = x3;
                    y2 = y3;
                    z2 = z3;
                    Res2 = Res3;
                    x3 = xAux;
                    y3 = yAux;
                    z3 = zAux;
                    Res3 = resAux;
                }
            }
        }
        console.log('Checkpoint One');
        //PRINT RESULT
        console.log('Valor de x1: ' + x1);
        console.log('Valor de y1: ' + y1);
        console.log('Valor de z1: ' + z1);
        console.log('Resultado: ' + Res1);
        console.log('Valor de x2: ' + x2);
        console.log('Valor de y2: ' + y2);
        console.log('Valor de z2: ' + z2);
        console.log('Resultado: ' + Res2);
        console.log('Valor de x3: ' + x3);
        console.log('Valor de y3: ' + y3);
        console.log('Valor de z3: ' + z3);
        console.log('Resultado: ' + Res3);
        //Time to do the work
        var breaker = 0;//Inactive
        var MyIteration = 0;
        var CeX = 0;
        var CeY = 0;
        var CeZ = 0;
        console.log('Checkpoint Two');
        var valRealX = 0;
        var valRealY = 0;
        var valRealZ = 0;
        var valorDeX = new Array();
        var valorDeY = new Array();
        var valorDeZ = new Array();
        var IteracionEquis = new Array();
        var IteracionYe = new Array();
        var IteracionZeta = new Array();
        var IteracionRandom = new Array();
        while (breaker == 0){
            //While Breaker is Inactive, do the work
            //when breaker awake, stop doing the job
            xAux = valRealX;
            yAux = valRealY;
            zAux = valRealZ;
            //Calcule the Aproximations
            if (MyIteration == 0) {
                valRealX = Res1/x1;
                valRealY = (Res2 + (-1 * x2 * valRealX)) / y2;
                valRealZ = (Res3 + (-1 * x3 * valRealX) + (-1 * y3 * valRealY)) / z3;
            } else {
                valRealX = (Res1 + (-1 * y1 * valRealY) + (-1 * z1 * valRealZ)) / x1;
                valRealY = (Res2 + (-1 * x2 * valRealX) + (-1 * z2 * valRealZ)) / y2;
                valRealZ = (Res3 + (-1 * x3 * valRealX) + (-1 * y3 * valRealY)) / z3;
            }
            //Arrays to graphic
            IteracionEquis.push('x' + (MyIteration+1));
            IteracionYe.push('y' + (MyIteration+1));
            IteracionZeta.push('z' + (MyIteration+1));
            valorDeX.push(valRealX);
            valorDeY.push(valRealY);
            valorDeZ.push(valRealZ);
            IteracionRandom.push("Iteracion No." + (MyIteration+1));
            //Calcule CE using the realVals
            CeX = Math.abs((valRealX - xAux) / valRealX);
            CeY = Math.abs((valRealY - yAux) / valRealY);
            CeZ = Math.abs((valRealZ - zAux) / valRealZ);
            //Be counting the iterations
            MyIteration++;
            console.log('Iteration number ' + MyIteration);
            if (CeX < CE || CeY < CE || CeZ < CE)//If the error is gotted
            {
                breaker = 1;//Active the breaker
            }
            console.log('In cicle, breaker didnt woke up yet');
            //Else, still do the job
            if (MyIteration == 15) {//Limit the iteration to ten
                breaker = 1;
            }
        }
        //Print the last results
        document.getElementById('RespuestaEquis').value = valRealX;
        document.getElementById('RespuestaYe').value = valRealY;
        document.getElementById('RespuestaZeta').value = valRealZ;
        valorDeX.push(valRealX);
        valorDeY.push(valRealY);
        valorDeZ.push(valRealZ);
        console.log(valorDeX);
        console.log(IteracionEquis);
        const $Graphics = document.getElementsByClassName("MyNewGrafic");
        const Datos={
            label: "Valor de X",
            data: valorDeX,
            backgroundColor: 'rgba(245, 10, 10)',
            borderColor: "rgb(245, 10, 10)",
            borderWith: 1
        };
        const Datos2={
            label: "Valor de Y",
            data: valorDeY,
            backgroundColor: 'rgba(10, 60, 245 )',
            borderColor: 'rgb(10, 60, 245 )',
            borderWith: 1
        };
        const Datos3={
            label: "Valor de z",
            data: valorDeZ,
            backgroundColor: 'rgba(85, 245, 10)',
            borderColor: 'rgb(85, 245, 10)',
            borderWith: 1
        };
        new Chart ($Graphics, {
            type:'line',
            data:{
                labels:IteracionRandom,
                datasets: [Datos,Datos2,Datos3]
            }
        })

}