
 //Lista de usuarios
    const usuarios = 
    [
    {//posicion 0
        nombre: "salvador",
        documento: "12345",
        contrasena: "SALVADOR",
        usuariotipo: 1
    
    },

    {//pisicion1
        nombre: "flor",
        documento: "12345",
        contrasena:"FLOR",
        usuariotipo: 2
    },

    {
        nombre: "javier",
        documento: "12345",
        contrasena: "JAVIER",
        usuariotipo: 2
    },

    {
        nombre: "jaime",
        documento: "12345",
        contrasena: "JAIME",
        usuariotipo: 2
    },

    {
        nombre: "lulu",
        documento: "12345",
        contrasena: "LULU",
        usuariotipo: 2
    }
    ];

    //Lista de billetes:cantidad y valor
    const cajero = 
    [
    {
        cantidad: 0,
        valor:5000,   
    },
    {
        cantidad: 0,
        valor:10000,
    },
    {
        cantidad: 0,
        valor:20000,
    },
    {
        cantidad: 0,
        valor:50000,
    },
    {
        cantidad: 0, //b5,10,20,50,100
        valor:100000,
    },
    ];

    //   a.solicitar: documento, contrasena = Usuario 
    //   b.usuario: existe,
    //   c.Usuario(1admi-2cliente)
    //   if existe(1)
    
    alert("Bienvenido al banco municipal");
    alert("¿Desea iniciar sesion?");
    let documento = prompt("Ingrese documento de identidad");
    let contrasena = prompt("Ingrese contrasena");
    let totalcajero = 0
    let totaldenominacion = 0
    let dineroARetirar 
    //acumulador en programacion
      
    //condicional (for) array de usuarios
     for (let i = 0; i < usuarios.length; i++) //ComoComienza//CumpleCondicionTermina//ComoAvanza
     {   
        //cuando esto se cumpla el usuario existe ``
            if ((usuarios[i].documento == documento) && (usuarios[i].contrasena == contrasena))
            {
                console.log(`Bienvenido`)
                if (usuarios[i].usuariotipo == 1) 
                 {
                    alert("Bienvenido administrador");
                    alert("cargar cajero");
                    let b5000 =  parseInt(prompt("Ingrese la cantidad de billetes de 5.000 que desea cargar"));
                    cajero[0].cantidad = cajero[0].cantidad + b5000; //aqui actualicé la cantidad de el array cajero
                    let b10000 = parseInt(prompt("Ingrese la cantidad de billetes de 10.000 que sea cargar"));
                    cajero[1].cantidad = cajero[1].cantidad + b10000;
                    let b20000 = parseInt(prompt("Ingrese la cantidad de billetes de 20.000 que desea cargar"));
                    cajero[2].cantidad = cajero[2].cantidad + b20000;
                    let b50000 = parseInt(prompt("Ingrese la cantidad de billetes de 50.000 que desea cargar"));
                    cajero[3].cantidad = cajero[3].cantidad + b50000;
                    let b100000 = parseInt(prompt("Ingrese la cantidad de billetes de 100.000 que desea cargar"));
                    cajero[4].cantidad = cajero[4].cantidad + b100000;
                   

                    //condiciona (for) array cajero
                    for(let j= 0; j < cajero.length; j++)
                
                    { 
                        totaldenominacion =  cajero[j].cantidad * cajero[j].valor;               //puntos del dinero del cajero
                        console.log(`En billetes ${cajero[j].valor} tiene: ${(totaldenominacion).toLocaleString()}`);
                        totalcajero = totalcajero + totaldenominacion;
                    }
                    console.log(`El dinero total que hay en el cajero es ${(totalcajero).toLocaleString()}`);

                    let documento = prompt("Ingrese documento de identidad");
                    let contrasena = prompt("Ingrese contrasena");


                 }  else {alert("Bienvenido cliente")}

                    if (totalcajero == 0)
                    {alert("cajero en mantenimiento")} 
                    else { 
                    console.log(`El total de dinero que puede retirar es ${(totalcajero).toLocaleString()}`);
                    dineroARetirar = prompt("Ingrese la cantidad de dinero que quiere retirar");
                    if (dineroARetirar <= totalcajero ){ alert(`Tienes disponible ${(totalcajero).toLocaleString}`)

                    }
                    else {
                        alert(`no tienes fondos sufiientes`)

                        let dinerorestante 
                        dinerorestante = totalcajero - dineroARetirar
                        console.log (`la cantidad de dinero que queda en el cajero es ${(dinerorestante).toLocaleString()}`);
                        alert(`la cantidad de dinero que queda en el cajero es ${(dinerorestante).toLocaleString()}`);
                    }
                    //debe aparecer en consola el dinero restante por cada denominacion/dinero que hay por cada billete
               
                    }

                
            }
      
     }





    
  

    

 


       






