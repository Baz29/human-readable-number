module.exports = function toReadable (number) {
let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
let numbersDec = ['zero','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
let numbersDec1020 = ['zero','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let numberArr = Array.from(number.toString(), Number);
let numberArrLenght = numberArr.length;
let thirdLetter = '';
let resultLetter = '';


if ((numberArrLenght === 3) && (numberArr[1]) === 0 && (numberArr[2]) ===0 ) {resultLetter = numbers[numberArr[0]] + ' hundred'} 
                          else {thirdLetter = (numbers[numberArr[0]] + ' hundred')                            
                             if (numberArr[2] === 0) 
                                {resultLetter = thirdLetter + ' ' + numbersDec[numberArr[1]]} 
                                  else 
                                    {if (numberArr[1] >= 2) 
                                      {resultLetter = thirdLetter + ' ' + numbersDec[numberArr[1]] + ' ' + numbers[numberArr[2]]}
                                        else 
                                          {if (numberArr[1] > 0) {resultLetter = thirdLetter + ' ' + numbersDec1020[numberArr[2]]} 
                                            else {resultLetter = thirdLetter + ' ' + numbers[numberArr[2]]}
                                          }
                                    } 

                            } 
if (numberArrLenght === 2)
          if (numberArr[1] === 0) 
            {resultLetter = numbersDec[numberArr[0]]} 
              else 
                {if (numberArr[0] >= 2) 
                  {resultLetter = numbersDec[numberArr[0]] + ' ' + numbers[numberArr[1]]}
                    else 
                      {if (numberArr[0] > 0) {resultLetter = numbersDec1020[numberArr[1]]} 
                        else {resultLetter = numbers[numberArr[1]]}
                      }
              }
if (numberArrLenght === 1) {resultLetter = numbers[numberArr[0]]}
return resultLetter;
}