var cantidadDeMesasIncompletas = 0;

function esUnaSolaPersona(grupo) {
    return grupo === 1;
}

function irAMesaMono(cantidadMesasMono) {
    cantidadMesasMono = cantidadMesasMono - 1;
    return cantidadMesasMono;
}

function ocuparLugarEnMesaDuoVacia() {
    this.cantidadDeMesasIncompletas = this.cantidadDeMesasIncompletas + 1;
}

function completarMesaDuo(cantidadMesasDuo) {
    this.cantidadDeMesasIncompletas = this.cantidadDeMesasIncompletas - 1;
    cantidadMesasDuo = cantidadMesasDuo - 1;
    return cantidadMesasDuo;
}

function irAMesaDuo(cantidadMesasDuo) {
    cantidadMesasDuo = cantidadMesasDuo - 1;
    return cantidadMesasDuo;
}

function quedanMesasMono(cantidadMesasMono) {
    return cantidadMesasMono !== 0;
}

function quedanMesasDuo(cantidadMesasDuo) {
    return cantidadMesasDuo !== 0;
}

function quedanMesasDuoIncompletas() {
    return this.cantidadDeMesasIncompletas !== 0; 
}

function sumar(cantidad, numero) {
    return cantidad + numero;
}

function mesasDuoListasParaCompletar(cantidadMesasDuo) {
    return this.cantidadDeMesasIncompletas === cantidadMesasDuo;
}


function totalDePersonasALasQueSeLesNegoElServicio(cantidadMesasMono, cantidadMesasDuo, listaDePersonas) {
    this.cantidadDeMesasIncompletas = 0;
    var cantidadDePersonasRechazadas = 0;
    for (i = 0; i < listaDePersonas.length; i++) { 
        if (this.esUnaSolaPersona(listaDePersonas[i])) {
            if (this.quedanMesasMono(cantidadMesasMono)) {
                cantidadDeMesasMonoQueQuedan = this.irAMesaMono(cantidadMesasMono);
                cantidadMesasMono = cantidadDeMesasMonoQueQuedan;
            }
            else {
                if (this.quedanMesasDuo(cantidadMesasDuo)) {
                    if (this.mesasDuoListasParaCompletar(cantidadMesasDuo)) {
                        cantidadDeMesasDuoQueQuedan = this.completarMesaDuo(cantidadMesasDuo);
                        cantidadMesasDuo = cantidadDeMesasDuoQueQuedan;
                    } else {
                        this.ocuparLugarEnMesaDuoVacia();
                    }

                } else {
                    cantidadDePersonasRechazadas = this.sumar(cantidadDePersonasRechazadas, 1);
                }
            }
        } else {
            if (this.quedanMesasDuo(cantidadMesasDuo)) {
                if (!this.quedanMesasDuoIncompletas()) {
                    cantidadDeMesasDuoQueQuedan = this.irAMesaDuo(cantidadMesasDuo);
                    cantidadMesasDuo = cantidadDeMesasDuoQueQuedan;
                } else {
                    cantidadDePersonasRechazadas = this.sumar(cantidadDePersonasRechazadas, 2);
                }
            } else {
                cantidadDePersonasRechazadas = this.sumar(cantidadDePersonasRechazadas, 2);
            }
        }
    }

    return cantidadDePersonasRechazadas;
}


