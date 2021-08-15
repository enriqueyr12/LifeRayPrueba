var entryText=document.getElementById("entrada");
var exitText=document.getElementById("salida"); 

var totalTax=0;
var totalPrice=0;

var product=new productos();

//Borra los textos
function resetFunction(){
    entryText.value="";
    exitText.value="";
}

//Almacena los productos en un array para examinarlos
function sendFunction(){
    totalPrice=0;
    totalTax=0;
    exitText.value="";
    
    var lines=entryText.value.split("\n"); 
    
    for(var i=0;i<lines.length;i++){
        //Se examina cada producto
        examineLine(lines[i]);
    } 

    //Se escribe los numeros totales
    writeFinalLines();
}

//Se almacena la cantidad, nombre del producto y precio, mas adelante se obtienen
//Los impuestos y se añaden
function examineLine(item){
    var toAdd=0;
    var productName=item.substr(2,item.indexOf(" a ")-2);
    var productPrice=item.substr(item.indexOf(" a ")+3,item.lastIndexOf(" "));   
    productPrice=parseFloat(productPrice.replace(",","."));

    toAdd+=product.getTaxToAdd(productName,productPrice)
    console.log(toAdd);
    toAdd+=product.getImportTaxToAdd(productName,productPrice);
    console.log(toAdd);

    totalTax+=toAdd;
    totalPrice+=productPrice+toAdd;
    writeExitLine(item.charAt(0),productName,productPrice+toAdd)
}

function writeExitLine(cant,name,price){
    exitText.value+=cant+" "+name+": "+price.toFixed(2)+" €\n";
} 

function writeFinalLines(){
    exitText.value+="Impuestos sobre las ventas: "+totalTax.toFixed(2)+" €\n"; 
    exitText.value+="Total: "+totalPrice.toFixed(2)+" €\n";
    checkText();
}

function checkText(){
    console.log(exitText.value);
    if(exitText.value.includes("NaN")){
        exitText.value="Los datos no se han introducido correctamente";
    }
}