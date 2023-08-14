function decimalToBinary(num) {
  //Write you code here
    let binary = [], i = 0;
    while(num != 0){
        let quotiont = num % 2;
		binary[i++] = quotiont;
		 num = parseInt(num / 2);
    }
 return binary.reverse().join("");  
}

window.decimalToBinary = decimalToBinary;
