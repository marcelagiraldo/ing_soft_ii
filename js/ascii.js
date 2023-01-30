
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
    tabla(ascii,binario);
};

function tabla(ascii,binario){
    var table="<table border=1><th> Código ASCII </th><th>128</th><th>64</th><th>32</th><th>16</th>";
    table+="<th>8</th><th>4</th><th>2</th><th>1</th> </tr></thead><tbody>";
	/* table+="<thead><tr>";
	table+="<tr>";
	table+="<th> Código ASCII </th>"; */
	/* table+="<th>128</th>";
    table+="<th>64</th>";
    table+="<th>32</th>";
    table+="<th>16</th>";
    table+="<th>8</th>";
    table+="<th>4</th>";
    table+="<th>2</th>";
	table+="<th>1</th> </tr></thead>";
    table+="<tbody>"; */
    for(j=0;j<binario.length;j++){
        table+="<tr><td>"+ascii[j]+"</td>";
        var bin = binario[j];
        var binary = bin.split("") 
        console.log(binary)
        if(binary.length==8){
            for(k=0;k<8;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==7){
            table+="<td>0</td>"
            for(k=0;k<7;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==6){
            table+="<td>0</td><td>0</td>"
            for(k=0;k<6;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==5){
            table+="<td>0</td><td>0</td><td>0</td>"
            for(k=0;k<5;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==4){
            table+="<td>0</td><td>0</td><td>0</td><td>0</td>"
            for(k=0;k<4;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==3){
            table+="<td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>"
            for(k=0;k<3;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==2){
            table+="<td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>"
            for(k=0;k<2;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        if(binary.length==1){
            table+="<td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>"
            for(k=0;k<1;k++){
                table+="<td>"+binary[k]+"</td>";
            }
        }
        table+="</tr>";
    }    
    table+="</tbody>";
    table+="</table>";
	document.getElementById("tabla").innerHTML=table;
}

function refrescar(){
    document.getElementById("tabla").innerHTML="";
    document.getElementById("texto").value="";
};

