let papitas = 0;
let pasar = () => {
    console.log(`Estas en la fiesta Mike ${papitas} papitas`);
}
pedirPapitas:
do{
    papitas = parseInt(prompt(`Cuantas papitas tiene para entrar a la fiesta?`, "10"));
    if(papitas>=10){
        while(true){
            pasar();
            papitas -=5;
            if(!(papitas) || Math.sign(papitas) == -1){ 
                console.warn(`Ya no tienes papitas sal de la fiesta`);
                break pedirPapitas;
            };
        }  
    }
}while(false)




