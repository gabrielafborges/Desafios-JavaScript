function gradingStudents(grades) {
    // Write your code here
    let listaFormatada = [];

    for(let i = 0; i < grades.length; i++){
        let indiceAtual = grades[i];
        let proximoMultiplo = Math.ceil(indiceAtual/5)*5;
        
        if(indiceAtual < 38){
            listaFormatada.push(indiceAtual)
        }else if(proximoMultiplo - indiceAtual < 3){
                listaFormatada.push(proximoMultiplo);
            }else{
                listaFormatada.push(indiceAtual);
            }
    }
    return listaFormatada
}
const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));
