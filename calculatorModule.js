let calculatorModule = (() => {
    let _numbStorage = [];
    let operations = [];
    const sum = (firstNum, secondNum) => firstNum + secondNum;
    const minus = (firstNum, secondNum) => firstNum - secondNum;
    const divide = (firstNum, secondNum) => firstNum / secondNum;
    const multiplicate = (firstNum, secondNum) => firstNum * secondNum;
    const _calcWard = {
        '+': sum,
        '-': minus,
        '/': divide,
        '*': multiplicate
            };
   

    
    const enter = item => {
     _numbStorage = [..._numbStorage, item]
    }
            

        
         
    const equals = () => {
    const [firstNum, operator, secondNum] = _numbStorage;
    let result =  _calcWard[operator] ? _calcWard[operator](firstNum, secondNum) :
       "Erro, operação inválida";
    let finalResult = `${firstNum} ${operator} ${secondNum} = ${result}`;
    operations = [...operations, finalResult];
    _numbStorage = []
    return finalResult
    };
            
    const list = () => {
        return `Essa é sua lista de opeações até o momento: ${operations}`
    };

    const reset = () => { 
    firstNum=0
    secondNum = 0;
    _numbStorage = [];
    return (`A calulador foi resetada com sucesso`)
    }

    return {enter, equals, list, reset};
})();



