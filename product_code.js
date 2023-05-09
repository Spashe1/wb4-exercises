const partCode1 = "XYZ:1234-L";

const part1 = parsePartCode(partCode1);
console.log('Partcode:', partCode1);
console.log('part1.supplierCode:', part1.supplierCode);
console.log('part1.productNumber:',part1.productNumber);
console.log('part1.size',  part1.size);


function parsePartCode(partCode){
   const colonPos = partCode.indexOf(':');
   const dasPos = partCode.indexOf('-');

   const thisSuplierCode = partCode.substring(0, colonPos);
   const productNumber = partCode.substring(colonPos + 1, dasPos);
   const size = partCode.substring(dasPos + 1);

   return{
      supplierCode: thisSuplierCode,
      productNumber: productNumber,
      size: size
   }
}












