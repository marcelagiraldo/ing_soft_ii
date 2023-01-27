
function traer_datos(){
    var texto = $("#texto").val();
    console.log("texto");

    var array_text = texto.split("");
    console.log(array_text)

    const ascii = [];
    const binario = [];
    for(i=0;i<array_text.length;i++){
        var as=array_text[i].charCodeAt();
        ascii.push(as);
    }
    console.log(ascii)
    for(i=0;i<ascii.length;i++){
        var bin=ascii[i].toString(2);
        binario.push(bin);
    }
    console.log(binario)
    /* var contendor  = $("#tbody").html();
    var nuevaFila   = '<tr>'
    for(i=0;i<ascii.length;i++){
        nuevaFila+='<td>"ascii[i]"</td>';
        for(i=0;i<binario.length;i++){
            nuevaFila+='<td>"binario[i]"</td>';
        }
        nuevaFila = '</tr>';
    }
    $("#tbody").html(contendor+nuevaFila); */
    tabla();
};

function tabla(ascii,binario){
    
}