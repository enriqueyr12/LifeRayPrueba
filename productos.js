class productos{
    constructor(){
        //Al no tener la totalidad de los productos se han añadido unos cuantos
        //a modo de "base de datos" para poder clasificarlos de alguna manera
        this.noTaxObjects=[];
        this.noTaxObjects.push("libro");
        this.noTaxObjects.push("chocolate");
        this.noTaxObjects.push("bombon"); 
        this.noTaxObjects.push("pastilla")
    } 

    //Devuelve el impuesto a añadir si no es comida, libro o producto medico
    getTaxToAdd(product,price){
        for(var i=0;i<this.noTaxObjects.length;i++){
            if(product.includes(this.noTaxObjects[i])){
                return 0;
            }
        }
        return Math.round(((price*10)/100)*20)/20;
    }

    //Devuelve el impuesto a añadir si es importado
    getImportTaxToAdd(product,price){
        if(product.includes("import")){
            return Math.round(((price*5)/100)*20)/20;
        }
        return 0;
    }
}