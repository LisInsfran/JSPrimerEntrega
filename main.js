/* otras variables */
let precio_1 = 0;
let precio_2 = 0;
let precio_total = 0;
let suma_total = 0;
let precio_iva = 0;
let total_iva = 0;
let cuotas = 4;


/* array productos*/
class Producto{
    constructor(id , nombre , precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("Datos del producto");
        console.log("Nombre:", this.nombre);
        console.log("Precio", this.precio);
        console.log("Stock", this.stock);
    }

    get_stock(){
        if( this.stock <= 10){
            console.log("HACER PEDIDO, QUEDAN" , this.stock , this.nombre)
        }
        return this.stock
    }

    venta_stock(cantidad){
        if(this.stock > 0){
            this.stock = this.stock - cantidad
        }
    }
}



/* Variables Productos para el constructor*/
let buzo = new Producto(1 , "Buzo Bunny LOVE ON TOUR" , 7500 , 50);
let buzoDos = new Producto(2 , "Buzo TPWK LOVE ON TOUR" , 6000 , 50);
let buzoTres = new Producto(3 , "Buzo LOVE ON TOUR" , 7500 , 50);
let buzoCuatro = new Producto(4 , "Buzo TPWK GLITTER" , 7500 , 50);
let remera = new Producto(5 , "Remera BUNNY LOVE" , 500 , 50);
let remeraDos = new Producto(6 , "Remera DYKWAR" , 4000 , 50);
let remeraTres = new Producto(7 , "Remera GOLDEN" , 4000 , 50);
let remeraCuatro = new Producto(8 , "Remera LOVE ON TOUR" , 4000 , 50);
let gorro = new Producto(9 , "Gorro HS IS MY FRIEND" , 3000 , 50);
let bolso = new Producto(10 , "Bolso" , 50 , 50);

/* clase constructora de objetos  usuario*/
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

class Usuario{
    constructor(nombre,apellido){

        this.nombre = nombre;
        this.apellido = apellido;

    }

    bienvenida(){
        console.log("Nombre:" + this.nombre);
        console.log("Apellido:" + this.apellido);
        alert("¡Hola! Bienvenidos al SHOP oficial de Harry Styles: " + this.nombre)
    }
}

let nuevo_usuario = new Usuario(nombre , apellido);



/*funcion sumar*/ 
function suma_precios (precio_1 , precio_2){
    suma_total = precio_1 + precio_2;
    parseInt(suma_total)
}

/*funcion iva*/ 
function iva_precios (precio_iva){
    total_iva = precio_iva * 0.21;
    total_iva = total_iva + suma_total;
    parseInt(total_iva)
}

/*funcion cuotas */ 
function precio_cuotas(){
    while (cuotas == 4){
      cuotas = prompt("Ingrese: \n [1] Un solo pago \n [2] 3 cuotas \n [3] 6 cuotas \n [4] 12 cuotas");
     cuotas = parseInt(cuotas);  
      if (cuotas == 1){
        alert("Realizo su pago"); 
        break
      }

      else if (cuotas == 2){
        alert("Sus cuotas son de: " + Math.trunc(total_iva / 3));
        alert("GRACIAS POR SU COMPRA! \n Su pedido estara listo a partir de las 24hs habiles");
        break
      }

      else if (cuotas == 3){
        alert("Sus cuotas son de: " + Math.trunc(total_iva / 6));
        alert("GRACIAS POR SU COMPRA! \n Su pedido estara listo a partir de las 24hs habiles");
        break
      }
      
      else if (cuotas == 4){
        alert("Sus cuotas son de: " + Math.trunc(total_iva / 12));
        alert("GRACIAS POR SU COMPRA! \n Su pedido estara listo a partir de las 24hs habiles");
        break
      }
      else{
        alert("No valido");
      }
    }
  }

/* funcion aviso compra productos*/
function productos (producto){
    alert("Compró " + producto + " $" + suma_total);
}

/* funcion de comprar*/
function comprar (){
    let opcion = 11;
    while (opcion == 11){
        iva_precios(suma_total);
        parseInt(iva_precios);
        opcion = prompt(" Ingrese: \n [1] Buzo Bunny LOVE ON TOUR $7500 \n [2] Buzo TPWK LOVE ON TOUR $6000 \n [3] Buzo LOVE ON TOUR $7500 \n [4] Buzo TPWK GLITTER $7500 \n [5] Remera BUNNY LOVE $500 \n [6] Remera DYKWAR $4000 \n [7] Remera GOLDEN $4000 \n [8] Remera LOVE ON TOUR $4000 \n [9] Gorro HS IS MY FRIEND $3000 \n [10] Salir \n [11] Desea pagar? \n Su Carrito es de: $"+suma_total +" \n Precio + iva: $" + total_iva);
        parseInt(opcion)
        if (opcion == 1){
            opcion = buzo;
            suma_precios(suma_total , buzo.precio);
            parseInt(suma_total);
            productos("buzo");
            buzo.get_stock();
            buzo.venta_stock(1);
            console.log("Stock buzo :" , buzo.stock , "unidades");
            return comprar()
            
        }

        else if (opcion == 2){
            opcion =buzoDos ;
            suma_precios(suma_total , buzoDos.precio);
            parseInt(suma_total);
            productos("buzoDos");
            buzoDos.get_stock();
            buzoDos.venta_stock(1);
            console.log("Stock buzoDos :" , buzoDos.stock , "unidades");
            return comprar()
        }

        else if (opcion == 3){
            opcion = buzoTres;
            suma_precios(suma_total , buzoTres.precio);
            parseInt(suma_total);
            productos("buzoTres");
            buzoTres.get_stock();
            buzoTres.venta_stock(1);
            console.log("Stock buzoTres :" , buzoTres.stock , "unidades");
            return comprar()
        }

        else if (opcion == 4){
            opcion = buzoCuatro;
            suma_precios(suma_total , buzoCuatro.precio);
            parseInt(suma_total);
            productos("buzoCuatro");
            buzoCuatro.get_stock();
            buzoCuatro.venta_stock(1);
            console.log("Stock buzoCuatro:" , buzoCuatro.stock , "unidades");
            return comprar()
        }

        else if (opcion == 5){
            opcion = remera;
            suma_precios(suma_total , remera.precio);
            parseInt(suma_total);
            productos("remera");
            remera.get_stock();
            remera.venta_stock(1);
            console.log("Stock remera :" , remera.stock , "unidades");
             return comprar()
        }

        else if (opcion == 6){
            opcion = remeraDos;
            suma_precios(suma_total , remeraDos.precio);
            parseInt(suma_total);
            productos("remeraDos");
            remeraDos.get_stock();
            remeraDos.venta_stock(1);
            console.log("Stock remeraDos :" , remeraDos.stock , "unidades");
            return comprar() 
        }

        else if (opcion == 7){
            opcion = remeraTres;
            suma_precios(suma_total , remeraTres.precio);
            parseInt(suma_total);
            productos("remeraTres");
            remeraTres.get_stock();
            remeraTres.venta_stock(1);
            console.log("Stock remeraTres :" , remeraTres.stock , "unidades");
            return comprar()
        }

        else if (opcion == 8){
            opcion = remeraCuatro;
            suma_precios(suma_total , remeraCuatro.precio);
            parseInt(suma_total);
            productos("remeraCuatro");
            remeraCuatro.get_stock();
            remeraCuatro.venta_stock(1);
            console.log("Stock remeraCuatro :" , remeraCuatro.stock , "unidades");
            return comprar() 
        }

        else if (opcion == 9){
            opcion = gorro;
            suma_precios(suma_total , gorro.precio);
            parseInt(suma_total);
            productos("gorro");
            gorro.get_stock();
            gorro.venta_stock(1);
            console.log("Stock gorro :" , gorro.stock , "unidades");
            return comprar()
        }

        else if (opcion == 10){
            alert("Finalizo el proceso");
            break
        }
        else if (opcion == 11){
            alert("Pagar");
            precio_cuotas();
            break   
        }
        else{
            alert("No valido")
            return comprar()
        }

    }
}



/*algoritmo*/ 
nuevo_usuario.bienvenida();
comprar();
